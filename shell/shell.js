/* 千里江山 · 合卷 —— 外壳逻辑
   两卷各自是一个独立的实时山水应用，外壳负责：
   封面、卷次、转场、合卷印章账本、入云之门、终章。 */
(() => {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const FRAME = $('#frame');
  const STAGE = $('#stage');
  const VEIL = $('#veil');
  const CLASP = $('#clasp');
  const PANEL = $('#panel');
  const GATE = $('#gate');
  const FINALE = $('#finale');
  const HELP = $('#help');
  const TOAST = $('#toast');

  const CH = {
    1: {
      src: 'ch1/index.html', num: '壹', kicker: '第 一 卷', title: '人在画中游',
      note: '入画 · 苔径启行', total: 8,
    },
    2: {
      src: 'ch2/index.html', num: '贰', kicker: '第 二 卷', title: '云游青绿',
      note: '入云 · 长卷再展', total: 7,
    },
  };

  const S = {
    chapter: 0,
    c1: 0,
    c2: 0,
    gateDismissed: false,
    finaleShown: false,
    halfWarned: false,
    lock: false,
  };

  /* ---------------- 封面环境声（程序化合成，无音频文件） ---------------- */
  const Ambient = (() => {
    const KEY = 'qianli-hejuan-ambient';
    const BASE = 0.22;
    let ctx = null, master = null, windGain = null;
    let muted = false;
    let timer = null;
    try { muted = localStorage.getItem(KEY) === 'off'; } catch (e) { /* ignore */ }

    function noise(c) {
      const len = Math.floor(c.sampleRate * 4);
      const buf = c.createBuffer(1, len, c.sampleRate);
      const d = buf.getChannelData(0);
      let last = 0;
      for (let i = 0; i < len; i++) {
        last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
        d[i] = last * 3.2;
      }
      return buf;
    }

    function build() {
      const src = ctx.createBufferSource();
      src.buffer = noise(ctx);
      src.loop = true;
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 480; bp.Q.value = 0.6;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1200;
      windGain = ctx.createGain(); windGain.gain.value = 0.14;
      src.connect(bp); bp.connect(lp); lp.connect(windGain); windGain.connect(master);
      src.start();

      [[73.42, 'sine', 0.045], [110, 'triangle', 0.03], [146.83, 'sine', 0.022]].forEach(([f, type, g]) => {
        const o = ctx.createOscillator(); o.type = type; o.frequency.value = f;
        o.detune.value = Math.random() * 8 - 4;
        const og = ctx.createGain(); og.gain.value = g;
        o.connect(og); og.connect(master); o.start();
      });

      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.05;
      const lg = ctx.createGain(); lg.gain.value = 0.28;
      lfo.connect(lg); lg.connect(windGain.gain); lfo.start();
    }

    function pluck() {
      if (!ctx || muted) return;
      const notes = [293.66, 349.23, 392.0, 440.0, 523.25, 587.33];
      const f = notes[Math.floor(Math.random() * notes.length)];
      const t = ctx.currentTime + 0.02;
      const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.setValueAtTime(f, t);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.12, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 3.2);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1800;
      o.connect(g); g.connect(lp); lp.connect(master);
      o.start(t); o.stop(t + 3.4);
    }

    function schedule() {
      clearTimeout(timer);
      timer = setTimeout(() => { pluck(); schedule(); }, 5200 + Math.random() * 6500);
    }

    function fade(v, sec) {
      if (!ctx) return;
      const t = ctx.currentTime;
      master.gain.cancelScheduledValues(t);
      master.gain.setValueAtTime(master.gain.value, t);
      master.gain.linearRampToValueAtTime(v, t + sec);
    }

    async function start() {
      if (muted) return;
      if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        ctx = new AC();
        master = ctx.createGain();
        master.gain.value = 0;
        master.connect(ctx.destination);
        build();
      }
      if (ctx.state === 'suspended') await ctx.resume().catch(() => {});
      fade(BASE, 3);
      if (!timer) schedule();
    }

    function duck() { if (ctx) fade(0, 0.9); }
    function raise() { if (ctx && !muted) fade(BASE, 2.2); }
    function setMuted(m) {
      muted = m;
      try { localStorage.setItem(KEY, m ? 'off' : 'on'); } catch (e) { /* ignore */ }
      if (m) fade(0, 0.5);
      else start();
    }

    return {
      start, duck, raise, setMuted,
      isMuted: () => muted,
      state: () => (ctx ? ctx.state : 'none'),
      gain: () => (master ? Number(master.gain.value.toFixed(3)) : 0),
    };
  })();

  /* ---------------- 进度：优先读游戏本体，其次读存档 ---------------- */
  const STORE_A = 'qianli-river-first-person.seals.v1';
  const STORE_B = 'qianli-river-save-v1';

  function readSaved() {
    let a = 0, b = 0;
    try {
      const rawA = JSON.parse(localStorage.getItem(STORE_A) || '[]');
      if (Array.isArray(rawA)) a = rawA.length;
    } catch (e) { /* ignore */ }
    try {
      const rawB = JSON.parse(localStorage.getItem(STORE_B) || 'null');
      if (rawB && Array.isArray(rawB.seals)) b = rawB.seals.length;
      else if (rawB && Array.isArray(rawB.collected)) b = rawB.collected.length;
    } catch (e) { /* ignore */ }
    return { a: Math.min(a, 8), b: Math.min(b, 7) };
  }

  function liveCounts() {
    let doc = null, win = null;
    try {
      doc = FRAME.contentDocument;
      win = FRAME.contentWindow;
    } catch (e) { return null; }
    if (!doc || !win) return null;

    const fromText = () => {
      const el = doc.querySelector('#seal-count');
      const m = el && /(\d+)\s*\/\s*\d+/.exec(el.textContent || '');
      return m ? Number(m[1]) : null;
    };

    let c1 = S.c1, c2 = S.c2;
    if (S.chapter === 1) {
      let n = null;
      try {
        const app = win.__QIANLI__;
        if (app && app.collectedSites && typeof app.collectedSites.size === 'number') n = app.collectedSites.size;
      } catch (e) { /* ignore */ }
      if (n === null) n = fromText();
      if (n !== null) c1 = Math.max(c1, Math.min(8, n));
    } else if (S.chapter === 2) {
      let n = null;
      try {
        const app = win.__QIANLI__;
        const set = app && app.game && app.game.sealsCollected;
        if (set && typeof set.size === 'number') n = set.size;
      } catch (e) { /* ignore */ }
      if (n === null) n = fromText();
      if (n !== null) c2 = Math.max(c2, Math.min(7, n));
    }
    return { c1, c2 };
  }

  /* ---------------- 账本 UI ---------------- */
  function buildLedger() {
    const box = $('#ledger');
    box.innerHTML = '';
    const g1 = document.createElement('div');
    g1.className = 'grp';
    for (let i = 0; i < 8; i++) g1.appendChild(document.createElement('i'));
    const g2 = document.createElement('div');
    g2.className = 'grp';
    for (let i = 0; i < 7; i++) g2.appendChild(document.createElement('i'));
    const sep = document.createElement('span');
    sep.className = 'sep';
    sep.textContent = '十五印';
    box.append(g1, g2, sep);

    const cp = $('#clasp-pips');
    cp.innerHTML = '';
    for (let i = 0; i < 15; i++) cp.appendChild(document.createElement('i'));

    const fp = $('#finale-pips');
    fp.innerHTML = '';
    for (let i = 0; i < 15; i++) fp.appendChild(document.createElement('i'));
  }

  function paint(counts) {
    S.c1 = Math.min(8, counts.c1);
    S.c2 = Math.min(7, counts.c2);

    const ledger = $('#ledger');
    const pips = [...ledger.querySelectorAll('i')];
    pips.forEach((el, i) => el.classList.toggle('on', i < S.c1 || (i >= 8 && i - 8 < S.c2)));

    document.querySelector('[data-count="1"]').textContent = `${S.c1} / 8`;
    document.querySelector('[data-count="2"]').textContent = `${S.c2} / 7`;
    document.querySelectorAll('[data-cover-count]').forEach((el) => {
      el.textContent = el.getAttribute('data-cover-count') === '1' ? `${S.c1} / 8` : `${S.c2} / 7`;
    });

    const cp = [...$('#clasp-pips').children];
    const total = S.c1 + S.c2;
    cp.forEach((el, i) => el.classList.toggle('on', i < total));

    const fp = [...$('#finale-pips').children];
    fp.forEach((el, i) => el.classList.toggle('on', i < total));

    const finBtn = $('#btn-show-finale');
    if (finBtn) finBtn.hidden = total < 15;

    if (S.chapter === 1 && S.c1 >= 8 && !S.gateDismissed && GATE.hidden) showGate();

    // 十五印齐才落终章；单独玩卷二到七印，只提醒还差卷一的八印
    if (total >= 15 && !S.finaleShown) {
      S.finaleShown = true;
      if (S.chapter === 2) armFinale();
      else setTimeout(() => { if (FINALE.hidden) showFinale(); }, 1600);
    } else if (S.chapter === 2 && S.c2 >= 7 && S.c1 < 8 && !S.halfWarned) {
      S.halfWarned = true;
      toast('七印归一 · 回卷一收满八印，才是合卷', 4200);
    }
  }

  /* 七印归一后，卷二会先展开全景；等全景收了再落终章 */
  function armFinale() {
    let fired = false;
    let inPano = false;
    const fire = (delay) => {
      if (fired) return;
      fired = true;
      setTimeout(() => {
        if (S.chapter === 2 && FINALE.hidden) showFinale();
      }, delay);
    };
    try {
      const g = FRAME.contentWindow.__QIANLI__ && FRAME.contentWindow.__QIANLI__.game;
      if (g && typeof g.on === 'function') {
        g.on('panorama-start', () => { inPano = true; });
        g.on('panorama-end', () => { inPano = false; fire(1400); });
      }
    } catch (e) { /* ignore */ }
    setTimeout(() => { if (!inPano) fire(0); }, 5000);
    setTimeout(() => fire(0), 90000);
  }

  function tick() {
    const c = liveCounts();
    if (c) paint(c);
  }

  let poll = null;
  function startPoll() {
    clearInterval(poll);
    poll = setInterval(tick, 450);
  }

  /* ---------------- 转场 ---------------- */
  function setVeil(ch) {
    $('#veil-seal').textContent = ch.num;
    $('#veil-kicker').textContent = ch.kicker;
    $('#veil-title').textContent = ch.title;
    $('#veil-note').textContent = ch.note;
  }

  async function showVeil(ch) {
    setVeil(ch);
    VEIL.hidden = false;
    void VEIL.offsetWidth;
    VEIL.classList.add('is-on');
    await sleep(620);
  }

  function hideVeil() {
    VEIL.classList.remove('is-on');
    setTimeout(() => { VEIL.hidden = true; }, 620);
  }

  function loadFrame(src) {
    return new Promise((resolve) => {
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        FRAME.removeEventListener('load', finish);
        resolve();
      };
      FRAME.addEventListener('load', finish);
      FRAME.src = src;
      setTimeout(finish, 16000);
    });
  }

  async function go(n, opts = {}) {
    if (S.lock || !CH[n]) return;
    if (S.chapter === n && !opts.force) { closePanel(); return; }
    S.lock = true;
    closePanel();
    GATE.hidden = true;
    FINALE.hidden = true;
    clearInterval(injectTimer);
    Ambient.duck();

    const ch = CH[n];
    if (!opts.instant) await showVeil(ch);

    document.body.dataset.view = 'chapter';
    STAGE.setAttribute('aria-hidden', 'false');
    CLASP.hidden = false;

    await loadFrame(ch.src);
    S.chapter = n;

    if (opts.instant) {
      VEIL.hidden = true;
      VEIL.classList.remove('is-on');
    } else {
      await sleep(1250);
      hideVeil();
    }

    S.lock = false;
    startPoll();
    tick();
    inject(n);
    const carry = n === 2 && S.c1 > 0 ? ` · 携 ${S.c1} 印入云` : n === 1 && S.c2 > 0 ? ` · 云中已得 ${S.c2} 印` : '';
    toast(`第${ch.num}卷 · ${ch.title}${carry}`);
  }

  function toCover() {
    clearInterval(poll);
    clearInterval(injectTimer);
    S.chapter = 0;
    document.body.dataset.view = 'cover';
    STAGE.setAttribute('aria-hidden', 'true');
    CLASP.hidden = true;
    closePanel();
    GATE.hidden = true;
    FINALE.hidden = true;
    HELP.hidden = true;
    FRAME.src = 'about:blank';
    refreshCover();
    Ambient.raise();
  }

  /* ---------------- 卷内注入 ---------------- */
  let injectTimer = null;
  function inject(n) {
    clearInterval(injectTimer);
    if (!n) return;
    // 卷一会重建结局面板，卷二的云房间在本机没有后端；都持续守着
    injectTimer = setInterval(() => {
      try {
        const doc = FRAME.contentDocument;
        if (!doc) return;

        if (n === 1) {
          const host = doc.querySelector('#tour-end .tour-end__panel > div');
          if (host && !host.querySelector('[data-hejuan-go]')) {
            const b = doc.createElement('button');
            b.type = 'button';
            b.dataset.hejuanGo = '1';
            b.className = 'ink-button ink-button--primary';
            b.innerHTML = '<span class="ink-button__main">入云</span><span class="ink-button__sub">第二卷 · 云游青绿</span>';
            b.addEventListener('click', (ev) => { ev.stopPropagation(); go(2); });
            host.appendChild(b);
          }
        } else if (n === 2) {
          if (!doc.querySelector('style[data-hejuan]')) {
            const st = doc.createElement('style');
            st.dataset.hejuan = '1';
            st.textContent = '.cloud-box,#cloud-note{display:none!important}';
            (doc.head || doc.documentElement).appendChild(st);
          }
        }
      } catch (e) { /* 跨域或未就绪 */ }
    }, 700);
  }

  /* ---------------- 入云之门 ---------------- */
  function unlockPointer() {
    try {
      const doc = FRAME.contentDocument;
      if (doc && doc.pointerLockElement) doc.exitPointerLock();
    } catch (e) { /* ignore */ }
  }

  function showGate() {
    if (S.gateDismissed) return;
    GATE.hidden = false;
    unlockPointer();
  }

  /* ---------------- 终章 ---------------- */
  function showFinale() {
    unlockPointer();
    FINALE.hidden = false;
  }

  /* ---------------- 提示 ---------------- */
  let toastTimer = null;
  function toast(text, ms = 2600) {
    TOAST.textContent = text;
    TOAST.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => TOAST.classList.remove('is-on'), ms);
  }

  /* ---------------- 面板 / 说明 ---------------- */
  function openPanel() {
    PANEL.hidden = false;
    void PANEL.offsetWidth;
    PANEL.classList.add('is-open');
    tick();
  }
  function closePanel() {
    PANEL.classList.remove('is-open');
    setTimeout(() => { PANEL.hidden = true; }, 460);
  }

  function refreshCover() {
    const saved = readSaved();
    paint({ c1: Math.max(S.c1, saved.a), c2: Math.max(S.c2, saved.b) });
    const has = saved.a + saved.b > 0;
    const btn = $('#btn-resume');
    btn.hidden = !has;
    if (has) {
      btn.textContent = saved.a >= 8 ? '续 卷 · 第二卷' : '续 卷';
    }
  }

  /* ---------------- 初始化 ---------------- */
  function init() {
    if (location.protocol === 'file:') {
      const box = document.querySelector('.cover-inner');
      if (box) {
        box.innerHTML =
          '<div class="cover-head"><span class="cover-eyebrow">本 机 长 卷</span><div class="cover-seal">卷</div></div>' +
          '<div class="cover-title"><h1><span>千</span><span>里</span><span>江</span><span>山</span></h1>' +
          '<p class="cover-sub">请 从 启 动 器 打 开</p></div>' +
          '<p class="cover-foot" style="max-width:560px;line-height:2.1;font-size:12px;letter-spacing:.06em">' +
          '直接双击 index.html 时，浏览器不允许两卷在同一页面里加载。<br/>' +
          '请双击同目录的「启动合卷.bat」，它会开一个本机小服务并自动打开浏览器。</p>';
      }
      return;
    }

    buildLedger();
    const saved = readSaved();
    S.c1 = saved.a;
    S.c2 = saved.b;
    paint({ c1: S.c1, c2: S.c2 });
    refreshCover();

    // 封面环境声：第一次交互解锁；右上「声/静」可关
    const ambBtn = $('#btn-ambient');
    const paintAmb = () => {
      const m = Ambient.isMuted();
      ambBtn.textContent = m ? '静' : '声';
      ambBtn.classList.toggle('is-off', m);
      ambBtn.setAttribute('aria-pressed', String(!m));
    };
    paintAmb();
    ambBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      Ambient.setMuted(!Ambient.isMuted());
      paintAmb();
    });
    const unlockAmb = () => { Ambient.start(); };
    document.addEventListener('pointerdown', unlockAmb, { capture: true });
    document.addEventListener('keydown', unlockAmb, { capture: true });
    window.__HEJUAN_AMBIENT__ = Ambient;

    $('#btn-enter').addEventListener('click', () => go(1));
    $('#btn-enter-2').addEventListener('click', () => go(2));
    document.querySelectorAll('.chapter-card[data-enter]').forEach((card) => {
      card.addEventListener('click', () => go(Number(card.dataset.enter)));
    });
    $('#btn-resume').addEventListener('click', () => go(S.c1 >= 8 ? 2 : 1));
    $('#btn-help').addEventListener('click', () => { HELP.hidden = false; });

    CLASP.addEventListener('click', () => (PANEL.hidden ? openPanel() : closePanel()));
    $('#btn-panel-close').addEventListener('click', closePanel);
    $('#btn-panel-help').addEventListener('click', () => { closePanel(); HELP.hidden = false; });
    $('#btn-cover').addEventListener('click', toCover);
    $('#btn-help-close').addEventListener('click', () => { HELP.hidden = true; });
    HELP.addEventListener('click', (e) => { if (e.target === HELP) HELP.hidden = true; });

    document.querySelectorAll('.panel-row').forEach((row) => {
      row.addEventListener('click', () => go(Number(row.dataset.go)));
    });

    $('#btn-gate-go').addEventListener('click', () => { GATE.hidden = true; go(2); });
    $('#btn-gate-later').addEventListener('click', () => { S.gateDismissed = true; GATE.hidden = true; });

    $('#btn-finale-again').addEventListener('click', () => { FINALE.hidden = true; go(1, { force: true }); });
    $('#btn-finale-close').addEventListener('click', () => { FINALE.hidden = true; });
    $('#btn-finale-cover').addEventListener('click', () => { FINALE.hidden = true; toCover(); });
    $('#btn-show-finale').addEventListener('click', () => { closePanel(); showFinale(); });

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (!HELP.hidden) { HELP.hidden = true; e.preventDefault(); return; }
      if (!PANEL.hidden) { closePanel(); e.preventDefault(); return; }
    });

    // 关闭页面前把进度留在页面里（游戏自身也会存档）
    window.addEventListener('beforeunload', () => { /* no-op */ });
  }

  init();
})();
