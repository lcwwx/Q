(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,te=33777,M=33778,N=33779,P=35840,ne=35841,re=35842,ie=35843,ae=36196,oe=37492,se=37496,ce=37488,F=37489,I=37490,le=37491,ue=37808,de=37809,fe=37810,pe=37811,me=37812,he=37813,ge=37814,_e=37815,ve=37816,ye=37817,be=37818,xe=37819,Se=37820,Ce=37821,we=36492,Te=36494,Ee=36495,De=36283,Oe=36284,ke=36285,Ae=36286,je=2300,L=2301,Me=2302,Ne=2303,Pe=2400,R=2401,Fe=2402,z=3200,Ie=`srgb`,Le=`srgb-linear`,Re=`linear`,ze=`srgb`,Be=7680,Ve=35044,He=35048,Ue=2e3;function We(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ge(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ke(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qe(){let e=Ke(`canvas`);return e.style.display=`block`,e}var Je={};function Ye(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Xe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ze(...e){let t=e.join(` `);t in Je||(Je[t]=!0,B(...e))}function Qe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var $e={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},et=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},tt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),nt=Math.PI/180,rt=180/Math.PI;function it(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(tt[e&255]+tt[e>>8&255]+tt[e>>16&255]+tt[e>>24&255]+`-`+tt[t&255]+tt[t>>8&255]+`-`+tt[t>>16&15|64]+tt[t>>24&255]+`-`+tt[n&63|128]+tt[n>>8&255]+`-`+tt[n>>16&255]+tt[n>>24&255]+tt[r&255]+tt[r>>8&255]+tt[r>>16&255]+tt[r>>24&255]).toLowerCase()}function at(e,t,n){return Math.max(t,Math.min(n,e))}function ot(e,t){return(e%t+t)%t}function st(e,t,n){return(1-n)*e+n*t}function ct(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function lt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var H=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ft.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ft.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dt.copy(this).projectOnVector(e),this.sub(dt)}reflect(e){return this.sub(dt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dt=new U,ft=new ut,W=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ze(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(pt.makeScale(e,t)),this}rotate(e){return Ze(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(pt.makeRotation(-e)),this}translate(e,t){return Ze(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(pt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pt=new W,mt=new W().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ht=new W().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gt(){let e={enabled:!0,workingColorSpace:Le,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=vt(e.r),e.g=vt(e.g),e.b=vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=yt(e.r),e.g=yt(e.g),e.b=yt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Re:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Le]:{primaries:t,whitePoint:r,transfer:Re,toXYZ:mt,fromXYZ:ht,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:mt,fromXYZ:ht,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),e}var _t=gt();function vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function yt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var bt,xt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bt===void 0&&(bt=Ke(`canvas`)),bt.width=e.width,bt.height=e.height;let t=bt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=bt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ke(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=vt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(vt(t[e]/255)*255):t[e]=vt(t[e]);return{data:t,width:e.width,height:e.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},St=0,Ct=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:St++}),this.uuid=it(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(wt(r[t].image)):e.push(wt(r[t]))}else e=wt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function wt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?xt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var Tt=0,Et=new U,Dt=class r extends et{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tt++}),this.uuid=it(),this.name=``,this.source=new Ct(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new W,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Et).x}get height(){return this.source.getSize(Et).y}get depth(){return this.source.getSize(Et).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null,Dt.DEFAULT_MAPPING=300,Dt.DEFAULT_ANISOTROPY=1;var Ot=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kt=class extends et{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];let r=new Dt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ct(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},At=class extends kt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},jt=class extends Dt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Mt=class extends Dt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Nt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Pt.setFromMatrixColumn(e,0).length(),i=1/Pt.setFromMatrixColumn(e,1).length(),a=1/Pt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(It,e,Lt)}lookAt(e,t,n){let r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Rt.crossVectors(n,Bt),Rt.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Rt.crossVectors(n,Bt)),Rt.normalize(),zt.crossVectors(Bt,Rt),r[0]=Rt.x,r[4]=zt.x,r[8]=Bt.x,r[1]=Rt.y,r[5]=zt.y,r[9]=Bt.y,r[2]=Rt.z,r[6]=zt.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],te=r[3],M=r[7],N=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*N,i[12]=a*w+o*O+s*j+c*P,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*N,i[13]=l*w+u*O+d*j+f*P,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*N,i[14]=p*w+m*O+h*j+g*P,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*N,i[15]=_*w+v*O+y*j+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Pt.set(r[0],r[1],r[2]).length(),o=Pt.set(r[4],r[5],r[6]).length(),s=Pt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ft.copy(this);let c=1/a,l=1/o,u=1/s;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=l,Ft.elements[5]*=l,Ft.elements[6]*=l,Ft.elements[8]*=u,Ft.elements[9]*=u,Ft.elements[10]*=u,t.setFromRotationMatrix(Ft),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Pt=new U,Ft=new Nt,It=new U(0,0,0),Lt=new U(1,1,1),Rt=new U,zt=new U,Bt=new U,Vt=new Nt,Ht=new ut,Ut=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-at(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(at(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ht.setFromEuler(this),this.setFromQuaternion(Ht,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ut.DEFAULT_ORDER=`XYZ`;var Wt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Gt=0,Kt=new U,qt=new ut,Jt=new Nt,Yt=new U,Xt=new U,Zt=new U,Qt=new ut,$t=new U(1,0,0),en=new U(0,1,0),tn=new U(0,0,1),nn={type:`added`},rn={type:`removed`},an={type:`childadded`,child:null},on={type:`childremoved`,child:null},sn=class e extends et{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=it(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new Ut,r=new ut,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nt},normalMatrix:{value:new W}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qt.setFromAxisAngle(e,t),this.quaternion.multiply(qt),this}rotateOnWorldAxis(e,t){return qt.setFromAxisAngle(e,t),this.quaternion.premultiply(qt),this}rotateX(e){return this.rotateOnAxis($t,e)}rotateY(e){return this.rotateOnAxis(en,e)}rotateZ(e){return this.rotateOnAxis(tn,e)}translateOnAxis(e,t){return Kt.copy(e).applyQuaternion(this.quaternion),this.position.add(Kt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($t,e)}translateY(e){return this.translateOnAxis(en,e)}translateZ(e){return this.translateOnAxis(tn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yt.copy(e):Yt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Xt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(Xt,Yt,this.up):Jt.lookAt(Yt,Xt,this.up),this.quaternion.setFromRotationMatrix(Jt),r&&(Jt.extractRotation(r.matrixWorld),qt.setFromRotationMatrix(Jt),this.quaternion.premultiply(qt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nn),an.child=e,this.dispatchEvent(an),an.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rn),on.child=e,this.dispatchEvent(on),on.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nn),an.child=e,this.dispatchEvent(an),an.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xt,e,Zt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xt,Qt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};sn.DEFAULT_UP=new U(0,1,0),sn.DEFAULT_MATRIX_AUTO_UPDATE=!0,sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=class extends sn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ln={type:`move`},un=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ln)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},pn={h:0,s:0,l:0};function mn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ie){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=ot(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=mn(i,r,e+1/3),this.g=mn(i,r,e),this.b=mn(i,r,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Ie){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ie){let n=dn[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vt(e.r),this.g=vt(e.g),this.b=vt(e.b),this}copyLinearToSRGB(e){return this.r=yt(e.r),this.g=yt(e.g),this.b=yt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ie){return _t.workingToColorSpace(hn.copy(this),e),Math.round(at(hn.r*255,0,255))*65536+Math.round(at(hn.g*255,0,255))*256+Math.round(at(hn.b*255,0,255))}getHexString(e=Ie){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(hn.copy(this),t);let n=hn.r,r=hn.g,i=hn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Ie){_t.workingToColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,r=hn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+t,fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(pn);let n=st(fn.h,pn.h,t),r=st(fn.s,pn.s,t),i=st(fn.l,pn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new G;G.NAMES=dn;var gn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new G(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},_n=class extends sn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ut,this.environmentIntensity=1,this.environmentRotation=new Ut,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},vn=new U,yn=new U,bn=new U,xn=new U,Sn=new U,Cn=new U,wn=new U,Tn=new U,En=new U,Dn=new U,On=new Ot,kn=new Ot,An=new Ot,jn=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vn.subVectors(e,t),r.cross(vn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){vn.subVectors(r,t),yn.subVectors(n,t),bn.subVectors(e,t);let a=vn.dot(vn),o=vn.dot(yn),s=vn.dot(bn),c=yn.dot(yn),l=yn.dot(bn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xn)!==null&&xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,xn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,xn.x),s.addScaledVector(a,xn.y),s.addScaledVector(o,xn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return On.setScalar(0),kn.setScalar(0),An.setScalar(0),On.fromBufferAttribute(e,t),kn.fromBufferAttribute(e,n),An.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(On,i.x),a.addScaledVector(kn,i.y),a.addScaledVector(An,i.z),a}static isFrontFacing(e,t,n,r){return vn.subVectors(n,t),yn.subVectors(e,t),vn.cross(yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),vn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Sn.subVectors(r,n),Cn.subVectors(i,n),Tn.subVectors(e,n);let s=Sn.dot(Tn),c=Cn.dot(Tn);if(s<=0&&c<=0)return t.copy(n);En.subVectors(e,r);let l=Sn.dot(En),u=Cn.dot(En);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Sn,a);Dn.subVectors(e,i);let f=Sn.dot(Dn),p=Cn.dot(Dn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Cn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return wn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(wn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Sn,a).addScaledVector(Cn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Pn):Pn.fromBufferAttribute(r,t),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Fn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Fn.copy(e.boundingBox)),Fn.applyMatrix4(e.matrixWorld),this.union(Fn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hn),Un.subVectors(this.max,Hn),In.subVectors(e.a,Hn),Ln.subVectors(e.b,Hn),Rn.subVectors(e.c,Hn),zn.subVectors(Ln,In),Bn.subVectors(Rn,Ln),Vn.subVectors(In,Rn);let t=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-Vn.z,Vn.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,Vn.z,0,-Vn.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-Vn.y,Vn.x,0];return!Kn(t,In,Ln,Rn,Un)||(t=[1,0,0,0,1,0,0,0,1],!Kn(t,In,Ln,Rn,Un))?!1:(Wn.crossVectors(zn,Bn),t=[Wn.x,Wn.y,Wn.z],Kn(t,In,Ln,Rn,Un))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Nn=[new U,new U,new U,new U,new U,new U,new U,new U],Pn=new U,Fn=new Mn,In=new U,Ln=new U,Rn=new U,zn=new U,Bn=new U,Vn=new U,Hn=new U,Un=new U,Wn=new U,Gn=new U;function Kn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Gn.fromArray(e,a);let o=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),s=t.dot(Gn),c=n.dot(Gn),l=r.dot(Gn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var qn=new U,Jn=new H,Yn=0,Xn=class extends et{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ve,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix3(e),this.setXY(t,Jn.x,Jn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyMatrix3(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyMatrix4(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyNormalMatrix(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.transformDirection(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ct(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ct(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ct(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ct(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ct(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),r=lt(r,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Zn=class extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Qn=class extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},K=class extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}},$n=new Mn,er=new U,tr=new U,nr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?$n.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);let t=er.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(er,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(tr)),this.expandByPoint(er.copy(e.center).sub(tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},rr=0,ir=new Nt,ar=new sn,or=new U,sr=new Mn,cr=new Mn,lr=new U,ur=class e extends et{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rr++}),this.uuid=it(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(We(e)?Qn:Zn)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new W().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ir.makeRotationFromQuaternion(e),this.applyMatrix4(ir),this}rotateX(e){return ir.makeRotationX(e),this.applyMatrix4(ir),this}rotateY(e){return ir.makeRotationY(e),this.applyMatrix4(ir),this}rotateZ(e){return ir.makeRotationZ(e),this.applyMatrix4(ir),this}translate(e,t,n){return ir.makeTranslation(e,t,n),this.applyMatrix4(ir),this}scale(e,t,n){return ir.makeScale(e,t,n),this.applyMatrix4(ir),this}lookAt(e){return ar.lookAt(e),ar.updateMatrix(),this.applyMatrix4(ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new K(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];sr.setFromBufferAttribute(n),this.morphTargetsRelative?(lr.addVectors(this.boundingBox.min,sr.min),this.boundingBox.expandByPoint(lr),lr.addVectors(this.boundingBox.max,sr.max),this.boundingBox.expandByPoint(lr)):(this.boundingBox.expandByPoint(sr.min),this.boundingBox.expandByPoint(sr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);else if(e){let n=this.boundingSphere.center;if(sr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];cr.setFromBufferAttribute(n),this.morphTargetsRelative?(lr.addVectors(sr.min,cr.min),sr.expandByPoint(lr),lr.addVectors(sr.max,cr.max),sr.expandByPoint(lr)):(sr.expandByPoint(cr.min),sr.expandByPoint(cr.max))}sr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)lr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(lr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)lr.fromBufferAttribute(a,t),o&&(or.fromBufferAttribute(e,t),lr.add(or)),r=Math.max(r,n.distanceToSquared(lr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Xn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let c=new U,l=new U,u=new U,d=new H,f=new H,p=new H,m=new U,h=new U;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new U,y=new U,b=new U,x=new U;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lr.fromBufferAttribute(e,t),lr.normalize(),e.setXYZ(t,lr.x,lr.y,lr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Xn(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},dr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ve,this.updateRanges=[],this.version=0,this.uuid=it()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=it()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=it()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},fr=new U,pr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix4(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyNormalMatrix(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.transformDirection(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ct(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ct(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ct(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ct(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ct(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),r=lt(r,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Ye(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Xn(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ye(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mr=new U,hr=new U,gr=new W,_r=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=mr.subVectors(n,t).cross(hr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(mr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gr.getNormalMatrix(e),r=this.coplanarPoint(mr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},vr=0,yr=class extends et{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vr++}),this.uuid=it(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Be,this.stencilZFail=Be,this.stencilZPass=Be,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new G().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new _r().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new H().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},br=class extends yr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xr,Sr=new U,Cr=new U,wr=new U,Tr=new H,Er=new H,Dr=new Nt,Or=new U,kr=new U,Ar=new U,jr=new H,Mr=new H,Nr=new H,Pr=class extends sn{constructor(e=new br){if(super(),this.isSprite=!0,this.type=`Sprite`,xr===void 0){xr=new ur;let e=new dr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute(`position`,new pr(e,3,0,!1)),xr.setAttribute(`uv`,new pr(e,2,3,!1))}this.geometry=xr,this.material=e,this.center=new H(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&V(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Cr.setFromMatrixScale(this.matrixWorld),Dr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-wr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Fr(Or.set(-.5,-.5,0),wr,a,Cr,r,i),Fr(kr.set(.5,-.5,0),wr,a,Cr,r,i),Fr(Ar.set(.5,.5,0),wr,a,Cr,r,i),jr.set(0,0),Mr.set(1,0),Nr.set(1,1);let o=e.ray.intersectTriangle(Or,kr,Ar,!1,Sr);if(o===null&&(Fr(kr.set(-.5,.5,0),wr,a,Cr,r,i),Mr.set(0,1),o=e.ray.intersectTriangle(Or,Ar,kr,!1,Sr),o===null))return;let s=e.ray.origin.distanceTo(Sr);s<e.near||s>e.far||t.push({distance:s,point:Sr.clone(),uv:jn.getInterpolation(Sr,Or,kr,Ar,jr,Mr,Nr,new H),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Fr(e,t,n,r,i,a){Tr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Er.copy(Tr):(Er.x=a*Tr.x-i*Tr.y,Er.y=i*Tr.x+a*Tr.y),e.copy(t),e.x+=Er.x,e.y+=Er.y,e.applyMatrix4(Dr)}var Ir=new U,Lr=new U,Rr=new U,zr=new U,Br=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ir.copy(this.origin).addScaledVector(this.direction,t),Ir.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Lr.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(Lr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Rr),o=zr.dot(this.direction),s=-zr.dot(Rr),c=zr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Lr).addScaledVector(Rr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ir.subVectors(e.center,this.origin);let n=Ir.dot(this.direction),r=Ir.dot(Ir)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ir)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let M=S/w,N=C/w,P=1/w,ne=T-M*D,re=E-N*D,ie=O-M*A,ae=k-N*A,oe=ee-M*te,se=j-N*te,ce=oe*ae-se*ie,F=ne*se-re*oe,I=ie*re-ae*ne;if(r){if(ce<0||F<0||I<0)return null}else if((ce<0||F<0||I<0)&&(ce>0||F>0||I>0))return null;let le=ce+F+I;if(le===0)return null;let ue=P*(ce*D+F*A+I*te);return(le>0?ue<0:ue>0)?null:this.at(ue/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Vr=class extends yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ut,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hr=new Nt,Ur=new Br,Wr=new nr,Gr=new U,Kr=new U,qr=new U,Jr=new U,Yr=new U,Xr=new U,Zr=new U,Qr=new U,q=class extends sn{constructor(e=new ur,t=new Vr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Xr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Yr.fromBufferAttribute(s,e),a?Xr.addScaledVector(Yr,r):Xr.addScaledVector(Yr.sub(t),r))}t.add(Xr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Ur.copy(e.ray).recast(e.near),!(Wr.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Wr,Gr)===null||Ur.origin.distanceToSquared(Gr)>(e.far-e.near)**2))&&(Hr.copy(i).invert(),Ur.copy(e.ray).applyMatrix4(Hr),(n.boundingBox===null||Ur.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ur)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ei(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ei(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ei(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ei(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function $r(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Qr.copy(s),Qr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Qr);return l<n.near||l>n.far?null:{distance:l,point:Qr.clone(),object:e}}function ei(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Kr),e.getVertexPosition(c,qr),e.getVertexPosition(l,Jr);let u=$r(e,t,n,r,Kr,qr,Jr,Zr);if(u){let e=new U;jn.getBarycoord(Zr,Kr,qr,Jr,e),i&&(u.uv=jn.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=jn.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=jn.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};jn.getNormal(Kr,qr,Jr,t.normal),u.face=t,u.barycoord=e}return u}var ti=class extends Dt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ni=class extends Xn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ri=new Nt,ii=new Nt,ai=[],oi=new Mn,si=new Nt,ci=new q,li=new nr,ui=class extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,si)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ri),oi.copy(e.boundingBox).applyMatrix4(ri),this.boundingBox.union(oi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ri),li.copy(e.boundingSphere).applyMatrix4(ri),this.boundingSphere.union(li)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ci.geometry=this.geometry,ci.material=this.material,ci.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),li.copy(this.boundingSphere),li.applyMatrix4(n),e.ray.intersectsSphere(li)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ri),ii.multiplyMatrices(n,ri),ci.matrixWorld=ii,ci.raycast(e,ai);for(let e=0,n=ai.length;e<n;e++){let n=ai[e];n.instanceId=i,n.object=this,t.push(n)}ai.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ti(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},di=new nr,fi=new H(.5,.5),pi=new U,mi=class{constructor(e=new _r,t=new _r,n=new _r,r=new _r,i=new _r,a=new _r){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ue,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){return di.center.set(0,0,0),di.radius=.7071067811865476+fi.distanceTo(e.center),di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(pi.x=r.normal.x>0?e.max.x:e.min.x,pi.y=r.normal.y>0?e.max.y:e.min.y,pi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hi=class extends yr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new G(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gi=new U,_i=new U,vi=new Nt,yi=new Br,bi=new nr,xi=new U,Si=new U,Ci=class extends sn{constructor(e=new ur,t=new hi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)gi.fromBufferAttribute(t,e-1),_i.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=gi.distanceTo(_i);e.setAttribute(`lineDistance`,new K(n,1))}else B(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bi.copy(n.boundingSphere),bi.applyMatrix4(r),bi.radius+=i,e.ray.intersectsSphere(bi)===!1)return;vi.copy(r).invert(),yi.copy(e.ray).applyMatrix4(vi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=wi(this,e,yi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=wi(this,e,yi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=wi(this,e,yi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=wi(this,e,yi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function wi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(gi.fromBufferAttribute(s,i),_i.fromBufferAttribute(s,a),n.distanceSqToSegment(gi,_i,xi,Si)>r)return;xi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(xi);if(!(c<t.near||c>t.far))return{distance:c,point:Si.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ti=class extends yr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ei=new Nt,Di=new Br,Oi=new nr,ki=new U,Ai=class extends sn{constructor(e=new ur,t=new Ti){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere),Oi.applyMatrix4(r),Oi.radius+=i,e.ray.intersectsSphere(Oi)===!1)return;Ei.copy(r).invert(),Di.copy(e.ray).applyMatrix4(Ei);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ki.fromBufferAttribute(l,n),ji(ki,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ki.fromBufferAttribute(l,a),ji(ki,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ji(e,t,n,r,i,a,o){let s=Di.distanceSqToPoint(e);if(s<n){let n=new U;Di.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Mi=class extends Dt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ni=class extends Dt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pi=class extends Dt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ct(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fi=class extends Pi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ii=class extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Li=class e extends ur{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new K(c,3)),this.setAttribute(`normal`,new K(l,3)),this.setAttribute(`uv`,new K(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ri=class e extends ur{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new U,l=new H;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new K(a,3)),this.setAttribute(`normal`,new K(o,3)),this.setAttribute(`uv`,new K(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},zi=class e extends ur{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new K(u,3)),this.setAttribute(`normal`,new K(d,3)),this.setAttribute(`uv`,new K(f,2));function _(){let a=new U,_=new U,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new H,m=new U,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bi=class e extends zi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vi=class e extends ur{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new K(i,3)),this.setAttribute(`normal`,new K(i.slice(),3)),this.setAttribute(`uv`,new K(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new U,r=new U,i=new U;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new U;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new U;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new U,t=new U,n=new U,r=new U,o=new H,s=new H,c=new H;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Hi=class e extends Vi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ui=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){B(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new H:new U);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,r=[],i=[],a=[],o=new U,s=new Nt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new U)}i[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(at(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(at(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Wi=class extends Ui{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new H){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Gi=class extends Wi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ki(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var qi=new U,Ji=new U,Yi=new Ki,Xi=new Ki,Zi=new Ki,Qi=class extends Ui{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ji.subVectors(r[0],r[1]).add(r[0]),c=Ji);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(qi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=qi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Yi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Xi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Zi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Yi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Xi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Zi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Yi.calc(s),Xi.calc(s),Zi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $i(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ea(e,t){let n=1-e;return n*n*t}function ta(e,t){return 2*(1-e)*e*t}function na(e,t){return e*e*t}function ra(e,t,n,r){return ea(e,t)+ta(e,n)+na(e,r)}function ia(e,t){let n=1-e;return n*n*n*t}function aa(e,t){let n=1-e;return 3*n*n*e*t}function oa(e,t){return 3*(1-e)*e*e*t}function sa(e,t){return e*e*e*t}function ca(e,t,n,r,i){return ia(e,t)+aa(e,n)+oa(e,r)+sa(e,i)}var la=class extends Ui{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ca(e,r.x,i.x,a.x,o.x),ca(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ua=class extends Ui{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ca(e,r.x,i.x,a.x,o.x),ca(e,r.y,i.y,a.y,o.y),ca(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},da=class extends Ui{constructor(e=new H,t=new H){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends Ui{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends Ui{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ra(e,r.x,i.x,a.x),ra(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends Ui{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ra(e,r.x,i.x,a.x),ra(e,r.y,i.y,a.y),ra(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new H){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set($i(o,s.x,c.x,l.x,u.x),$i(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this}},ga=Object.freeze({__proto__:null,ArcCurve:Gi,CatmullRomCurve3:Qi,CubicBezierCurve:la,CubicBezierCurve3:ua,EllipseCurve:Wi,LineCurve:da,LineCurve3:fa,QuadraticBezierCurve:pa,QuadraticBezierCurve3:ma,SplineCurve:ha}),_a=class extends Ui{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ga[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ga[n.type]().fromJSON(n))}return this}},va=class extends _a{constructor(e){super(),this.type=`Path`,this.currentPoint=new H,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new da(this.currentPoint.clone(),new H(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new pa(this.currentPoint.clone(),new H(e,t),new H(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new la(this.currentPoint.clone(),new H(e,t),new H(n,r),new H(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new ha([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Wi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ya=class extends va{constructor(e){super(e),this.uuid=it(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new va().fromJSON(n))}return this}};function ba(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=xa(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Oa(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ca(a,o,n,s,c,l,0),o}function xa(e,t,n,r,i){let a;if(i===Qa(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Ya(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Ya(i/r|0,e[i],e[i+1],a);return a&&Va(a,a.next)&&(Xa(a),a=a.next),a}function Sa(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Va(n,n.next)||Ba(n.prev,n,n.next)===0)){if(Xa(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ca(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Na(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ta(e,r,i,a):wa(e))t.push(c.i,e.i,l.i),Xa(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Ea(Sa(e),t),Ca(e,t,n,r,i,a,2)):o===2&&Da(e,t,n,r,i,a):Ca(Sa(e),t,n,r,i,a,1);break}}}function wa(e){let t=e.prev,n=e,r=e.next;if(Ba(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ra(i,s,a,c,o,l,m.x,m.y)&&Ba(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ta(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ba(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Fa(p,m,t,n,r),v=Fa(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ra(s,u,c,d,l,f,y.x,y.y)&&Ba(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ra(s,u,c,d,l,f,b.x,b.y)&&Ba(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ra(s,u,c,d,l,f,y.x,y.y)&&Ba(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ra(s,u,c,d,l,f,b.x,b.y)&&Ba(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ea(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Va(r,i)&&Ha(r,n,n.next,i)&&Ka(r,i)&&Ka(i,r)&&(t.push(r.i,n.i,i.i),Xa(n),Xa(n.next),n=e=i),n=n.next}while(n!==e);return Sa(n)}function Da(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&za(o,e)){let s=Ja(o,e);o=Sa(o,o.next),s=Sa(s,s.next),Ca(o,t,n,r,i,a,0),Ca(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Oa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=xa(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ia(o))}i.sort(ka);for(let e=0;e<i.length;e++)n=Aa(i[e],n);return n}function ka(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Aa(e,t){let n=ja(e,t);if(!n)return t;let r=Ja(n,e);return Sa(r,r.next),Sa(n,n.next)}function ja(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Va(e,n))return n;do{if(Va(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&La(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Ka(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Ma(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Ma(e,t){return Ba(e.prev,e,t.prev)<0&&Ba(t.next,e,e.next)<0}function Na(e,t,n,r){let i=e;do i.z===0&&(i.z=Fa(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Pa(i)}function Pa(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Fa(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ia(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function La(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ra(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&La(e,t,n,r,i,a,o,s)}function za(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ga(e,t)&&(Ka(e,t)&&Ka(t,e)&&qa(e,t)&&(Ba(e.prev,e,t.prev)||Ba(e,t.prev,t))||Va(e,t)&&Ba(e.prev,e,e.next)>0&&Ba(t.prev,t,t.next)>0)}function Ba(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Va(e,t){return e.x===t.x&&e.y===t.y}function Ha(e,t,n,r){let i=Wa(Ba(e,t,n)),a=Wa(Ba(e,t,r)),o=Wa(Ba(n,r,e)),s=Wa(Ba(n,r,t));return!!(i!==a&&o!==s||i===0&&Ua(e,n,t)||a===0&&Ua(e,r,t)||o===0&&Ua(n,e,r)||s===0&&Ua(n,t,r))}function Ua(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Wa(e){return e>0?1:e<0?-1:0}function Ga(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ha(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ka(e,t){return Ba(e.prev,e,e.next)<0?Ba(e,t,e.next)>=0&&Ba(e,e.prev,t)>=0:Ba(e,t,e.prev)<0||Ba(e,e.next,t)<0}function qa(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ja(e,t){let n=Za(e.i,e.x,e.y),r=Za(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ya(e,t,n,r){let i=Za(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Xa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Za(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qa(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var $a=class{static triangulate(e,t,n=2){return ba(e,t,n)}},eo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];to(e),no(n,e);let a=e.length;t.forEach(to);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,no(n,t[e]);let o=$a.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function to(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function no(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var ro=class e extends ur{constructor(e=new ya([new H(.5,.5),new H(-.5,.5),new H(-.5,-.5),new H(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new K(r,3)),this.setAttribute(`uv`,new K(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?io:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new U,b=new U,x=new U}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!eo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];eo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||V(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new H(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new H(r/a,i/a)}let ee=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),ee[e]=A(D[e],D[n],D[r]);let j=[],te,M=ee.concat();for(let e=0,t=E;e<t;e++){let t=w[e];te=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),te[e]=A(t[e],t[r],t[i]);j.push(te),M=M.concat(te)}let N;if(p===0)N=eo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],ee[t],a);oe(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];te=j[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],te[e],a);oe(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}N=eo.triangulateShape(e,t)}let P=N.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],M[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),oe(x.x,x.y,x.z)):oe(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],M[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),oe(x.x,x.y,x.z)):oe(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],ee[e],r);oe(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];te=j[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],te[e],r);_?oe(i.x,i.y+g[s-1].y,g[s-1].x+n):oe(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<P;e++){let n=N[e];se(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<P;e++){let n=N[e];se(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<P;e++){let t=N[e];se(t[2],t[1],t[0])}for(let e=0;e<P;e++){let t=N[e];se(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ce(t+r+n,t+i+n,t+i+a,t+r+a)}}}function oe(e,t,n){a.push(e),a.push(t),a.push(n)}function se(e,t,i){F(e),F(t),F(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);I(o[0]),I(o[1]),I(o[2])}function ce(e,t,i,a){F(e),F(t),F(a),F(t),F(i),F(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);I(s[0]),I(s[1]),I(s[3]),I(s[1]),I(s[2]),I(s[3])}function F(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function I(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ao(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ga[i.type]().fromJSON(i)),new e(r,t.options)}},io={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new H(a,o),new H(s,c),new H(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new H(o,1-c),new H(l,1-d),new H(f,1-m),new H(h,1-_)]:[new H(s,1-c),new H(u,1-d),new H(p,1-m),new H(g,1-_)]}};function ao(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var oo=class e extends Vi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},so=class e extends ur{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new K(p,3)),this.setAttribute(`normal`,new K(m,3)),this.setAttribute(`uv`,new K(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},co=class e extends ur{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new U,p=new H;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new K(s,3)),this.setAttribute(`normal`,new K(c,3)),this.setAttribute(`uv`,new K(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},lo=class e extends ur{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new U,d=new U,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new K(p,3)),this.setAttribute(`normal`,new K(m,3)),this.setAttribute(`uv`,new K(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},uo=class e extends ur{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new U,f=new U,p=new U;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new K(c,3)),this.setAttribute(`normal`,new K(l,3)),this.setAttribute(`uv`,new K(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},fo=class e extends ur{constructor(e=new ma(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,s=new U,c=new H,l=new U,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new K(u,3)),this.setAttribute(`normal`,new K(d,3)),this.setAttribute(`uv`,new K(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ga[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function po(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ho(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ho(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function mo(e){let t={};for(let n=0;n<e.length;n++){let r=po(e[n]);for(let e in r)t[e]=r[e]}return t}function ho(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function go(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function _o(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_t.workingColorSpace}var vo={clone:po,merge:mo},yo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xo=class extends yr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yo,this.fragmentShader=bo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=go(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new G().setHex(r.value);break;case`v2`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Ot().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Nt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},So=class extends xo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},J=class extends yr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new G(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ut,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Co=class extends yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=z,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wo=class extends yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function To(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Eo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Do=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Oo=class extends Do{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pe,endingEnd:Pe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case R:i=e,o=2*t-n;break;case Fe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case R:a=e,s=2*n-t;break;case Fe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ko=class extends Do{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ao=class extends Do{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},jo=class extends Do{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Po(n,t,g,y,r);i[p]=Mo(x,o,_,b,m)}return i}};function Mo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function No(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Po(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Mo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=No(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Fo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=To(t,this.TimeBufferType),this.values=To(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:To(e.times,Array),values:To(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Eo(e.settings)&&(n.settings={inTangents:To(e.settings.inTangents,Array),outTangents:To(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new jo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case je:t=this.InterpolantFactoryMethodDiscrete;break;case L:t=this.InterpolantFactoryMethodLinear;break;case Me:t=this.InterpolantFactoryMethodSmooth;break;case Ne:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return je;case this.InterpolantFactoryMethodLinear:return L;case this.InterpolantFactoryMethodSmooth:return Me;case this.InterpolantFactoryMethodBezier:return Ne}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Eo(this.settings)&&(Io(this.settings.inTangents,e),Io(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ge(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Me,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Eo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Io(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Fo.prototype.ValueTypeName=``,Fo.prototype.TimeBufferType=Float32Array,Fo.prototype.ValueBufferType=Float32Array,Fo.prototype.DefaultInterpolation=L;var Lo=class extends Fo{constructor(e,t,n){super(e,t,n)}};Lo.prototype.ValueTypeName=`bool`,Lo.prototype.ValueBufferType=Array,Lo.prototype.DefaultInterpolation=je,Lo.prototype.InterpolantFactoryMethodLinear=void 0,Lo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ro=class extends Fo{constructor(e,t,n,r){super(e,t,n,r)}};Ro.prototype.ValueTypeName=`color`;var zo=class extends Fo{constructor(e,t,n,r){super(e,t,n,r)}};zo.prototype.ValueTypeName=`number`;var Bo=class extends Do{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ut.slerpFlat(i,0,a,c-o,a,c,s);return i}},Vo=class extends Fo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Bo(this.times,this.values,this.getValueSize(),e)}};Vo.prototype.ValueTypeName=`quaternion`,Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends Fo{constructor(e,t,n){super(e,t,n)}};Ho.prototype.ValueTypeName=`string`,Ho.prototype.ValueBufferType=Array,Ho.prototype.DefaultInterpolation=je,Ho.prototype.InterpolantFactoryMethodLinear=void 0,Ho.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends Fo{constructor(e,t,n,r){super(e,t,n,r)}};Uo.prototype.ValueTypeName=`vector`;var Wo=class extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new G(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Go=class extends Wo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ko=new Nt,qo=new U,Jo=new U,Yo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mi,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qo.setFromMatrixPosition(e.matrixWorld),t.position.copy(qo),Jo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ko,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xo=new U,Zo=new ut,Qo=new U,$o=class extends sn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Ue,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xo,Zo,Qo),Qo.x===1&&Qo.y===1&&Qo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,Zo,Qo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xo,Zo,Qo),Qo.x===1&&Qo.y===1&&Qo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xo,Zo,Qo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new U,ts=new H,ns=new H,rs=class extends $o{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rt*2*Math.atan(Math.tan(nt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,ts,ns),t.subVectors(ns,ts)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},is=class extends Yo{constructor(){super(new rs(90,1,.5,500)),this.isPointLightShadow=!0}},as=class extends Wo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new is}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},os=class extends $o{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ss=class extends Yo{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends Wo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new ss}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ls=class extends Wo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},us=-90,ds=1,fs=class extends sn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new rs(us,ds,e,t);r.layers=this.layers,this.add(r);let i=new rs(us,ds,e,t);i.layers=this.layers,this.add(i);let a=new rs(us,ds,e,t);a.layers=this.layers,this.add(a);let o=new rs(us,ds,e,t);o.layers=this.layers,this.add(o);let s=new rs(us,ds,e,t);s.layers=this.layers,this.add(s);let c=new rs(us,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ps=class extends rs{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ms=`\\[\\]\\.:\\/`,hs=RegExp(`[\\[\\]\\.:\\/]`,`g`),gs=`[^\\[\\]\\.:\\/]`,_s=`[^`+ms.replace(`\\.`,``)+`]`,vs=`((?:WC+[\\/:])*)`.replace(`WC`,gs),ys=`(WCOD+)?`.replace(`WCOD`,_s),bs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,gs),xs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,gs),Ss=RegExp(`^`+vs+ys+bs+xs+`$`),Cs=[`material`,`materials`,`bones`,`map`],ws=class{constructor(e,t,n){let r=n||Ts.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ts=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(hs,``)}static parseTrackName(e){let t=Ss.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Cs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ts.Composite=ws,Ts.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ts.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ts.prototype.GetterByBindingType=[Ts.prototype._getValue_direct,Ts.prototype._getValue_array,Ts.prototype._getValue_arrayElement,Ts.prototype._getValue_toArray],Ts.prototype.SetterByBindingTypeAndVersioning=[[Ts.prototype._setValue_direct,Ts.prototype._setValue_direct_setNeedsUpdate,Ts.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ts.prototype._setValue_array,Ts.prototype._setValue_array_setNeedsUpdate,Ts.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ts.prototype._setValue_arrayElement,Ts.prototype._setValue_arrayElement_setNeedsUpdate,Ts.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ts.prototype._setValue_fromArray,Ts.prototype._setValue_fromArray_setNeedsUpdate,Ts.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Es(e,t,n,r){let i=Ds(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ne:case ie:return Math.max(e,16)*Math.max(t,8)/4;case P:case re:return Math.max(e,8)*Math.max(t,8)/2;case ae:case oe:case ce:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case se:case I:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case we:case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*16;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ds(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Os(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ks(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new W}},envmap:{envMap:{value:null},envMapRotation:{value:new W},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new W}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new W}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new W},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new W},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new W},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new W}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new W}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new W}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0},uvTransform:{value:new W}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}}},As={basic:{uniforms:mo([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:mo([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new G(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:mo([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:mo([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:mo([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new G(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:mo([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:mo([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:mo([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:mo([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:mo([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:mo([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new W},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new W}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:mo([X.common,X.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:mo([X.lights,X.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};As.physical={uniforms:mo([As.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new W},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new W},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new W},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new W},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new W},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new W},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new W},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new W},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new W},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new W},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new W},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new W}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var js={r:0,b:0,g:0},Ms=new Nt,Ns=new W;Ns.set(-1,0,0,0,1,0,0,0,1);function Ps(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new q(new Li(1,1,1),new xo({name:`BackgroundCubeMaterial`,uniforms:po(As.backgroundCube.uniforms),vertexShader:As.backgroundCube.vertexShader,fragmentShader:As.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ms.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ns),l.material.toneMapped=_t.getTransfer(i.colorSpace)!==ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new q(new so(2,2),new xo({name:`BackgroundMaterial`,uniforms:po(As.background.uniforms),vertexShader:As.background.vertexShader,fragmentShader:As.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=_t.getTransfer(i.colorSpace)!==ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(js,_o(e)),n.buffers.color.setClear(js.r,js.g,js.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Fs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Is(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ls(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Rs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new _r,s=new W,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var zs=4,Bs=6,Vs=20,Hs=256,Us=new os,Ws=new G,Gs=null,Ks=0,qs=0,Js=!1,Ys=new U,Xs=new U,Zs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ys}=i;Gs=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),qs=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gs,Ks,qs),this._renderer.xr.enabled=Js,e.scissorTest=!1,ec(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gs=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),qs=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Le,depthBuffer:!1},r=$s(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$s(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qs(r)),this._blurMaterial=nc(r,e,t),this._ggxMaterial=tc(r,e,t)}return r}_compileMaterial(e){let t=new q(new ur,e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,n,r,i){let a=new rs(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Ws),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new q(new Li,new Vr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Ws),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;ec(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;ec(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Us)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-zs?n-d+zs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,ec(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Us),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,ec(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Us)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];ec(t,3*l*(r>this._lodMax-zs?r-this._lodMax+zs:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Us)}};function Qs(e){let t=[],n=[],r=e,i=e-zs+1+Bs;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Xs.set(1,r,n):e===1?Xs.set(-n,1,-r):e===2?Xs.set(-n,r,1):e===3?Xs.set(-1,r,-n):e===4?Xs.set(-n,-1,r):Xs.set(n,r,-1),Xs.toArray(l,(e*6+t)*3)}}let u=new ur;u.setAttribute(`position`,new Xn(c,3)),u.setAttribute(`outputDirection`,new Xn(l,3)),n.push(new q(u,null)),r>zs&&r--}return{lodMeshes:n,sizeLods:t}}function $s(e,t,n){let r=new At(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function ec(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function tc(e,t,n){return new xo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function nc(e,t,n){return new xo({name:`SphericalGaussianBlur`,defines:{SAMPLES:Vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rc(){return new xo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ic(){return new xo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ac(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var oc=class extends At{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Mi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Li(5,5,5),i=new xo({name:`CubemapFromEquirect`,uniforms:po(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new q(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new fs(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function sc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new oc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Zs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Zs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function cc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ze(`WebGLRenderer: `+e+` extension not supported.`),t}}}function lc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Qn:Zn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function uc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function dc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function fc(e,t,n){let r=new WeakMap,i=new Ot;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new jt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new H(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function pc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var mc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function hc(e,t,n,r,i,a){let o=new At(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new ur;l.setAttribute(`position`,new K([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new K([0,2,0,0,2,0],2));let u=new So({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new q(l,u),f=new os(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new At(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new At(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},_t.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=mc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var gc=new Dt,_c=new Pi(1,1),vc=new jt,yc=new Mt,bc=new Mi,xc=[],Sc=[],Cc=new Float32Array(16),wc=new Float32Array(9),Tc=new Float32Array(4);function Ec(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=xc[i];if(a===void 0&&(a=new Float32Array(i),xc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Dc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Oc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function kc(e,t){let n=Sc[t];n===void 0&&(n=new Int32Array(t),Sc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ac(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Dc(n,t))return;e.uniform2fv(this.addr,t),Oc(n,t)}}function Mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Dc(n,t))return;e.uniform3fv(this.addr,t),Oc(n,t)}}function Nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Dc(n,t))return;e.uniform4fv(this.addr,t),Oc(n,t)}}function Pc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Dc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Oc(n,t)}else{if(Dc(n,r))return;Tc.set(r),e.uniformMatrix2fv(this.addr,!1,Tc),Oc(n,r)}}function Fc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Dc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Oc(n,t)}else{if(Dc(n,r))return;wc.set(r),e.uniformMatrix3fv(this.addr,!1,wc),Oc(n,r)}}function Ic(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Dc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Oc(n,t)}else{if(Dc(n,r))return;Cc.set(r),e.uniformMatrix4fv(this.addr,!1,Cc),Oc(n,r)}}function Lc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Dc(n,t))return;e.uniform2iv(this.addr,t),Oc(n,t)}}function zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Dc(n,t))return;e.uniform3iv(this.addr,t),Oc(n,t)}}function Bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Dc(n,t))return;e.uniform4iv(this.addr,t),Oc(n,t)}}function Vc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Dc(n,t))return;e.uniform2uiv(this.addr,t),Oc(n,t)}}function Uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Dc(n,t))return;e.uniform3uiv(this.addr,t),Oc(n,t)}}function Wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Dc(n,t))return;e.uniform4uiv(this.addr,t),Oc(n,t)}}function Gc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(_c.compareFunction=n.isReversedDepthBuffer()?518:515,a=_c):a=gc,n.setTexture2D(t||a,i)}function Kc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||yc,i)}function qc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||bc,i)}function Jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||vc,i)}function Yc(e){switch(e){case 5126:return Ac;case 35664:return jc;case 35665:return Mc;case 35666:return Nc;case 35674:return Pc;case 35675:return Fc;case 35676:return Ic;case 5124:case 35670:return Lc;case 35667:case 35671:return Rc;case 35668:case 35672:return zc;case 35669:case 35673:return Bc;case 5125:return Vc;case 36294:return Hc;case 36295:return Uc;case 36296:return Wc;case 35678:case 36198:case 36298:case 36306:case 35682:return Gc;case 35679:case 36299:case 36307:return Kc;case 35680:case 36300:case 36308:case 36293:return qc;case 36289:case 36303:case 36311:case 36292:return Jc}}function Xc(e,t){e.uniform1fv(this.addr,t)}function Zc(e,t){let n=Ec(t,this.size,2);e.uniform2fv(this.addr,n)}function Qc(e,t){let n=Ec(t,this.size,3);e.uniform3fv(this.addr,n)}function $c(e,t){let n=Ec(t,this.size,4);e.uniform4fv(this.addr,n)}function el(e,t){let n=Ec(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function tl(e,t){let n=Ec(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function nl(e,t){let n=Ec(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function rl(e,t){e.uniform1iv(this.addr,t)}function il(e,t){e.uniform2iv(this.addr,t)}function al(e,t){e.uniform3iv(this.addr,t)}function ol(e,t){e.uniform4iv(this.addr,t)}function sl(e,t){e.uniform1uiv(this.addr,t)}function cl(e,t){e.uniform2uiv(this.addr,t)}function ll(e,t){e.uniform3uiv(this.addr,t)}function ul(e,t){e.uniform4uiv(this.addr,t)}function dl(e,t,n){let r=this.cache,i=t.length,a=kc(n,i);Dc(r,a)||(e.uniform1iv(this.addr,a),Oc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?_c:gc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function fl(e,t,n){let r=this.cache,i=t.length,a=kc(n,i);Dc(r,a)||(e.uniform1iv(this.addr,a),Oc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||yc,a[e])}function pl(e,t,n){let r=this.cache,i=t.length,a=kc(n,i);Dc(r,a)||(e.uniform1iv(this.addr,a),Oc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||bc,a[e])}function ml(e,t,n){let r=this.cache,i=t.length,a=kc(n,i);Dc(r,a)||(e.uniform1iv(this.addr,a),Oc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||vc,a[e])}function hl(e){switch(e){case 5126:return Xc;case 35664:return Zc;case 35665:return Qc;case 35666:return $c;case 35674:return el;case 35675:return tl;case 35676:return nl;case 5124:case 35670:return rl;case 35667:case 35671:return il;case 35668:case 35672:return al;case 35669:case 35673:return ol;case 5125:return sl;case 36294:return cl;case 36295:return ll;case 36296:return ul;case 35678:case 36198:case 36298:case 36306:case 35682:return dl;case 35679:case 36299:case 36307:return fl;case 35680:case 36300:case 36308:case 36293:return pl;case 36289:case 36303:case 36311:case 36292:return ml}}var gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yc(t.type)}},_l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hl(t.type)}},vl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},yl=/(\w+)(\])?(\[|\.)?/g;function bl(e,t){e.seq.push(t),e.map[t.id]=t}function xl(e,t,n){let r=e.name,i=r.length;for(yl.lastIndex=0;;){let a=yl.exec(r),o=yl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){bl(n,l===void 0?new gl(s,e,t):new _l(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new vl(s),bl(n,e)),n=e}}}var Sl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);xl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Cl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var wl=37297,Tl=0;function El(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Dl=new W;function Ol(e){_t._getMatrix(Dl,_t.workingColorSpace,e);let t=`mat3( ${Dl.elements.map(e=>e.toFixed(4))} )`;switch(_t.getTransfer(e)){case Re:return[t,`LinearTransferOETF`];case ze:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function kl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+El(e.getShaderSource(t),r)}return i}function Al(e,t){let n=Ol(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var jl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ml(e,t){let n=jl[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Nl=new U;function Pl(){return _t.getLuminanceCoefficients(Nl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Nl.x.toFixed(4)}, ${Nl.y.toFixed(4)}, ${Nl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Fl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Rl).join(`
`)}function Il(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ll(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Rl(e){return e!==``}function zl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(e){return e.replace(Vl,Wl)}var Ul=new Map;function Wl(e,t){let n=Y[t];if(n===void 0){let e=Ul.get(t);if(e!==void 0)n=Y[e],B(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Hl(n)}var Gl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(e){return e.replace(Gl,ql)}function ql(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Jl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Yl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Xl(e){return Yl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Zl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Ql(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Zl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var $l={302:`ENVMAP_MODE_REFRACTION`};function eu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:$l[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var tu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function nu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:tu[e.combine]||`ENVMAP_BLENDING_NONE`}function ru(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function iu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Xl(n),l=Ql(n),u=eu(n),d=nu(n),f=ru(n),p=Fl(n),m=Il(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Rl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Rl).join(`
`),_.length>0&&(_+=`
`)):(g=[Jl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Rl).join(`
`),_=[Jl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:Ml(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,Al(`linearToOutputTexel`,n.outputColorSpace),Pl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Rl).join(`
`)),o=Hl(o),o=zl(o,n),o=Bl(o,n),s=Hl(s),s=zl(s,n),s=Bl(s,n),o=Kl(o),s=Kl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Cl(i,i.VERTEX_SHADER,y),S=Cl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=kl(i,x,`vertex`),n=kl(i,S,`fragment`);V(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Sl(i,h),T=Ll(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,wl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Tl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var au=0,ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new su(e),t.set(e,n)),n}},su=class{constructor(e){this.id=au++,this.code=e,this.usedTimes=0}};function cu(e){return e===1030||e===37490||e===36285}function lu(e,t,n,r,i,a){let o=new Wt,s=new ou,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=As[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),te=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,N=!!i.map,P=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,I=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=le&&!!i.anisotropyMap,_e=ue&&!!i.clearcoatMap,ve=ue&&!!i.clearcoatNormalMap,ye=ue&&!!i.clearcoatRoughnessMap,be=pe&&!!i.iridescenceMap,xe=pe&&!!i.iridescenceThicknessMap,Se=me&&!!i.sheenColorMap,Ce=me&&!!i.sheenRoughnessMap,we=!!i.specularMap,Te=!!i.specularColorMap,Ee=!!i.specularIntensityMap,De=he&&!!i.transmissionMap,Oe=he&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,je=i.alphaTest>0,L=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let Pe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:te,instancingColor:te&&h.instanceColor!==null,instancingMorph:te&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&cu(i.normalMap.format),metalnessMap:F,roughnessMap:I,anisotropy:le,anisotropyMap:ge,clearcoat:ue,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:he,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:je,alphaHash:L,combine:i.combine,mapUv:N&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:oe&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:F&&m(i.metalnessMap.channel),roughnessMapUv:I&&m(i.roughnessMap.channel),anisotropyMapUv:ge&&m(i.anisotropyMap.channel),clearcoatMapUv:_e&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(i.sheenRoughnessMap.channel),specularMapUv:we&&m(i.specularMap.channel),specularColorMapUv:Te&&m(i.specularColorMap.channel),specularIntensityMapUv:Ee&&m(i.specularIntensityMap.channel),transmissionMapUv:De&&m(i.transmissionMap.channel),thicknessMapUv:Oe&&m(i.thicknessMap.channel),alphaMapUv:Ae&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(oe||le),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(N||Ae),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&_t.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&_t.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=As[t];n=vo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new iu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function uu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function du(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function fu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function pu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||du),r.length>1&&r.sort(t||fu),i.length>1&&i.sort(t||fu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function mu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new pu,e.set(t,[i])):n>=r.length?(i=new pu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function hu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new U,color:new G};break;case`SpotLight`:n={position:new U,direction:new U,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function gu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var _u=0;function vu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function yu(e){let t=new hu,n=gu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new Nt,o=new Nt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(vu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=_u++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function bu(e){let t=new yu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function xu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new bu(e),t.set(n,[a])):r>=i.length?(a=new bu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Su=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wu=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Tu=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Eu=new Nt,Du=new U,Ou=new U;function ku(e,t,n){let i=new mi,a=new H,s=new H,c=new Ot,l=new Co,u=new wo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new xo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:Su,fragmentShader:Cu}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new ur;y.setAttribute(`position`,new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new q(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){B(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new At(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Pi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new oc(a.x),p.map.depthTexture=new Fi(a.x,m)):(p.map=new At(a.x,a.y),p.map.depthTexture=new Pi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Du.setFromMatrixPosition(d.matrixWorld),e.position.copy(Du),Ou.copy(e.position),Ou.add(wu[t]),e.up.copy(Tu[t]),e.lookAt(Ou),e.updateMatrixWorld(),n.makeTranslation(-Du.x,-Du.y,-Du.z),Eu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Eu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new At(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Au(e,t){function n(){let t=!1,n=new Ot,r=null,i=new Ot(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):I(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=$e[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):I(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),te=M>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Ot().fromArray(re),oe=new Ot().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),F(e.CULL_FACE),me(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function I(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(I(e.BLEND),g=!1);else if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function he(t,n){t.side===2?I(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):I(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function _e(t){t===0?I(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ve(t){t!==k&&(te&&e.lineWidth(t),k=t)}function ye(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):I(e.POLYGON_OFFSET_FILL)}function be(t){t?F(e.SCISSOR_TEST):I(e.SCISSOR_TEST)}function xe(t){t===void 0&&(t=e.TEXTURE0+j-1),P!==t&&(e.activeTexture(t),P=t)}function Se(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+j-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function Ce(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function L(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function R(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Fe(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function z(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ie(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:I,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:xe,bindTexture:Se,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:L,texImage3D:Me,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:z,uniformBlockBinding:Ie,texStorage2D:Ae,texStorage3D:je,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:R,viewport:Fe,reset:Le}}function ju(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new H,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ke(`canvas`)}function T(e,t,n){let r=1,i=Ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Re:_t.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ee(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),N(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),ne(t)}function N(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&P(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function P(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function ne(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let re=0;function ie(){re=0}function ae(){return re}function oe(e){re=e}function se(){let e=re;return e>=p.maxTextures&&B(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),re+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function F(e,t){let n=f.get(e);if(e.isVideoTexture&&L(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ve(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function I(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?ve(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function le(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?ve(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function ue(e,t){let n=f.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version?ye(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let de={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},fe={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},pe={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function me(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,de[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,de[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,de[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,fe[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,fe[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,pe[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function he(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,te));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=ce(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&P(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ge(e,t,n){return Math.floor(Math.floor(e/n)/t)}function _e(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ge(r.start,t.width,4),c=ge(n.start,t.width,4);r.start<=o+1&&s===c&&ge(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function ve(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=he(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=_t.getPrimaries(_t.workingColorSpace),n=t.colorSpace===``?null:_t.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Me(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);me(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=j(t,e);if(t.isDepthTexture)u=ee(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&_e(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=Es(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=Es(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Ne(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Ne(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ye(e,t,n){if(t.image.length!==6)return;let r=he(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=_t.getPrimaries(_t.workingColorSpace),o=t.colorSpace===``?null:_t.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Me(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);me(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Ne(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function be(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),je(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ae(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function xe(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ee(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;je(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ae(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ae(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);je(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ae(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ae(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Se(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,i.__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,te)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),me(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else F(t.depthTexture,0);let a=i.__webglTexture,o=Ae(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)je(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)je(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ce(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Se(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Se(t.__webglFramebuffer[0],e,0):Se(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),xe(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),xe(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function we(e,t,n){let r=f.get(e);t!==void 0&&be(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Ce(e)}function Te(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,M);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&je(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Ae(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),xe(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),me(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)be(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else be(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),me(o,r),be(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),me(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)be(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else be(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&Ce(e)}function Ee(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let De=[],Oe=[];function ke(e){if(e.samples>0){if(je(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(De.length=0,Oe.length=0,De.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(De.push(a),Oe.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Oe)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,De))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ae(e){return Math.min(p.maxSamples,e.samples)}function je(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function L(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Me(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(_t.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=F,this.setTexture2DArray=I,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=we,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=be,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Mu(e,t){function n(n,r=``){let i,a=_t.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Nu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ii(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xo({vertexShader:Nu,fragmentShader:Pu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new so(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Iu=class extends et{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Fu,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new H,k=null,A=null,ee=new rs;ee.viewport=new Ot;let j=new rs;j.viewport=new Ot;let te=[ee,j],M=new ps,N=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new un,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new un,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new un,C[e]=t),t.getHandSpace()};function ne(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}N=null,P=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,ie),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new At(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Pi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new At(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ae=new U,oe=new U;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=ee.near=t,M.far=j.far=ee.far=n,(N!==M.near||P!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,P=M.far),M.layers.mask=e.layers.mask|6,ee.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;ce(M,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(M,ee,j):M.projectionMatrix.copy(ee.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),F(e,M,i)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let I=null;function le(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new rs,o.layers.enable(n),o.viewport=new Ot,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Ii,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}I&&I(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let ue=new Os;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){I=e},this.dispose=function(){}}},Lu=new Nt,Ru=new W;Ru.set(-1,0,0,0,1,0,0,0,1);function zu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,_o(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Lu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ru),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Bu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return V(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Vu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hu=null;function Uu(){return Hu===null&&(Hu=new ti(Vu,16,16,k,g),Hu.name=`DFG_LUT`,Hu.minFilter=o,Hu.magFilter=o,Hu.wrapS=t,Hu.wrapT=t,Hu.generateMipmaps=!1,Hu.needsUpdate=!0),Hu}var Wu=class{constructor(e={}){let{canvas:t=qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new U,k=null,j=null,te=[],M=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,ne=!1,re=null,ie=null,ae=null,oe=null;this._outputColorSpace=Ie;let se=0,ce=0,F=null,I=-1,le=null,ue=new Ot,de=new Ot,fe=null,pe=new G(0),me=0,he=t.width,ge=t.height,_e=1,ve=null,ye=null,be=new Ot(0,0,he,ge),xe=new Ot(0,0,he,ge),Se=!1,Ce=new mi,we=!1,Te=!1,Ee=new Nt,De=new U,Oe=new Ot,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return F===null?_e:1}let L=n;function Me(e,n){return t.getContext(e,n)}let Ne,Pe,R,Fe,z,Le,Re,ze,Be,Ve,He,We,Ge,Ke,Je,Xe,Ze,$e,et,tt,nt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),L===null){let t=`webgl2`;if(L=Me(t,e),L===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),V(`WebGLRenderer: `+e.message),e}function at(){Ne=new cc(L),Ne.init(),nt=new Mu(L,Ne),Pe=new Ls(L,Ne,e,nt),R=new Au(L,Ne),Pe.reversedDepthBuffer&&h&&R.buffers.depth.setReversed(!0),ie=L.createFramebuffer(),ae=L.createFramebuffer(),oe=L.createFramebuffer(),Fe=new dc(L),z=new uu,Le=new ju(L,Ne,R,z,Pe,nt,Fe),Re=new sc(P),ze=new ks(L),rt=new Fs(L,ze),Be=new lc(L,ze,Fe,rt),Ve=new pc(L,Be,ze,rt,Fe),$e=new fc(L,Pe,Le),Je=new Rs(z),He=new lu(P,Re,Ne,Pe,rt,Je),We=new zu(P,z),Ge=new mu,Ke=new xu(Ne),Ze=new Ps(P,Re,R,Ve,x,s),Xe=new ku(P,Ve,Pe),it=new Bu(L,Fe,Pe,R),et=new Is(L,Ne,Fe),tt=new uc(L,Ne,Fe),Fe.programs=He.programs,P.capabilities=Pe,P.extensions=Ne,P.properties=z,P.renderLists=Ge,P.shadowMap=Xe,P.state=R,P.info=Fe}S!==1009&&(N=new hc(S,t.width,t.height,o,r,i));let ot=new Iu(P,L);this.xr=ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(he,ge,!1))},this.getSize=function(e){return e.set(he,ge)},this.setSize=function(e,n,r=!0){ot.isPresenting?B(`WebGLRenderer: Can't change size while VR device is presenting.`):(he=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(he*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){he=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)V(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}N.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ue)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),R.viewport(ue.copy(be).multiplyScalar(_e).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),R.scissor(de.copy(xe).multiplyScalar(_e).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){R.setScissorTest(Se=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=C.has(t)}if(e){let e=F.texture.type,t=w.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,L.clearBufferuiv(L.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,L.clearBufferiv(L.COLOR,0,E))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),re=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Ze.dispose(),Ge.dispose(),Ke.dispose(),z.dispose(),Re.dispose(),Ve.dispose(),rt.dispose(),it.dispose(),He.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,mt),ot.removeEventListener(`sessionend`,ht),gt.stop()};function st(e){e.preventDefault(),Ye(`WebGLRenderer: Context Lost.`),ne=!0}function ct(){Ye(`WebGLRenderer: Context Restored.`),ne=!1;let e=Fe.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;at(),Fe.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function lt(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function H(e){let t=e.target;t.removeEventListener(`dispose`,H),ut(t)}function ut(e){dt(e),z.remove(e)}function dt(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Dt(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=ze.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*je()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*je()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ft(e,t,n,r){re!==null&&e.isNodeMaterial&&re.setObject(r,e),we===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,r),e.side=0,e.needsUpdate=!0,Ct(e,t,r),e.side=2):Ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),re!==null&&re.renderStart(e,t,n),j=Ke.get(n),j.init(t),M.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),re!==null&&re.updateLights(j.state.lightsArray),Te=this.localClippingEnabled,we=Je.init(this.clippingPlanes,Te),we===!0&&Je.setGlobalState(this.clippingPlanes,t),re!==null&&Xe.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ft(o,n,t,e),r.add(o)}else ft(i,n,t,e),r.add(i)}}),j=M.pop(),re!==null&&re.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=z.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let W=null;function pt(e){W&&W(e)}function mt(){gt.stop()}function ht(){gt.start()}let gt=new Os;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){W=e,ot.setAnimationLoop(e),e===null?gt.stop():gt.start()},ot.addEventListener(`sessionstart`,mt),ot.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;re!==null&&re.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=N!==null&&(F===null||n)&&N.begin(P,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,F),j=Ke.get(e,M.length),j.init(t),j.state.textureUnits=Le.getTextureUnits(),M.push(j),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ce.setFromProjectionMatrix(Ee,Ue,t.reversedDepth),Te=this.localClippingEnabled,we=Je.init(this.clippingPlanes,Te),k=Ge.get(e,te.length),k.init(),te.push(k),ot.enabled===!0&&ot.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&vt(e,t,-1/0,P.sortObjects)}vt(e,t,0,P.sortObjects),k.finish(),re!==null&&re.updateLights(j.state.lightsArray),P.sortObjects===!0&&k.sort(ve,ye),Ae=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ae&&Ze.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),we===!0&&Je.beginShadows();let i=j.state.shadowsArray;if(Xe.render(i,e,t),we===!0&&Je.endShadows(),(r&&N.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];bt(n,r,e,a)}Ae&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];yt(k,e,n,n.viewport)}}else r.length>0&&bt(n,r,e,t),Ae&&Ze.render(e),yt(k,e,t)}F!==null&&ce===0&&(Le.updateMultisampleRenderTarget(F),Le.updateRenderTargetMipmap(F)),r&&N.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),rt.resetDefaultState(),I=-1,le=null,M.pop(),M.length>0?(j=M[M.length-1],Le.setTextureUnits(j.state.textureUnits),we===!0&&Je.setGlobalState(P.clippingPlanes,j.state.camera)):j=null,te.pop(),k=te.length>0?te[te.length-1]:null,re!==null&&re.renderEnd()};function vt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)j.pushLightProbeGrid(e);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ce)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let i=Ve.update(e),a=e.material;a.visible&&k.push(e,i,a,n,Oe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ce))){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Oe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,Oe.z,s,t)}}else a.visible&&k.push(e,i,a,n,Oe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)vt(i[e],t,n,r)}function yt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),we===!0&&Je.setGlobalState(P.clippingPlanes,n),r&&R.viewport(ue.copy(r)),i.length>0&&xt(i,t,n),a.length>0&&xt(a,t,n),o.length>0&&xt(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function bt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new At(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||ue;a.setSize(o.z*P.transmissionResolutionScale,o.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),u=P.getActiveCubeFace(),d=P.getActiveMipmapLevel();P.setRenderTarget(a),P.getClearColor(pe),me=P.getClearAlpha(),me<1&&P.setClearColor(16777215,.5),P.clear(),Ae&&Ze.render(n);let f=P.toneMapping;P.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),we===!0&&Je.setGlobalState(P.clippingPlanes,r),xt(e,n,r),Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,St(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a))}P.setRenderTarget(s,u,d),P.setClearColor(pe,me),p!==void 0&&(r.viewport=p),P.toneMapping=f}function xt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&St(o,t,n,s,l,c)}}function St(e,t,n,r,i,a){re!==null&&i.isNodeMaterial&&re.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function Ct(e,t,n){t.isScene!==!0&&(t=ke);let r=z.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,H),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Tt(e,s),d}else s.uniforms=He.getUniforms(e),re!==null&&e.isNodeMaterial&&re.build(e,n,s),e.onBeforeCompile(s,P),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Tt(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=j.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function wt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Sl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Tt(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=ke),Le.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:_t.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),y=j.state.lights;if(we===!0&&(Te===!0||e!==le)){let t=e===le&&r.id===I;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=j.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Ct(r,t,i),re&&r.isNodeMaterial&&re.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(R.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==I&&(I=r.id,C=!0),v.needsLights){let e=Et(j.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||le!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(L,`projectionMatrix`,e.projectionMatrix),T.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(L,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&T.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(L,`sunShadowMap`,y.state.sunShadowMap,Le),y.state.directionalShadowMap.length>0&&T.setValue(L,`directionalShadowMap`,y.state.directionalShadowMap,Le),y.state.spotShadowMap.length>0&&T.setValue(L,`spotShadowMap`,y.state.spotShadowMap,Le),y.state.pointShadowMap.length>0&&T.setValue(L,`pointShadowMap`,y.state.pointShadowMap,Le)),i.isSkinnedMesh){T.setOptional(L,i,`bindMatrix`),T.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(L,`boneTexture`,e.boneTexture,Le))}i.isBatchedMesh&&(T.setOptional(L,i,`batchingTexture`),T.setValue(L,`batchingTexture`,i._matricesTexture,Le),T.setOptional(L,i,`batchingIdTexture`),T.setValue(L,`batchingIdTexture`,i._indirectTexture,Le),T.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(L,`batchingColorTexture`,i._colorsTexture,Le));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&$e.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Uu()),C){if(T.setValue(L,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&kt(E,w),a&&r.fog===!0&&We.refreshFogUniforms(E,a),We.refreshMaterialUniforms(E,r,_e,ge,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Sl.upload(L,wt(v),E,Le)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Sl.upload(L,wt(v),E,Le),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(L,`center`,i.center),T.setValue(L,`modelViewMatrix`,i.modelViewMatrix),T.setValue(L,`normalMatrix`,i.normalMatrix),T.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function kt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest,R.viewport(ue),R.scissor(de),R.setScissorTest(fe),I=-1;return}if(o.__webglFramebuffer===void 0)Le.setupRenderTarget(e);else if(o.__hasExternalTextures)Le.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Le.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Le.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest}else ue.copy(be).multiplyScalar(_e).floor(),de.copy(xe).multiplyScalar(_e).floor(),fe=Se;if(n!==0&&(r=ie),R.bindFramebuffer(L.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(ue),R.scissor(de),R.setScissorTest(fe),i){let r=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}I=-1};function Mt(e){let t=z.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Pe.textureFormatReadable(e.format),t.__typeReadable=Pe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){R.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=F===null?null:z.get(F).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let p=F===null?null:z.get(F).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,p);let m=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Qe(L,m,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(f),L.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Le.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(Le.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Le.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(Le.setTexture2D(t,0),v=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=R.getParameter(L.UNPACK_ROW_LENGTH),b=R.getParameter(L.UNPACK_IMAGE_HEIGHT),x=R.getParameter(L.UNPACK_SKIP_PIXELS),S=R.getParameter(L.UNPACK_SKIP_ROWS),C=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,l),R.pixelStorei(L.UNPACK_SKIP_ROWS,u),R.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,o,s,f,p,o,s,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);R.bindFramebuffer(L.READ_FRAMEBUFFER,ae),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,o,s,f,p,o,s,L.COLOR_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);R.pixelStorei(L.UNPACK_ROW_LENGTH,y),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(L.UNPACK_SKIP_PIXELS,x),R.pixelStorei(L.UNPACK_SKIP_ROWS,S),R.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&L.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&Le.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Le.setTextureCube(e,0):e.isData3DTexture?Le.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Le.setTexture2DArray(e,0):Le.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){se=0,ce=0,F=null,R.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ue}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}},Gu=(e,t,n)=>Math.max(t,Math.min(n,e)),Ku=(e,t,n)=>e+(t-e)*n,qu=(e,t,n)=>Gu((n-e)/(t-e||1),0,1),Ju=(e,t,n)=>{let r=qu(e,t,n);return r*r*(3-2*r)},Yu=(e,t,n,r)=>Ku(e,t,1-Math.exp(-n*r));function Xu(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Zu=class{next;constructor(e){this.next=Xu(e)}float(e=0,t=1){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.float(e,t+1-2**-52))}chance(e){return this.next()<e}pick(e){return e[Math.min(e.length-1,Math.floor(this.next()*e.length))]}sign(){return this.next()<.5?-1:1}};function Qu(e){let t=Math.floor(e/60),n=Math.floor(e%60);return`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`}function $u(e){return e<1.2?`咫尺`:e>=1e3?`${(e/1e3).toFixed(1)} 里`:`${Math.round(e)} 步`}function ed(e){return!Number.isFinite(e)||e<=0?`—`:e>=1e3?`${(e/1e3).toFixed(1)} Mbps`:`${Math.round(e)} Kbps`}new U(0,1,0);function td(e){return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function nd(e){return 1-(1-e)**5}var rd=new class{ctx=null;destination=null;state=`idle`;volume=.62;master;ambientBus;musicBus;sfxBus;reverb;reverbSend;windGain;waterGain;padGain;deckFilter;noiseBuffer;rng=new Zu(4172);nextPluck=0;nextBird=0;nextCricket=0;musicEnabled=!0;weather=`clear`;lastFootstep=0;startedAt=0;muted=!1;async unlock(){if(this.ctx){this.ctx.state===`suspended`&&await this.ctx.resume().catch(()=>void 0);return}let e=window.AudioContext||window.webkitAudioContext;if(e)try{this.ctx=new e({latencyHint:`interactive`}),await this.ctx.resume().catch(()=>void 0),this.buildGraph(),this.state=`running`,this.startedAt=this.ctx.currentTime,this.nextPluck=this.ctx.currentTime+4,this.nextBird=this.ctx.currentTime+7,this.nextCricket=this.ctx.currentTime+5}catch{this.ctx=null}}buildGraph(){let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.volume;let t=e.createDynamicsCompressor();t.threshold.value=-18,t.knee.value=20,t.ratio.value=3,t.attack.value=.01,t.release.value=.35,this.master.connect(t),t.connect(e.destination),this.destination=e.createMediaStreamDestination(),t.connect(this.destination),this.ambientBus=e.createGain(),this.ambientBus.gain.value=.8,this.musicBus=e.createGain(),this.musicBus.gain.value=.7,this.sfxBus=e.createGain(),this.sfxBus.gain.value=.76,this.ambientBus.connect(this.master),this.musicBus.connect(this.master),this.sfxBus.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=this.makeImpulse(2.6,2.8),this.reverbSend=e.createGain(),this.reverbSend.gain.value=.32,this.reverbSend.connect(this.reverb),this.reverb.connect(this.master),this.noiseBuffer=this.makeNoiseBuffer(5),this.deckFilter=e.createBiquadFilter(),this.deckFilter.type=`lowpass`,this.deckFilter.frequency.value=1200,this.windGain=e.createGain(),this.windGain.gain.value=.15,this.windGain.connect(this.ambientBus);let n=e.createBufferSource();n.buffer=this.noiseBuffer,n.loop=!0;let r=e.createBiquadFilter();r.type=`bandpass`,r.frequency.value=420,r.Q.value=.55;let i=e.createBufferSource();i.buffer=this.noiseBuffer,i.loop=!0,i.playbackRate.value=.71;let a=e.createBiquadFilter();a.type=`highpass`,a.frequency.value=650;let o=e.createGain();o.gain.value=.04,n.connect(r).connect(this.windGain),i.connect(a).connect(o).connect(this.windGain),n.start(),i.start(),this.waterGain=e.createGain(),this.waterGain.gain.value=.05,this.waterGain.connect(this.ambientBus);let s=e.createBufferSource();s.buffer=this.noiseBuffer,s.loop=!0,s.playbackRate.value=.38;let c=e.createBiquadFilter();c.type=`lowpass`,c.frequency.value=560;let l=e.createGain();l.gain.value=1;let u=e.createOscillator();u.frequency.value=.17;let d=e.createGain();d.gain.value=.55,u.connect(d).connect(l.gain),s.connect(c).connect(l).connect(this.waterGain),s.start(),u.start(),this.padGain=e.createGain(),this.padGain.gain.value=.018,this.padGain.connect(this.musicBus);for(let[t,n]of[[73.42,-4],[110,3],[146.83,-2]]){let r=e.createOscillator();r.type=`sine`,r.frequency.value=t,r.detune.value=n;let i=e.createGain();i.gain.value=.33;let a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=220,r.connect(a).connect(i).connect(this.padGain),r.start()}let f=e.createOscillator();f.frequency.value=.04;let p=e.createGain();p.gain.value=.008,f.connect(p).connect(this.padGain.gain),f.start()}makeNoiseBuffer(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),r=t.createBuffer(2,n,t.sampleRate);for(let e=0;e<2;e++){let t=r.getChannelData(e),i=0;for(let e=0;e<n;e++){let n=this.rng.float(-1,1);i=i*.985+n*.015,t[e]=i*2.4+n*.05}}return r}makeImpulse(e,t){let n=this.ctx,r=Math.floor(n.sampleRate*e),i=n.createBuffer(2,r,n.sampleRate);for(let e=0;e<2;e++){let n=i.getChannelData(e);for(let e=0;e<r;e++){let i=e/r;n[e]=this.rng.float(-1,1)*(1-i)**t*.9/(1+e*.0018)}}return i}setVolume(e){this.volume=Gu(e,0,1),this.master&&this.master.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.05)}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:this.volume,this.ctx.currentTime,.08)}setMusicEnabled(e){this.musicEnabled=e,this.musicBus&&this.musicBus.gain.setTargetAtTime(e?.7:.2,this.ctx.currentTime,.5)}setWeather(e){if(this.weather===e||(this.weather=e,!this.ctx))return;let t=this.ctx.currentTime,n=e===`mist`?.22:e===`dusk`?.1:.14;this.windGain.gain.setTargetAtTime(n,t,1.2),this.waterGain.gain.setTargetAtTime(e===`mist`?.065:.05,t,1.5),this.padGain.gain.setTargetAtTime(e===`dusk`?.032:.016,t,1.5)}update(e,t,n,r){if(!this.ctx||this.state!==`running`)return;let i=this.ctx.currentTime,a=Gu(.13-e*.0017,.02,.13)+(n?.06:0);this.waterGain.gain.setTargetAtTime(a,i,.4),this.musicEnabled&&i>this.nextPluck&&(this.playAmbientPhrase(i+.02),this.nextPluck=i+this.rng.float(5.5,12.5)),i>this.nextBird&&this.weather!==`dusk`&&(this.birdCall(i+this.rng.float(.1,.4)),this.nextBird=i+this.rng.float(7,18)),i>this.nextCricket&&this.weather===`dusk`&&(this.cricket(i),this.nextCricket=i+this.rng.float(1.7,4.5)),this.destination&&this.ctx.state===`running`&&!this.destination.stream.active&&this.destination.stream.getAudioTracks()}playAmbientPhrase(e){let t=[146.83,164.81,185,220,246.94,293.66,329.63,369.99],n=this.rng.int(1,3);for(let r=0;r<n;r++){let n=this.rng.pick(t);this.pluck(n,e+r*this.rng.float(.55,1.1),this.rng.float(.04,.1),2.8)}}pluck(e,t,n,r){if(!this.ctx)return;let i=this.ctx,a=i.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(n,t+.012),a.gain.exponentialRampToValueAtTime(1e-4,t+r);let o=i.createBiquadFilter();o.type=`lowpass`,o.frequency.setValueAtTime(Math.min(5200,e*9),t),o.frequency.exponentialRampToValueAtTime(Math.max(280,e*2.4),t+r*.85),o.Q.value=1.8,a.connect(o),o.connect(this.musicBus);let s=i.createGain();s.gain.value=.24,o.connect(s).connect(this.reverbSend);let c=i.createOscillator();c.type=`triangle`,c.frequency.setValueAtTime(e,t),c.detune.setValueAtTime(this.rng.float(-5,5),t);let l=i.createOscillator();l.type=`sine`,l.frequency.setValueAtTime(e*2.006,t);let u=i.createGain();u.gain.value=.32,c.connect(a),l.connect(u).connect(a),c.start(t),l.start(t),c.stop(t+r+.1),l.stop(t+r+.1);let d=i.createBufferSource();d.buffer=this.noiseBuffer;let f=i.createBiquadFilter();f.type=`bandpass`,f.frequency.value=1900,f.Q.value=1.2;let p=i.createGain();p.gain.setValueAtTime(.035,t),p.gain.exponentialRampToValueAtTime(1e-4,t+.08),d.connect(f).connect(p).connect(this.musicBus),d.start(t),d.stop(t+.1)}playGuqinPhrase(){if(!this.ctx)return;let e=this.ctx.currentTime+.04,t=[146.83,164.81,220,246.94,293.66,246.94,220,185,146.83];for(let n=0;n<t.length;n++)this.pluck(t[n],e+n*.35+n%3*.06,.1-n*.004,3.1);setTimeout(()=>this.chimeTone(880,.04,1.6),1200)}playSeal(e=0){if(!this.ctx)return;let t=523.25*2**(e%7/12);this.chimeTone(t,.16,2.2),setTimeout(()=>this.chimeTone(t*1.5,.1,2.4),90),setTimeout(()=>this.chimeTone(t*2.01,.06,2),200)}chime(){if(!this.ctx)return;let e=this.ctx.currentTime;for(let t=0;t<5;t++)this.chimeTone(680+t*137,.035,1.4,e+t*.055)}chimeTone(e,t,n,r){if(!this.ctx)return;let i=this.ctx,a=r??i.currentTime,o=i.createGain();o.gain.setValueAtTime(0,a),o.gain.linearRampToValueAtTime(t,a+.01),o.gain.exponentialRampToValueAtTime(1e-4,a+n),o.connect(this.sfxBus);let s=i.createGain();s.gain.value=.3,o.connect(s).connect(this.reverbSend);for(let[t,r]of[[1,1],[2.01,.42],[3.96,.2]]){let s=i.createOscillator();s.type=`sine`,s.frequency.value=e*t;let c=i.createGain();c.gain.value=r,s.connect(c).connect(o),s.start(a),s.stop(a+n+.05)}}footstep(e=`grass`,t=1){if(!this.ctx)return;let n=this.ctx.currentTime;if(n-this.lastFootstep<.12)return;this.lastFootstep=n;let r=this.ctx.createBufferSource();r.buffer=this.noiseBuffer;let i=this.ctx.createBiquadFilter();i.type=`lowpass`,i.frequency.value=e===`stone`||e===`bridge`?870:e===`boat`?540:360;let a=this.ctx.createGain(),o=(e===`boat`?.028:.055)*t;if(a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(o,n+.008),a.gain.exponentialRampToValueAtTime(1e-4,n+(e===`boat`?.35:.18)),r.connect(i).connect(a).connect(this.sfxBus),r.start(n),r.stop(n+.4),e===`stone`||e===`bridge`){let e=this.ctx.createOscillator();e.frequency.value=73+this.rng.float(-5,5);let t=this.ctx.createGain();t.gain.setValueAtTime(.02,n),t.gain.exponentialRampToValueAtTime(1e-4,n+.1),e.connect(t).connect(this.sfxBus),e.start(n),e.stop(n+.12)}e===`boat`&&this.splash(n,.45)}splash(e,t=1){if(!this.ctx)return;let n=this.ctx,r=e??n.currentTime,i=n.createBufferSource();i.buffer=this.noiseBuffer;let a=n.createBiquadFilter();a.type=`bandpass`,a.frequency.value=900+this.rng.float(-200,400),a.Q.value=.7;let o=n.createGain();o.gain.setValueAtTime(0,r),o.gain.linearRampToValueAtTime(.035*t,r+.01),o.gain.exponentialRampToValueAtTime(1e-4,r+.5*t),i.connect(a).connect(o).connect(this.sfxBus),i.start(r),i.stop(r+.8*t)}uiTick(e=!1){this.chimeTone(e?1560:740,.022,.32)}paper(){if(!this.ctx)return;let e=this.ctx,t=e.currentTime,n=e.createBufferSource();n.buffer=this.noiseBuffer,n.playbackRate.value=1.7;let r=e.createBiquadFilter();r.type=`highpass`,r.frequency.value=900;let i=e.createGain();i.gain.setValueAtTime(0,t);for(let e=0;e<7;e++){let n=t+e*.04+this.rng.float(0,.025);i.gain.linearRampToValueAtTime(this.rng.float(.008,.035),n),i.gain.exponentialRampToValueAtTime(.002,n+.03)}i.gain.exponentialRampToValueAtTime(1e-4,t+.55),n.connect(r).connect(i).connect(this.sfxBus),n.start(t),n.stop(t+.7)}birdCall(e){if(!this.ctx)return;let t=this.ctx,n=this.rng.int(2,4);for(let r=0;r<n;r++){let n=e+r*this.rng.float(.07,.14),i=t.createOscillator();i.type=`sine`;let a=this.rng.float(2e3,3400);i.frequency.setValueAtTime(a,n),i.frequency.exponentialRampToValueAtTime(a*this.rng.float(1.18,1.55),n+.05),i.frequency.exponentialRampToValueAtTime(a*.92,n+.09);let o=t.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(this.rng.float(.003,.008),n+.01),o.gain.exponentialRampToValueAtTime(1e-4,n+.11);let s=t.createStereoPanner();s.pan.value=this.rng.float(-.8,.8),i.connect(o).connect(s).connect(this.ambientBus);let c=t.createGain();c.gain.value=.12,s.connect(c).connect(this.reverbSend),i.start(n),i.stop(n+.14)}}cricket(e){if(!this.ctx)return;let t=this.ctx,n=t.createOscillator();n.type=`triangle`,n.frequency.value=4100+this.rng.float(-300,300);let r=t.createGain();r.gain.setValueAtTime(0,e);for(let t=0;t<4;t++){let n=e+t*.045;r.gain.linearRampToValueAtTime(.006,n),r.gain.linearRampToValueAtTime(0,n+.018)}r.gain.linearRampToValueAtTime(1e-4,e+.4),n.connect(r).connect(this.ambientBus),n.start(e),n.stop(e+.45)}setBoatRowing(e){!this.ctx||e<.12||this.rng.chance(.012+e*.012)&&this.splash(void 0,.5)}getAudioStream(){return this.destination?.stream??null}fadeAmbientForModal(e){this.ctx&&(this.ambientBus.gain.setTargetAtTime(e?.35:.8,this.ctx.currentTime,.35),this.musicBus.gain.setTargetAtTime(e?.24:this.musicEnabled?.7:.2,this.ctx.currentTime,.5))}async close(){this.ctx&&(await this.ctx.close().catch(()=>void 0),this.ctx=null,this.state=`idle`)}},id=class{canvas;audio;recorder=null;chunks=[];stream=null;startedAt=0;timer=null;limit=60;recording=!1;elapsed=0;onState;onFinished;constructor(e,t){this.canvas=e,this.audio=t}emit(e=null){this.onState?.({recording:this.recording,elapsed:this.elapsed,limit:this.limit,error:e})}pickMime(){for(let e of[`video/webm;codecs=vp9,opus`,`video/webm;codecs=vp8,opus`,`video/webm;codecs=vp9`,`video/webm;codecs=vp8`,`video/webm`])if(typeof MediaRecorder<`u`&&MediaRecorder.isTypeSupported(e))return e;return``}start(e=60){if(this.recording)return{ok:!1,message:`已在录制`};if(typeof MediaRecorder>`u`)return{ok:!1,message:`此浏览器不支持 WebM 录制`};if(typeof this.canvas.captureStream!=`function`)return{ok:!1,message:`画布无法捕获视频流`};try{this.limit=Math.max(15,Math.min(60,e));let t=this.canvas.captureStream(30),n=this.audio(),r=[...t.getVideoTracks()];n&&r.push(...n.getAudioTracks()),this.stream=new MediaStream(r);let i=this.pickMime();return this.recorder=new MediaRecorder(this.stream,{mimeType:i||void 0,videoBitsPerSecond:6e6,audioBitsPerSecond:128e3}),this.chunks=[],this.recorder.ondataavailable=e=>{e.data&&e.data.size>0&&this.chunks.push(e.data)},this.recorder.onstop=()=>{let e=new Blob(this.chunks,{type:this.recorder?.mimeType||`video/webm`}),t=this.elapsed;this.cleanup(),this.onFinished?.(e,t),this.emit()},this.recorder.onerror=()=>{this.cleanup(),this.emit(`录制中断`)},this.startedAt=performance.now(),this.elapsed=0,this.recording=!0,this.recorder.start(500),this.timer=window.setInterval(()=>{this.elapsed=(performance.now()-this.startedAt)/1e3,this.elapsed>=this.limit?this.stop():this.emit()},500),this.emit(),{ok:!0,message:`开始录制 · 上限 ${Qu(this.limit)}`}}catch(e){this.cleanup();let t=e instanceof Error?e.message:`录制启动失败`;return this.emit(t),{ok:!1,message:t}}}stop(){if(this.recording){this.elapsed=Math.min(this.limit,(performance.now()-this.startedAt)/1e3),this.recording=!1;try{this.recorder?.stop()}catch{this.cleanup(),this.emit(`录制收尾失败`)}}}toggle(){if(this.recording){let e=Math.round(this.elapsed);return this.stop(),{ok:!0,message:`收卷 · 已录 ${Qu(e)}`}}return this.start(60)}cleanup(){this.timer!==null&&(window.clearInterval(this.timer),this.timer=null),this.recording=!1,this.recorder=null,this.stream?.getTracks().forEach(e=>{e.kind===`video`&&e.stop()}),this.stream=null,this.emit()}dispose(){this.recording&&this.stop(),this.timer&&window.clearInterval(this.timer),this.stream?.getTracks().forEach(e=>e.stop())}},ad=[{id:`qing`,glyph:`青`,name:`启卷`,chapter:`其一`,location:`入画亭`,taskTitle:`入画 · 寻第一枚印章`,taskHint:`沿江边石径向北，柳岸尽处有一座入画亭。`,poem:`江流天地外，山色有无中。`,body:[`你在入画亭的旧案上看见一枚青田石印。石上余温，像是方才有人搁下笔，推门去看山了。`,`印面只刻一个「青」字。轻触时，亭外的江水忽然亮了一线，风从卷首吹向卷尾。`],lore:[{title:`青田石`,text:`石色如春山初醒，温润而不透。`},{title:`第一印`,text:`七印之始，启一卷山河。`},{title:`案上题记`,text:`凡入画者，先忘归路。`},{title:`风声`,text:`松涛、橹声、鹤唳，皆为画中声。`}],color:`#5f8b71`},{id:`qiao`,glyph:`桥`,name:`卧虹`,chapter:`其二`,location:`青石拱桥`,taskTitle:`过桥 · 取桥心旧印`,taskHint:`过西岸青石拱桥，在桥心栏柱上寻找第二枚印章。`,poem:`一桥烟雨跨寒江，半入青山半入云。`,body:[`青石桥的拱背卧在江面上，像一道被雨洗淡的墨痕。桥心栏柱的苔藓间，藏着一枚小小的石印。`,`桥下舟楫往来。你俯身取印时，水里的山影也跟着晃了一晃。`],lore:[{title:`石桥`,text:`三孔连拱，长六十七步，无钉无铆。`},{title:`苔痕`,text:`桥栏旧苔上，有不知年月的指印。`},{title:`桥名`,text:`乡人只唤它“卧虹”，不记年月。`},{title:`回声`,text:`桥洞会把橹声折成一声轻轻的叹。`}],color:`#81958d`},{id:`deng`,glyph:`灯`,name:`照夜`,chapter:`其三`,location:`石灯径`,taskTitle:`燃灯 · 点亮三盏石灯`,taskHint:`在石灯径依次点亮三盏古灯，灯尽处会现出一枚印章。`,poem:`石灯三盏照归人，一径松风入暮云。`,body:[`三盏石灯依次亮起，火光在青石间连成一条极细的金线。最后一盏灯下，浮起一枚暖色的印章。`,`飞虫绕灯，远处有人家。你忽然觉得，这卷山水并不只是画，它也有自己的黄昏。`],lore:[{title:`三灯`,text:`一照山径，二照归舟，三照故人。`},{title:`灯油`,text:`有松脂的清气，久燃不灭。`},{title:`守灯人`,text:`不知其名，只知每岁霜降添油。`},{title:`余烬`,text:`灯灭之后，石上仍留一点暖。`}],color:`#bd8b58`},{id:`yin`,glyph:`音`,name:`弦上`,chapter:`其四`,location:`听琴亭`,taskTitle:`听琴 · 在听琴亭抚弦`,taskHint:`绕到西岸听琴亭，坐定后按 E 抚一曲《流水》。`,poem:`七弦为益友，两耳是知音。`,body:[`琴弦轻颤，第一声像水珠落入深潭。弹到第三句，林间的鸟忽然安静下来，风也停在檐角。`,`一曲未尽，琴案上多了一枚朱红的“音”印。你说不清是琴声生出了它，还是它一直在等这一曲。`],lore:[{title:`古琴`,text:`仲尼式，七弦，桐木面，梓木底。`},{title:`五音`,text:`宫商角徵羽，与青绿五色相应。`},{title:`流水`,text:`曲中有一段，专写山涧过石。`},{title:`知音`,text:`琴不必弹给谁听，山会替你听。`}],color:`#9d5f54`},{id:`zhou`,glyph:`舟`,name:`沧浪`,chapter:`其五`,location:`江心石`,taskTitle:`泛舟 · 取江心之印`,taskHint:`在西岸渡口按 E 登舟，摇橹至江心石旁，再按 E 取印。`,poem:`一叶扁舟去，烟波江上寒。`,body:[`橹声欸乃，船头分开一匹青绿的绸。江心石上蹲着一只白鹭，见你来，只把翅膀略略一展，并不飞去。`,`石缝里躺着一枚水色的印章。印面刻着「舟」字，摸上去像一整个上午的江风。`],lore:[{title:`乌篷船`,text:`船身轻，吃水浅，可过桥洞。`},{title:`江心石`,text:`不为水没，不为水长，像一句誓言。`},{title:`白鹭`,text:`是这片水上最守时的过客。`},{title:`橹歌`,text:`摇三下，停一停，等山影跟上。`}],color:`#557f88`},{id:`huang`,glyph:`篁`,name:`风篁`,chapter:`其六`,location:`竹里风铃`,taskTitle:`风篁 · 敲响竹林风铃`,taskHint:`往西岸竹深处去，在风铃架下按 E 听风。`,poem:`竹影扫阶尘不动，月穿潭底水无痕。`,body:[`风铃只响了三声，竹林便像接到命令一样齐齐俯身。叶隙间漏下的光落成一枚碧色的印记。`,`你伸手接住它。竹叶还在响，响得很远，像从另一个夏天传来。`],lore:[{title:`风铃`,text:`旧铜所铸，铃身铸有四时风名。`},{title:`竹里馆`,text:`无门，无匾，只有一径青苔。`},{title:`竹风`,text:`分“穿林、扫叶、入梦”三种。`},{title:`印记`,text:`不是所有风都留下声音，但这一阵留下了。`}],color:`#6b8e5d`},{id:`shan`,glyph:`山`,name:`无尽`,chapter:`其七`,location:`望江台`,taskTitle:`归卷 · 登望江台收第七印`,taskHint:`六印归位后，前往山脊尽处的望江台。`,poem:`江作青罗带，山如碧玉篸。`,body:[`最后一方石印立在望江台的石案上。你触碰它时，脚下的山、眼前的江、身后的来路，同时安静下来。`,`七印归一。长卷在你面前慢慢展开——原来你走过的每一步，都是画中的一笔。`],lore:[{title:`望江台`,text:`建在山脊收束处，可望见整条青绿江水。`},{title:`七印`,text:`青、桥、灯、音、舟、篁、山，合为一卷。`},{title:`归卷`,text:`看山仍是山，看水仍是水。`},{title:`后记`,text:`画中人不知身在画中，方可游得尽兴。`}],color:`#4e7679`}],od=[{id:`preface`,kicker:`卷首 · 题跋`,title:`入 画`,location:`入画亭`,poem:`咫尺千里，方寸山河。
可行，可望，可游，可居。`,body:[`展卷。绢色微黄，青绿在水气里醒过来。你听见远远的橹声，像从北宋某个清晨渡来。`,`此卷没有边界。你可以沿江走，可以登桥，可以借一叶舟去江心；也可以在任意一棵松树下停住，看云把山峦推开又合拢。`,`七枚石印散在山水之间。它们不标记终点，只记录你曾经认真看过的地方。`],sealGlyph:`游`,footnote:`此跋已收入行旅册 · 启程之章`},{id:`bridge`,kicker:`桥心 · 题跋`,title:`卧 虹`,location:`卧虹桥`,poem:`一桥烟雨跨寒江，
半入青山半入云。`,body:[`筑桥的人没有留下姓名。石缝里长出的野菊替他记住了每一个秋天。`,`桥拱一半落在水里，一半落在山影里。你从桥上走过，也就从自己的倒影上走过。`,`栏柱上的旧刻已经模糊，只认得一个「渡」字。渡人去，渡云归。`],sealGlyph:`渡`,footnote:`此跋已收入行旅册 · 过桥之章`},{id:`guqin`,kicker:`琴案 · 题跋`,title:`听 琴`,location:`听琴亭`,poem:`七弦为益友，
两耳是知音。`,body:[`亭中无人，琴上无尘。仿佛弹琴的人刚刚起身，去廊下看雨了。`,`琴弦是旧的，音色却清。你试着拨了一下，山便应了一声；再拨一下，江水应了一声。`,`第三声不弹了。留一点空，给风。`],sealGlyph:`音`,footnote:`此跋已收入行旅册 · 听琴之章`},{id:`summit`,kicker:`卷尾 · 题跋`,title:`无 尽`,location:`望江台`,poem:`江作青罗带，
山如碧玉篸。`,body:[`站在望江台上，才看见江是一条弯弯曲曲的线，山是层层叠叠的墨。`,`来时路细如游丝，七枚印章像七颗星，钉在青绿的绢面上。`,`画卷到此并未结束。所谓千里，不在尺幅，在人愿意再往前走一步。`],sealGlyph:`山`,footnote:`此跋已收入行旅册 · 归卷之章`}],sd={clear:{id:`clear`,name:`晴岚`,short:`晴`,hint:`江天`,description:`山光水色，明净如洗。飞鸟与远帆都看得很清。`,glyph:`晴`,accent:`#8fa77a`},mist:{id:`mist`,name:`云岫`,short:`雾`,hint:`空蒙`,description:`云气从江面升起，山色在有无之间。适合听水，也适合慢走。`,glyph:`雾`,accent:`#9aafa9`},dusk:{id:`dusk`,name:`暮山`,short:`暮`,hint:`归鸟`,description:`日薄西山，石灯次第亮起。归鸟、远火与渔歌，都属于这一刻。`,glyph:`暮`,accent:`#c08a5e`}},cd=[{id:`start`,name:`入画亭`,kicker:`卷首 · 东岸`,description:`柳岸初见，一方旧案，一枚青印。`,mapGlyph:`亭`},{id:`bridge`,name:`卧虹桥`,kicker:`江上 · 中段`,description:`三孔石桥，桥心藏印，桥下过舟。`,mapGlyph:`桥`},{id:`lanterns`,name:`石灯径`,kicker:`西岸 · 松间`,description:`三盏古灯照着一条归路。`,mapGlyph:`灯`},{id:`guqin`,name:`听琴亭`,kicker:`西岸 · 山坳`,description:`七弦无声，群山有耳。`,mapGlyph:`琴`},{id:`dock`,name:`西渡口`,kicker:`西岸 · 水口`,description:`乌篷船系在柳桩上，橹声等你。`,mapGlyph:`渡`},{id:`islet`,name:`江心石`,kicker:`江心 · 中流`,description:`白鹭守着江心，一枚水色的印。`,mapGlyph:`石`},{id:`bamboo`,name:`竹里风铃`,kicker:`西岸 · 竹深处`,description:`风过竹梢，铃铛替山说话。`,mapGlyph:`竹`},{id:`overlook`,name:`望江台`,kicker:`山脊 · 卷尾`,description:`七印归一之处，可俯瞰整卷江山。`,mapGlyph:`台`}];function ld(e){return ad.find(t=>t.id===e)??ad[0]}function ud(e){return od.find(t=>t.id===e)??od[0]}function dd(e,t,n=1337){let r=Math.imul(e|0,374761393)^Math.imul(t|0,668265263)^Math.imul(n|0,1442695041);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967295}function fd(e,t,n=1337){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=dd(r,i,n),u=dd(r+1,i,n),d=dd(r,i+1,n),f=dd(r+1,i+1,n);return Ku(Ku(l,u,s),Ku(d,f,s),c)}function pd(e,t,n=4,r=1337,i=2.03,a=.5){let o=.5,s=1,c=0,l=0;for(let u=0;u<n;u++)c+=o*fd(e*s+u*17.13,t*s-u*9.27,r+u*121),l+=o,o*=a,s*=i;return c/l}function md(e,t,n=5,r=2491){let i=.55,a=1,o=0,s=0;for(let c=0;c<n;c++){let n=fd(e*a+31.7*c,t*a-12.3*c,r+37*c),l=1-Math.abs(n*2-1);o+=i*l*l,s+=i,i*=.5,a*=2.12}return o/s}var Z={xMin:-720,xMax:720,zMin:-1120,zMax:880,waterY:0,startZ:660,bridgeZ:300,lanternZ:135,guqinZ:-40,dockZ:-160,isletZ:-300,bambooZ:-445,overlookZ:-655},hd=1,gd=-1,_d=class{world=Z;pathStep=2;pathZMin=Z.zMin+20;pathZMax=Z.zMax-20;east;west;zones=[];sites;bridge;constructor(){this.east=this.buildPathProfile(hd),this.west=this.buildPathProfile(gd),this.bridge=this.buildBridge(),this.sites=this.buildSites(),this.buildZones()}riverCenter(e){return 46*Math.sin((e+170)*.0029)+22*Math.sin(e*.0017+1.4)+7*Math.sin(e*.007+.3)}riverHalfWidth(e){return 24+4.2*Math.sin(e*.006+.7)+2.3*Math.sin(e*.013+2.4)}pathX(e,t){let n=16+2.4*Math.sin(e*.015+t*1.7);return this.riverCenter(e)+t*(this.riverHalfWidth(e)+n)}pathY(e,t){let n=t===hd?this.east:this.west,r=Gu((e-n.zMin)/(n.zMax-n.zMin),0,1)*(n.zs.length-1),i=Math.min(n.zs.length-2,Math.floor(r)),a=r-i;return Ku(n.ys[i],n.ys[i+1],a)}rawHeight(e,t){let n=this.riverCenter(t),r=this.riverHalfWidth(t),i=Math.abs(e-n),a=Ju(r*.78,r+16,i),o=Ku(-6.8+pd(e*.021,t*.021,2,911)*.8,1.35,a),s=Math.max(0,i-r-23),c=Ju(9,230,s),l=md(e*.0041+23.4,t*.0041-8.1,5,8841),u=pd(e*.0082-3.2,t*.0082+7.3,4,331),d=pd(e*.027+.5,t*.027-.7,3,771);o+=c*(3.8+u*14.5);let f=Ju(52,420,s);o+=f*(20+l*168+d*38);let p=Ju(.57,.76,pd(e*.006+17,t*.006-11,3,5209)),m=Ju(70,230,s)*Ju(.2,.9,l);o+=p*m*(vd(e,n,t)?24:7),o+=Ju(r+6,r+90,i)*(pd(e*.02,t*.018,2,17)-.5)*1.3;let h=Math.hypot(e-(this.riverCenter(Z.isletZ)+10),t-Z.isletZ);return h<17&&(o+=Ju(17,4,h)*2.9),o}buildPathProfile(e){let t=this.pathZMin,n=this.pathZMax,r=this.pathStep,i=Math.floor((n-t)/r)+1,a=Array(i),o=Array(i);for(let n=0;n<i;n++){let i=t+n*r;a[n]=i;let s=this.pathX(i,e);o[n]=this.rawHeight(s-1.6,i)*.25+this.rawHeight(s,i)*.5+this.rawHeight(s+1.6,i)*.25}for(let e=0;e<5;e++){let e=o.slice();for(let t=1;t<i-1;t++)o[t]=e[t-1]*.18+e[t]*.64+e[t+1]*.18}for(let t=0;t<i;t++){let n=a[t];e===gd&&(o[t]+=1.25*Ju(-560,-700,n)*Ju(-780,-700,n))}let s=.27;for(let e=0;e<2;e++){for(let e=1;e<i;e++){let t=s*r;o[e]=Gu(o[e],o[e-1]-t,o[e-1]+t)}for(let e=i-2;e>=0;e--){let t=s*r;o[e]=Gu(o[e],o[e+1]-t,o[e+1]+t)}for(let e=1;e<i-1;e++)o[e]=o[e]*.8+(o[e-1]+o[e+1])*.1}for(let e=0;e<i;e++)o[e]=Math.max(.85,o[e]);return{zs:a,ys:o,step:r,zMin:t,zMax:n}}buildBridge(){let e=Z.bridgeZ,t=this.riverCenter(e),n=this.riverHalfWidth(e),r=t-n-14,i=t+n+14;return{cx:t,z:e,westEnd:r,eastEnd:i,halfWidth:3.7,baseWest:this.pathY(e,gd)+.23,baseEast:this.pathY(e,hd)+.23,archHeight:3.45,span:i-r}}buildSites(){let e=this.pathX(590,hd)+8.2,t=Z.lanternZ,n=this.pathX(t,gd)-8.5,r=Z.guqinZ,i=this.pathX(r,gd)-11,a=Z.dockZ,o=this.riverCenter(a)-this.riverHalfWidth(a)-12,s=Z.isletZ,c=this.riverCenter(s)+10,l=Z.bambooZ,u=this.pathX(l,gd)-14.5,d=Z.overlookZ,f=this.pathX(d,gd)-5.2,p=Z.startZ;return{spawn:{id:`spawn`,x:this.pathX(p,hd),z:p,y:this.pathY(p,hd),radius:3},startPavilion:{id:`start`,x:e,z:590,y:this.pathY(590,hd)+.08,radius:15},bridgeCenter:{id:`bridge`,x:this.bridge.cx,z:this.bridge.z,y:this.bridge.baseWest+(this.bridge.baseEast-this.bridge.baseWest)*.5+this.bridge.archHeight,radius:4},lanternGlade:{id:`lanterns`,x:n,z:t,y:this.pathY(t,gd)+.06,radius:11},guqin:{id:`guqin`,x:i,z:r,y:this.pathY(r,gd)+.18,radius:12},dock:{id:`dock`,x:o,z:a,y:.32,radius:8},islet:{id:`islet`,x:c,z:s,y:1.35,radius:6.2},bamboo:{id:`bamboo`,x:u,z:l,y:this.pathY(l,gd)+.08,radius:13},overlook:{id:`overlook`,x:f,z:d,y:this.pathY(d,gd)+1.75,radius:16}}}buildZones(){let e=this.sites;this.zones=[{x:e.startPavilion.x,z:e.startPavilion.z,inner:10,outer:21,target:e.startPavilion.y},{x:e.lanternGlade.x,z:e.lanternGlade.z,inner:8,outer:17,target:e.lanternGlade.y},{x:e.guqin.x,z:e.guqin.z,inner:9,outer:19,target:e.guqin.y},{x:e.bamboo.x,z:e.bamboo.z,inner:8,outer:20,target:e.bamboo.y},{x:e.overlook.x,z:e.overlook.z,inner:11,outer:25,target:e.overlook.y},{x:this.bridge.eastEnd+4,z:this.bridge.z,inner:5,outer:12,target:this.pathY(this.bridge.z,hd)+.1},{x:this.bridge.westEnd-4,z:this.bridge.z,inner:5,outer:12,target:this.pathY(this.bridge.z,gd)+.1}]}heightAt(e,t){let n=this.rawHeight(e,t),r=Math.abs(e-this.pathX(t,hd)),i=Math.abs(e-this.pathX(t,gd)),a=r<=i?hd:gd,o=1-Ju(2.4,15,Math.min(r,i));o>0&&(n=Ku(n,this.pathY(t,a),o));for(let r=0;r<this.zones.length;r++){let i=this.zones[r],a=Math.hypot(e-i.x,t-i.z);if(a<i.outer){let e=1-Ju(i.inner,i.outer,a);n=Ku(n,i.target,e)}}return n}slopeAt(e,t){let n=.8,r=(this.heightAt(e+n,t)-this.heightAt(e-n,t))/(2*n),i=(this.heightAt(e,t+n)-this.heightAt(e,t-n))/(2*n);return Math.hypot(r,i)}ridgeHeight(e,t){let n=pd(e*.0032+5.6,t*.0032-2.7,4,4421),r=md(e*.0024-11,t*.0024+3.1,4,991);return n*85+r**1.8*175}bridgeDeckHeight(e){let t=this.bridge,n=Gu((e-t.westEnd)/t.span,0,1),r=Math.sin(Math.PI*n)**.72;return Ku(t.baseWest,t.baseEast,n)+r*t.archHeight}isOnBridge(e,t,n=0){let r=this.bridge;return e>=r.westEnd-n&&e<=r.eastEnd+n&&Math.abs(t-r.z)<=r.halfWidth+n*.3}bridgeAt(e,t){return this.isOnBridge(e,t,.35)?this.bridgeDeckHeight(e):null}groundAt(e,t){let n=this.heightAt(e,t),r=this.bridgeAt(e,t);return r===null?n:Math.max(n,r)}waterDepthAt(e,t){return Z.waterY-this.heightAt(e,t)}isWater(e,t){return this.waterDepthAt(e,t)>.35&&!this.isOnBridge(e,t,1.2)}distanceToShore(e,t){let n=24;for(let r=0;r<16;r++){let i=r/16*Math.PI*2;for(let r=2;r<=22;r+=2){let a=e+Math.cos(i)*r,o=t+Math.sin(i)*r;if(this.heightAt(a,o)>.42){n=Math.min(n,r);break}}}return n}findDisembarkPoint(e,t){let n=null,r=15;for(let i=0;i<24;i++){let a=i/24*Math.PI*2;for(let i=2.5;i<=14;i+=1.25){let o=e+Math.cos(a)*i,s=t+Math.sin(a)*i,c=this.heightAt(o,s);if(c>.55&&c<4.8&&this.slopeAt(o,s)<1.05){i<r&&(r=i,n={x:o,z:s});break}}}return n}isIsletCollision(e,t){let n=this.sites.islet;return Math.hypot(e-n.x,t-n.z)<n.radius+.7}nearSite(e,t,n,r=0){let i=this.sites[n];return Math.hypot(e-i.x,t-i.z)<=14+r}nearestLandPoint(e,t){let n={x:this.pathX(t,hd),z:t},r=1/0;for(let i of[hd,gd])for(let a=-50;a<=50;a+=5){let o=this.pathX(t+a,i),s=Math.hypot(o-e,a);s<r&&(r=s,n={x:o,z:t+a})}return n}makeMapData(e){let t=[],n=[],r=[];for(let e=this.pathZMax;e>=this.pathZMin;e-=18)t.push({x:this.riverCenter(e),z:e}),n.push({x:this.pathX(e,hd),z:e}),r.push({x:this.pathX(e,gd),z:e});let i=(e,t,n,r=0)=>{let i=this.pathX(n,t),a=e.x+r,o=(n+e.z)*.5;return[{x:i,z:n},{x:Ku(i,a,.5),z:o},{x:a,z:e.z}]},a=[{x:this.bridge.westEnd,z:this.bridge.z},{x:this.bridge.eastEnd,z:this.bridge.z}];return{bounds:{minX:Z.xMin+20,maxX:Z.xMax-20,minZ:Z.zMin+20,maxZ:Z.zMax-20},river:t,eastPath:n,westPath:r,branchPaths:[i(this.sites.startPavilion,hd,this.sites.startPavilion.z),i(this.sites.lanternGlade,gd,this.sites.lanternGlade.z),i(this.sites.guqin,gd,this.sites.guqin.z),i(this.sites.dock,gd,this.sites.dock.z),i(this.sites.bamboo,gd,this.sites.bamboo.z),i(this.sites.overlook,gd,this.sites.overlook.z)],bridge:a,seals:e,landmarks:[{id:`start`,name:`入画亭`,glyph:`亭`,x:this.sites.startPavilion.x,z:this.sites.startPavilion.z},{id:`bridge`,name:`卧虹桥`,glyph:`桥`,x:this.bridge.cx,z:this.bridge.z},{id:`lanterns`,name:`石灯径`,glyph:`灯`,x:this.sites.lanternGlade.x,z:this.sites.lanternGlade.z},{id:`guqin`,name:`听琴亭`,glyph:`琴`,x:this.sites.guqin.x,z:this.sites.guqin.z},{id:`dock`,name:`西渡口`,glyph:`渡`,x:this.sites.dock.x,z:this.sites.dock.z},{id:`islet`,name:`江心石`,glyph:`石`,x:this.sites.islet.x,z:this.sites.islet.z},{id:`bamboo`,name:`风铃竹径`,glyph:`竹`,x:this.sites.bamboo.x,z:this.sites.bamboo.z},{id:`overlook`,name:`望江台`,glyph:`台`,x:this.sites.overlook.x,z:this.sites.overlook.z}],dock:{x:this.sites.dock.x,z:this.sites.dock.z},islet:{x:this.sites.islet.x,z:this.sites.islet.z},finale:{x:this.sites.overlook.x,z:this.sites.overlook.z}}}samplePath(e,t=8){let n=[];for(let r=this.pathZMax;r>=this.pathZMin;r-=t)n.push({x:this.pathX(r,e),z:r});return n}terrainTint(e,t){return fd(e*.012,t*.012,921)}};function vd(e,t,n){return e<t-50||e>t+260}function yd(e){let t=document.createElement(`canvas`);t.width=e,t.height=e;let n=t.getContext(`2d`);if(!n)throw Error(`Canvas 2D context unavailable`);return[t,n]}function bd(t,n=!1){let r=new Ni(t);return r.colorSpace=Ie,r.anisotropy=4,n&&(r.wrapS=e,r.wrapT=e),r}function xd(e,t={}){let n=t.width??t.size??512,r=t.height??t.size??256,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`);if(!a)throw Error(`Canvas 2D context unavailable`);if(t.background&&(a.fillStyle=t.background,a.fillRect(0,0,n,r)),t.border){a.strokeStyle=t.border,a.lineWidth=Math.max(1,Math.round(n/240));let e=t.padding??12;a.strokeRect(e,e,n-e*2,r-e*2)}let o=t.fontFamily??`'Ma Shan Zheng', 'STKaiti', 'KaiTi', serif`,s=t.fontSize??Math.round(r*.52),c=t.fontWeight??400;if(a.fillStyle=t.color??`#222923`,a.textAlign=t.align??`center`,a.textBaseline=`middle`,t.rotate&&(a.translate(n/2,r/2),a.rotate(t.rotate),a.translate(-n/2,-r/2)),t.vertical){let i=Array.from(e),l=s*1.08+(t.letterSpacing??0),u=r/2-(i.length-1)*l/2;a.textAlign=`center`,a.font=`${c} ${s}px ${o}`;for(let e of i)a.fillText(e,n/2,u),u+=l}else{a.font=`${c} ${s}px ${o}`;let i=t.letterSpacing??0;if(i!==0){let o=Array.from(e),s=o.map(e=>a.measureText(e).width),c=s.reduce((e,t)=>e+t,0)+i*(o.length-1),l=t.align===`left`?t.padding??0:t.align===`right`?n-c-(t.padding??0):(n-c)/2;a.textAlign=`left`;for(let e=0;e<o.length;e++)a.fillText(o[e],l,r/2),l+=s[e]+i}else{let i=t.align===`left`?t.padding??24:t.align===`right`?n-(t.padding??24):n/2;a.fillText(e,i,r/2)}}return bd(i)}function Sd(e,t=512,n=160){let r=document.createElement(`canvas`);r.width=t,r.height=n;let i=r.getContext(`2d`),a=i.createLinearGradient(0,0,0,n);return a.addColorStop(0,`#382f24`),a.addColorStop(.5,`#211d17`),a.addColorStop(1,`#4a3c2b`),i.fillStyle=a,i.fillRect(0,0,t,n),i.strokeStyle=`rgba(190, 152, 91, .6)`,i.lineWidth=3,i.strokeRect(9,9,t-18,n-18),i.strokeStyle=`rgba(196, 158, 98, .24)`,i.lineWidth=1,i.strokeRect(17,17,t-34,n-34),i.fillStyle=`#c7a56a`,i.font=`400 80px 'Ma Shan Zheng', 'STKaiti', 'KaiTi', serif`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillText(e,t/2,n/2+3),bd(r)}function Cd(e,t=`#a13d2c`){let n=document.createElement(`canvas`);n.width=256,n.height=256;let r=n.getContext(`2d`);r.fillStyle=`#e8dcc2`,r.fillRect(0,0,256,256),r.strokeStyle=t,r.lineWidth=7,r.strokeRect(15,15,226,226),r.fillStyle=t,r.font=`400 138px 'Ma Shan Zheng', 'STKaiti', 'KaiTi', serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(e,128,138);let i=bd(n);return i.anisotropy=8,i}function wd(e=1,t=`#9a9d8e`){let[n,r]=yd(512),i=new Zu(e);r.fillStyle=t,r.fillRect(0,0,512,512);for(let e=0;e<13e3;e++){let e=i.float(0,512),t=i.float(0,512),n=i.float(.25,1.4),a=i.int(75,160);r.fillStyle=`rgba(${a},${a+4},${a-4},${i.float(.03,.18)})`,r.beginPath(),r.arc(e,t,n,0,Math.PI*2),r.fill()}r.globalAlpha=.18;for(let e=0;e<22;e++){r.strokeStyle=i.chance(.4)?`#556259`:`#b9b3a1`,r.lineWidth=i.float(.5,1.3),r.beginPath();let e=i.float(0,512),t=i.float(0,512);r.moveTo(e,t);for(let n=0;n<3;n++)e+=i.float(-28,45),t+=i.float(-10,34),r.lineTo(e,t);r.stroke()}return r.globalAlpha=1,bd(n,!0)}function Td(e=3){let[t,n]=yd(512),r=new Zu(e);n.fillStyle=`#6e4e35`,n.fillRect(0,0,512,512);for(let e=0;e<512;e+=2){let t=Math.sin(e*.11)*.5+r.float(-.07,.07);n.fillStyle=`rgba(${Math.round(67+t*30)},${Math.round(46+t*22)},${Math.round(31+t*15)},.35)`,n.fillRect(0,e,512,1.5)}for(let e=0;e<18;e++){n.strokeStyle=`rgba(39,28,18,.22)`,n.lineWidth=r.float(.5,1.2),n.beginPath();let e=r.float(0,512);n.moveTo(e,0),n.bezierCurveTo(e+r.float(-15,20),160,e+r.float(-10,18),350,e+r.float(-8,15),512),n.stroke()}return bd(t,!0)}function Ed(){let[e,t]=yd(512);t.fillStyle=`#485551`,t.fillRect(0,0,512,512);for(let e=0;e<512;e+=32)for(let n=0;n<512;n+=64){let r=e/32%2==0?0:32,i=t.createLinearGradient(n+r,e,n+r,e+32);i.addColorStop(0,`rgba(159,173,160,.18)`),i.addColorStop(.5,`rgba(47,62,57,.1)`),i.addColorStop(1,`rgba(20,29,26,.25)`),t.fillStyle=i,t.fillRect(n+r,e,64,32),t.strokeStyle=`rgba(32,43,39,.4)`,t.lineWidth=1,t.beginPath(),t.moveTo(n+r,e+32),t.lineTo(n+r+64,e+32),t.stroke()}return bd(e,!0)}function Dd(e=0){let[t,n]=yd(512),r=new Zu(1200+e*79);n.clearRect(0,0,512,512);let i=22+e*4;for(let e=0;e<i;e++){let e=256+r.float(-.31,.31)*512,t=271.36+r.float(-.11,.12)*512,i=512*r.float(.05,.19),a=n.createRadialGradient(e,t,i*.05,e,t,i);a.addColorStop(0,`rgba(246,242,232,${r.float(.08,.2)})`),a.addColorStop(.52,`rgba(240,237,225,${r.float(.04,.1)})`),a.addColorStop(1,`rgba(240,237,225,0)`),n.fillStyle=a,n.beginPath(),n.ellipse(e,t,i*r.float(1.1,1.8),i,r.float(-.2,.2),0,Math.PI*2),n.fill()}n.globalCompositeOperation=`source-atop`;for(let e=0;e<14;e++){n.strokeStyle=`rgba(255,252,242,${r.float(.025,.07)})`,n.lineWidth=r.float(2,9),n.beginPath();let e=r.float(153.6,384);n.moveTo(r.float(81.92,153.6),e),n.bezierCurveTo(204.8,e-15,317.44,e+11,440.32,e-3),n.stroke()}return bd(t)}function Od(e=`rgba(255,245,220,1)`,t=`rgba(255,235,190,0)`){let[n,r]=yd(256),i=r.createRadialGradient(128,128,0,128,128,128);return i.addColorStop(0,e),i.addColorStop(.22,e),i.addColorStop(.55,`rgba(255,241,205,.32)`),i.addColorStop(1,t),r.fillStyle=i,r.fillRect(0,0,256,256),bd(n)}function kd(e=0){let t=document.createElement(`canvas`);t.width=256,t.height=512;let n=t.getContext(`2d`);n.clearRect(0,0,256,512);let r=e%2==0?1:-1;n.fillStyle=`rgba(30,44,35,.76)`,n.beginPath(),n.moveTo(128,48),n.bezierCurveTo(101,54,92,84,96,116),n.bezierCurveTo(70,137,55,230,58,335),n.bezierCurveTo(60,395,79+r*8,430,105,445),n.lineTo(151,445),n.bezierCurveTo(180-r*7,423,195,380,199,335),n.bezierCurveTo(205,236,188,137,160,116),n.bezierCurveTo(163,83,154,54,128,48),n.fill(),n.fillStyle=`rgba(30,44,35,.84)`,n.beginPath(),n.ellipse(128,47,22,27,0,0,Math.PI*2),n.fill(),n.strokeStyle=`rgba(163,201,176,.24)`,n.lineWidth=2;for(let e=0;e<4;e++)n.beginPath(),n.moveTo(115+e*6,120),n.bezierCurveTo(88+e*4,220,95+e*5,330,78+e*8,432),n.stroke();return bd(t)}function Ad(){let[e,t]=yd(256),n=t.createRadialGradient(128,128,2,128,128,128);return n.addColorStop(0,`rgba(255,236,174,.95)`),n.addColorStop(.12,`rgba(255,206,113,.6)`),n.addColorStop(.4,`rgba(255,172,74,.18)`),n.addColorStop(1,`rgba(255,140,48,0)`),t.fillStyle=n,t.fillRect(0,0,256,256),bd(e)}var jd={low:{nx:190,nz:270},medium:{nx:280,nz:400},high:{nx:380,nz:540}},Md={bed:new G(`#364b40`),wetSand:new G(`#857e66`),sand:new G(`#a89b78`),meadow:new G(`#5e826c`),meadowWarm:new G(`#7b9274`),midGreen:new G(`#3d6b61`),blueGreen:new G(`#32616b`),rock:new G(`#5d6b63`),rockDark:new G(`#42514b`),path:new G(`#b9a57d`),pathDark:new G(`#8e7d5d`)};function Nd(e,t,n,r,i,a,o,s){let c=e.riverCenter(n),l=e.riverHalfWidth(n),u=Math.abs(t-c),d=Math.min(Math.abs(t-e.pathX(n,1)),Math.abs(t-e.pathX(n,-1))),f=Gu(r,-6,170);if(f<.05)s.copy(Md.bed).lerp(Md.wetSand,Ju(-5.4,.05,f)*.7);else if(f<.8)s.copy(Md.sand).lerp(Md.meadow,Ju(.08,.8,f)*.86);else{let e=Md.meadow.clone().lerp(Md.meadowWarm,a*.58),t=Md.midGreen.clone().lerp(Md.blueGreen,Ju(10,54,f)*.78),n=Ju(1.6,34,f);s.copy(e).lerp(t,n*.95),s.lerp(Md.blueGreen,Ju(38,105,f)*.78)}let p=Ju(.68,1.35,i);if(p>0){let e=Md.rock.clone().lerp(Md.rockDark,o*.6);s.lerp(e,p*.86)}if(d<5.4){let e=1-Ju(2,4.9,d),t=Md.path.clone().lerp(Md.pathDark,o*.32);s.lerp(t,e*.62)}let m=Ju(.1,.28,Math.abs(a-o));s.lerp(Md.blueGreen,m*Ju(25,90,f)*.2),s.offsetHSL((o-.5)*.015,(a-.5)*.04,(a-.5)*.055);let h=1-Ju(l+4,l+32,u);f>.8&&s.lerp(Md.sand,h*.18)}function Pd(e,t,n){let r=jd[t],i=r.nx,a=r.nz,o=new Float32Array(i*a*3),s=new Float32Array(i*a*3),c=new Float32Array(i*a),l=new Uint32Array((i-1)*(a-1)*6),u=new G,d=Z.xMax-Z.xMin,f=Z.zMax-Z.zMin,p=d/(i-1),m=f/(a-1),h=0;for(let t=0;t<a;t++){let n=Z.zMax-t/(a-1)*f;for(let t=0;t<i;t++){let r=Z.xMin+t/(i-1)*d,a=e.heightAt(r,n);o[h*3]=r,o[h*3+1]=a,o[h*3+2]=n,c[h]=a,h++}}for(let t=0;t<a;t++){let n=Z.zMax-t/(a-1)*f;for(let r=0;r<i;r++){let o=Z.xMin+r/(i-1)*d,l=t*i+r,f=c[l],h=c[t*i+Math.max(0,r-1)],g=c[t*i+Math.min(i-1,r+1)],_=c[Math.max(0,t-1)*i+r],v=c[Math.min(a-1,t+1)*i+r];Nd(e,o,n,f,Math.hypot((g-h)/(2*p),(v-_)/(2*m)),e.terrainTint(o,n),e.terrainTint(o+9.3,n-5.7),u),s[l*3]=u.r,s[l*3+1]=u.g,s[l*3+2]=u.b}}let g=0;for(let e=0;e<a-1;e++)for(let t=0;t<i-1;t++){let n=e*i+t,r=n+1,a=(e+1)*i+t,o=a+1;l[g++]=n,l[g++]=r,l[g++]=a,l[g++]=r,l[g++]=o,l[g++]=a}let _=new ur;_.setAttribute(`position`,new Xn(o,3)),_.setAttribute(`color`,new Xn(s,3)),_.setIndex(new Xn(l,1)),_.computeVertexNormals(),_.computeBoundingSphere();let v=new J({vertexColors:!0,roughness:.98,metalness:0,flatShading:!1,dithering:!0});v.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
         varying vec3 vTerrainWorld;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
         vTerrainWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
         varying vec3 vTerrainWorld;
         float qHash21(vec2 p) {
           p = fract(p * vec2(123.34, 456.21));
           p += dot(p, p + 45.32);
           return fract(p.x * p.y);
         }
         float qNoise(vec2 p) {
           vec2 i = floor(p);
           vec2 f = fract(p);
           f = f * f * (3.0 - 2.0 * f);
           float a = qHash21(i);
           float b = qHash21(i + vec2(1.0, 0.0));
           float c = qHash21(i + vec2(0.0, 1.0));
           float d = qHash21(i + vec2(1.0, 1.0));
           return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
         }`).replace(`#include <color_fragment>`,`#include <color_fragment>
         vec2 tp = vTerrainWorld.xz;
         float fibre = qNoise(tp * vec2(1.35, 0.42)) * 0.55 + qNoise(tp * 0.22) * 0.45;
         float wash = qNoise(tp * 0.09 + 3.7) * 0.6 + qNoise(tp * 0.012) * 0.4;
         float contour = smoothstep(0.39, 0.5, abs(fract(vTerrainWorld.y * 0.28 + wash * 0.25) - 0.5));
         float grain = qNoise(tp * vec2(5.1, 7.7));
         diffuseColor.rgb *= mix(vec3(0.93, 0.99, 0.94), vec3(1.05, 1.02, 0.955), fibre);
         diffuseColor.rgb *= 1.0 - contour * (0.028 + wash * 0.032);
         diffuseColor.rgb *= 0.98 + grain * 0.04;
         diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.88, 1.0, 0.96), wash * 0.24);
         diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.92, 0.99, 1.02), smoothstep(18.0, 100.0, vTerrainWorld.y) * 0.45);`)},v.customProgramCacheKey=()=>`qianli-terrain-v3`;let y=new q(_,v);y.receiveShadow=!0,y.castShadow=!1,y.name=`terrain`;let b=new cn;b.name=`paths`;let x=new J({map:wd(43,`#d6ccb4`),color:`#ffffff`,roughness:.95,metalness:0,vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});b.add(Id(e,Fd(e,1,4),1.72,x,.06)),b.add(Id(e,Fd(e,-1,4),1.55,x,.06));let S=[{z:590,siteX:e.sites.startPavilion.x,siteZ:e.sites.startPavilion.z,side:1,width:1.65},{z:Z.lanternZ,siteX:e.sites.lanternGlade.x,siteZ:e.sites.lanternGlade.z,side:-1,width:1.55},{z:Z.guqinZ,siteX:e.sites.guqin.x,siteZ:e.sites.guqin.z,side:-1,width:1.45},{z:Z.dockZ,siteX:e.sites.dock.x+3,siteZ:e.sites.dock.z,side:-1,width:1.4},{z:Z.bambooZ,siteX:e.sites.bamboo.x,siteZ:e.sites.bamboo.z,side:-1,width:1.5},{z:Z.overlookZ,siteX:e.sites.overlook.x,siteZ:e.sites.overlook.z,side:-1,width:1.8}];for(let t of S){let n=e.pathX(t.z,t.side),r=t.siteX-n,i=t.siteZ-t.z,a=new Qi([new U(n,0,t.z),new U(n+r*.35+(t.side===1?1.4:-1.2),0,t.z+i*.4),new U(t.siteX-r*.22,0,t.siteZ+1.1),new U(t.siteX,0,t.siteZ)]),o=[];for(let t=0;t<=20;t++){let n=a.getPoint(t/20),r=e.heightAt(n.x,n.z);r>.32&&o.push(new U(n.x,r,n.z))}o.length>2&&b.add(Ld(o,t.width,x,.065))}let C=[],w=new Nt,T=new ut,E=new U,D=new U,O=new class{s=321;next(){return this.s=Math.imul(this.s,1664525)+1013904223>>>0,this.s/4294967296}};for(let t of[1,-1]){let n=t===1?1.72:1.55;for(let r=Z.zMax-10;r>Z.zMin+10;r-=4.8){if(O.next()<.24)continue;let i=n+.1+O.next()*.32,a=e.pathX(r,t)+t*i,o=e.heightAt(a,r);if(o<.35)continue;let s=.45+O.next()*.7;E.set(a+(O.next()-.5)*.3,o+.035,r+(O.next()-.5)*1.3),T.setFromEuler(new Ut(0,O.next()*Math.PI,0)),D.set(s,s*.38,s*.72),w.compose(E,T,D),C.push(w.clone())}}if(C.length){let e=new ui(new oo(.32,0),new J({color:`#b7ad92`,roughness:1,flatShading:!0}),C.length);for(let t=0;t<C.length;t++)e.setMatrixAt(t,C[t]);e.instanceMatrix.needsUpdate=!0,e.receiveShadow=!0,b.add(e)}return b.traverse(e=>{e instanceof q&&(e.receiveShadow=!0,e.castShadow=!1)}),{mesh:y,pathGroup:b,material:v}}function Fd(e,t,n){let r=[];for(let i=e.pathZMax;i>=e.pathZMin;i-=n){let n=e.pathX(i,t),a=e.heightAt(n,i);r.push(new U(n,Math.max(.18,a),i))}return r}function Id(e,t,n,r,i){let a=[];for(let n=0;n<t.length;n++){let r=t[n],o=e.heightAt(r.x,r.z)+i;o>.2&&a.push(new U(r.x,o,r.z))}return Ld(a,n,r,0)}function Ld(e,t,n,r){let i=e.length;if(i<2)return new q(new ur,n);let a=new Float32Array(i*5*3),o=new Float32Array(i*5*2),s=new Float32Array(i*5*3),c=new Uint32Array((i-1)*4*6),l=new G(`#d5c29b`),u=new G(`#8e9472`),d=0;for(let n=0;n<i;n++){let c=e[n],f=e[Math.max(0,n-1)],p=e[Math.min(i-1,n+1)],m=new U(p.x-f.x,0,p.z-f.z);m.lengthSq()<1e-4&&m.set(0,0,1),m.normalize();let h=new U(-m.z,0,m.x);n>0&&(d+=c.distanceTo(e[n-1]));for(let e=0;e<5;e++){let i=e/4,f=(i-.5)*2*t,p=n*5+e,m=i%1*.05;a[p*3]=c.x+h.x*f,a[p*3+1]=c.y+r+Math.abs(i-.5)*.025+m,a[p*3+2]=c.z+h.z*f,o[p*2]=i,o[p*2+1]=d/4.5;let g=Math.abs(i-.5)*2,_=l.clone().lerp(u,Ju(.5,1,g)*.75);_.offsetHSL(0,0,Math.sin(d*.37+e*2.1)*.03),s[p*3]=_.r,s[p*3+1]=_.g,s[p*3+2]=_.b}}let f=0;for(let e=0;e<i-1;e++)for(let t=0;t<4;t++){let n=e*5+t,r=n+1,i=(e+1)*5+t,a=i+1;c[f++]=n,c[f++]=r,c[f++]=i,c[f++]=r,c[f++]=a,c[f++]=i}let p=new ur;return p.setAttribute(`position`,new Xn(a,3)),p.setAttribute(`uv`,new Xn(o,2)),p.setAttribute(`color`,new Xn(s,3)),p.setIndex(new Xn(c,1)),p.computeVertexNormals(),new q(p,n)}var Rd=`
  precision highp float;

  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vDepth;
  varying float vFogDepth;

  attribute float aDepth;

  uniform float uTime;

  void main() {
    vUv = uv;
    vec3 p = position;
    float ripple = sin(p.x * 0.42 + uTime * 0.75 + p.z * 0.18) * 0.055
                 + sin(p.z * 0.64 - uTime * 0.48 + p.x * 0.22) * 0.038;
    p.y += ripple * smoothstep(0.3, 2.8, aDepth);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vWorld = (modelMatrix * vec4(p, 1.0)).xyz;
    vDepth = aDepth;
    vFogDepth = -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`,zd=`
  precision highp float;

  varying vec2 vUv;
  varying vec3 vWorld;
  varying float vDepth;
  varying float vFogDepth;

  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uShallow;
  uniform vec3 uFoam;
  uniform vec3 uSkyColor;
  uniform vec3 uSunColor;
  uniform vec3 uSunDir;
  uniform vec3 uFogColor;
  uniform float uFogDensity;
  uniform vec3 uBoatPos;
  uniform float uBoatActive;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }
  float noise2(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.55;
    for (int i = 0; i < 3; i++) {
      v += a * noise2(p);
      p = p * 2.05 + 7.3;
      a *= 0.48;
    }
    return v;
  }

  void main() {
    if (vDepth < 0.015) discard;

    vec3 V = normalize(cameraPosition - vWorld);
    float w1 = sin(vWorld.x * 0.67 + uTime * 1.08 + vWorld.z * 0.22);
    float w2 = sin(vWorld.z * 1.31 - uTime * 0.8 + vWorld.x * 0.34);
    float w3 = sin((vWorld.x + vWorld.z) * 2.7 + uTime * 1.9);
    vec3 N = normalize(vec3(
      (w1 * 0.026 + w3 * 0.009),
      1.0,
      (w2 * 0.029 + w3 * 0.012)
    ));

    float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.6);
    float depthMix = smoothstep(0.0, 1.7, vDepth);
    vec3 base = mix(uShallow, uDeep, depthMix);

    // Long horizontal flow marks, like the wash of a wide brush.
    float flow = fbm(vec2(vWorld.x * 0.095 + uTime * 0.008, vWorld.z * 0.034 + uTime * 0.018));
    float streaks = smoothstep(0.48, 0.8, flow) * 0.16;
    base = mix(base, uSkyColor, streaks * 0.18);

    vec3 col = mix(base, uSkyColor * 0.7 + uShallow * 0.3, fresnel * 0.36);
    float sunGlint = pow(max(dot(reflect(-normalize(uSunDir), N), V), 0.0), 170.0);
    float broadGlint = pow(max(dot(reflect(-normalize(uSunDir), N), V), 0.0), 16.0);
    col += uSunColor * sunGlint * 1.3;
    col += uSunColor * broadGlint * 0.045;

    // Painterly whitecaps / reflected cloud streaks.
    vec2 flowUv = vec2(vWorld.x * 0.11, vWorld.z * 0.055 + uTime * 0.018);
    float cap = smoothstep(0.76, 0.94, fbm(flowUv + vec2(0.0, uTime * 0.008)));
    col = mix(col, uSkyColor * 0.9, cap * 0.12 * depthMix);

    // Shoreline foam and the soft meeting of water and bank.
    float shore = smoothstep(0.7, 0.04, vDepth);
    float foamNoise = fbm(vec2(vWorld.x * 0.7, vWorld.z * 0.23 + uTime * 0.045));
    float foam = shore * smoothstep(0.3, 0.8, foamNoise + (1.0 - vDepth) * 0.1);
    col = mix(col, uFoam, foam * 0.44);

    // Boat wake rings, projected on the river surface.
    float bd = length(vWorld.xz - uBoatPos.xz);
    float wake = sin(bd * 3.2 - uTime * 5.2) * exp(-bd * 0.25) * smoothstep(12.0, 0.0, bd) * uBoatActive;
    col += uFoam * pow(max(0.0, 0.35 + wake * 0.45), 3.0) * 0.1;

    // Subtle transparent fade at the shoreline.
    float alpha = smoothstep(0.015, 0.55, vDepth) * 0.94 + 0.06;

    float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
    col = mix(col, uFogColor, clamp(fogFactor, 0.0, 1.0));

    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Bd=class{mesh;material;uniforms;constructor(e){let t=e.world.zMax-3,n=e.world.zMin+3,r=Math.floor((t-n)/6)+1;if(r<2)throw Error(`River geometry invalid`);let i=new Float32Array(r*28*3),a=new Float32Array(r*28*2),o=new Float32Array(r*28),s=new Uint32Array((r-1)*27*6),c=0;for(let n=0;n<r;n++){let s=t-n*6,l=e.riverCenter(s),u=e.riverHalfWidth(s)+9.5;for(let t=0;t<28;t++){let d=t/27,f=l+(d*2-1)*u,p=Math.max(0,e.waterDepthAt(f,s));i[c*3]=f,i[c*3+1]=.035,i[c*3+2]=s,a[c*2]=d,a[c*2+1]=n/(r-1),o[c]=p,c++}}let l=0;for(let e=0;e<r-1;e++)for(let t=0;t<27;t++){let n=e*28+t,r=n+1,i=(e+1)*28+t,a=i+1;s[l++]=n,s[l++]=r,s[l++]=i,s[l++]=r,s[l++]=a,s[l++]=i}let u=new ur;u.setAttribute(`position`,new Xn(i,3)),u.setAttribute(`uv`,new Xn(a,2)),u.setAttribute(`aDepth`,new Xn(o,1)),u.setIndex(new Xn(s,1)),u.computeBoundingSphere(),this.uniforms={uTime:{value:0},uDeep:{value:new G(`#1b4345`)},uShallow:{value:new G(`#648c86`)},uFoam:{value:new G(`#e9e1c9`)},uSkyColor:{value:new G(`#d9decc`)},uSunColor:{value:new G(`#ffe3b3`)},uSunDir:{value:new U(-.32,.48,-.82).normalize()},uFogColor:{value:new G(`#bcc8b9`)},uFogDensity:{value:.00195},uBoatPos:{value:new U(0,0,0)},uBoatActive:{value:0}},this.material=new xo({uniforms:this.uniforms,vertexShader:Rd,fragmentShader:zd,transparent:!0,depthWrite:!1,side:2,toneMapped:!0,fog:!1}),this.mesh=new q(u,this.material),this.mesh.renderOrder=2,this.mesh.name=`river-water`}update(e,t,n,r,i,a){this.uniforms.uTime.value=e,this.uniforms.uDeep.value.copy(n.waterDeep),this.uniforms.uShallow.value.copy(n.waterShallow),this.uniforms.uFoam.value.copy(n.waterFoam),this.uniforms.uSunColor.value.copy(n.sunColor),this.uniforms.uSunDir.value.copy(n.sunDir),this.uniforms.uSkyColor.value.copy(n.skyHaze).lerp(n.cloudColor,.12),this.uniforms.uFogColor.value.copy(n.fogColor),this.uniforms.uFogDensity.value=r,this.uniforms.uBoatPos.value.copy(i),this.uniforms.uBoatActive.value=a,this.uniforms.uSunColor.value.multiplyScalar(Gu(n.sunIntensity/2,.35,1.25))}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}},Vd=`
  varying vec3 vSkyDir;
  void main() {
    vSkyDir = normalize(position);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
  }
`,Hd=`
  precision highp float;

  varying vec3 vSkyDir;

  uniform vec3 uZenith;
  uniform vec3 uHorizon;
  uniform vec3 uHaze;
  uniform vec3 uCloudColor;
  uniform vec3 uCloudShadow;
  uniform vec3 uSunColor;
  uniform vec3 uSunDir;
  uniform vec3 uMountainFar;
  uniform vec3 uMountainMid;
  uniform vec3 uMountainNear;
  uniform vec3 uWaterGlow;
  uniform float uTime;
  uniform float uSunStrength;
  uniform float uMist;
  uniform float uCloudCover;
  uniform float uGrain;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise2(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash21(i);
    float b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0));
    float d = hash21(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
    for (int i = 0; i < 4; i++) {
      v += a * noise2(p);
      p = rot * p * 2.03 + 11.7;
      a *= 0.5;
    }
    return v;
  }

  float ridged(vec2 p) {
    float v = 0.0;
    float a = 0.55;
    for (int i = 0; i < 3; i++) {
      float n = noise2(p);
      n = 1.0 - abs(n * 2.0 - 1.0);
      v += a * n * n;
      p = p * 2.17 + 8.3;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 dir = normalize(vSkyDir);
    float height = dir.y;
    float azimuth = atan(dir.z, dir.x);
    vec2 ring = vec2(cos(azimuth), sin(azimuth));

    vec3 color = mix(uHorizon, uZenith, pow(clamp(height, 0.0, 1.0), 0.52));
    float glowBand = pow(max(0.0, 1.0 - abs(height) * 2.2), 4.0);
    color += uWaterGlow * glowBand * 0.035;

    // Ground haze below the horizon; mostly occluded by terrain but keeps gaps soft.
    vec3 below = mix(uHaze, uHaze * 0.66, smoothstep(0.0, -0.5, height));
    color = mix(below, color, smoothstep(-0.07, 0.025, height));

    vec3 sunDir = normalize(uSunDir);
    float sunDot = max(dot(dir, sunDir), 0.0);
    color += uSunColor * pow(sunDot, 900.0) * 2.4 * uSunStrength;
    color += uSunColor * pow(sunDot, 20.0) * 0.22 * uSunStrength;
    color += uSunColor * pow(sunDot, 4.0) * 0.055 * uSunStrength;

    // Painted cloud banks: a shallow band around the horizon, plus high wisps.
    float cloudAz = azimuth;
    vec2 cuv = vec2(cloudAz * 2.1, height * 4.8);
    float drift = uTime * 0.0045;
    float warp = fbm(cuv * 0.46 + vec2(drift * 0.8, -drift * 0.3));
    float cloud = fbm(cuv * 1.12 + warp * 0.6 + vec2(drift, drift * 0.22));
    cloud = smoothstep(0.48 - uCloudCover * 0.1, 0.79, cloud);
    float lowBand = smoothstep(0.005, 0.09, height) * (1.0 - smoothstep(0.3, 0.58, height) * 0.7);
    float highWisp = smoothstep(0.62, 0.84, height) * (1.0 - smoothstep(0.94, 1.0, height));
    cloud *= max(lowBand * 0.9, highWisp * 0.25);
    vec3 cloudLit = mix(uCloudShadow, uCloudColor, smoothstep(0.4, 0.84, cloud));
    cloudLit += uSunColor * pow(sunDot, 6.0) * 0.14 * uSunStrength;
    color = mix(color, cloudLit, cloud * 0.52);

    // Three ridgelines, far to near.
    float farA = fbm(ring * 1.85 + vec2(5.1, -2.3));
    float farB = ridged(ring * 3.55 + vec2(-1.7, 6.4));
    float farLine = 0.06 + 0.155 * farA + 0.07 * farB;
    float midA = fbm(ring * 3.15 + vec2(1.8, 9.6));
    float midB = ridged(ring * 5.9 + vec2(4.4, -5.1));
    float midLine = 0.03 + 0.092 * midA + 0.047 * midB;
    float nearA = fbm(ring * 4.8 + vec2(-6.2, 2.8));
    float nearB = ridged(ring * 8.2 + vec2(3.3, 1.2));
    float nearLine = 0.012 + 0.055 * nearA + 0.032 * nearB;

    float farMask = smoothstep(farLine + 0.0022, farLine - 0.0014, height);
    float midMask = smoothstep(midLine + 0.0019, midLine - 0.0011, height);
    float nearMask = smoothstep(nearLine + 0.0016, nearLine - 0.0008, height);
    float belowHorizon = smoothstep(0.0, 0.02, height + 0.16);

    vec3 farCol = mix(uMountainFar, uHaze, smoothstep(farLine, 0.0, height) * 0.46);
    vec3 midCol = mix(uMountainMid, uHaze, smoothstep(midLine, 0.005, height) * 0.35);
    vec3 nearCol = mix(uMountainNear, uMountainMid, smoothstep(nearLine, 0.0, height) * 0.25);

    color = mix(color, farCol, farMask * 0.72 * belowHorizon);
    color = mix(color, midCol, midMask * 0.84 * belowHorizon);
    color = mix(color, nearCol, nearMask * 0.92 * belowHorizon);

    // Ink ridge highlights.
    float inkFar = smoothstep(0.0025, 0.0, abs(height - farLine)) * farMask;
    float inkMid = smoothstep(0.0021, 0.0, abs(height - midLine)) * midMask;
    float inkNear = smoothstep(0.0017, 0.0, abs(height - nearLine)) * nearMask;
    color *= 1.0 - (inkFar * 0.11 + inkMid * 0.09 + inkNear * 0.07);

    // Cloud sea gathering at mountain feet and along the river.
    float mistNoise = fbm(ring * 5.7 + vec2(azimuth * 0.35, uTime * 0.008));
    float mistBand = smoothstep(0.046, 0.0, abs(height - 0.028)) * (0.35 + mistNoise * 0.8);
    color = mix(color, uHaze, clamp(mistBand * uMist * 0.32, 0.0, 0.42));

    // A silk-like tonal wash and faint fibre grain.
    float paper = noise2(gl_FragCoord.xy * 0.36) * 0.5 + noise2(gl_FragCoord.xy * 1.27) * 0.5;
    color *= 0.985 + (paper - 0.5) * 0.045 * uGrain;
    color = mix(color, color * vec3(1.015, 0.995, 0.96), 0.25);

    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Ud=class{mesh;material;uniforms;tmpFar=new G;tmpMid=new G;tmpNear=new G;tmpInk=new G(`#1c2f2c`);constructor(e){this.uniforms={uZenith:{value:new G(`#709ba2`)},uHorizon:{value:new G(`#e5dac1`)},uHaze:{value:new G(`#c6cbb8`)},uCloudColor:{value:new G(`#f5ecd8`)},uCloudShadow:{value:new G(`#c2c6b8`)},uSunColor:{value:new G(`#ffe3b3`)},uSunDir:{value:new U(-.32,.48,-.82).normalize()},uMountainFar:{value:new G(`#8ca5a2`)},uMountainMid:{value:new G(`#5d7f78`)},uMountainNear:{value:new G(`#3f635d`)},uWaterGlow:{value:new G(`#c7d8c8`)},uTime:{value:0},uSunStrength:{value:1},uMist:{value:.3},uCloudCover:{value:.5},uGrain:{value:.65}},this.material=new xo({uniforms:this.uniforms,vertexShader:Vd,fragmentShader:Hd,side:1,depthWrite:!1,fog:!1,toneMapped:!0}),this.mesh=new q(new lo(3600,64,40),this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.mesh.name=`sky-dome`,e.add(this.mesh)}applyLook(e){this.uniforms.uZenith.value.copy(e.skyZenith),this.uniforms.uHorizon.value.copy(e.skyHorizon),this.uniforms.uHaze.value.copy(e.skyHaze),this.uniforms.uCloudColor.value.copy(e.cloudColor),this.uniforms.uCloudShadow.value.copy(e.cloudShadow),this.uniforms.uSunColor.value.copy(e.sunColor),this.uniforms.uSunDir.value.copy(e.sunDir),this.uniforms.uWaterGlow.value.copy(e.waterGlow),this.uniforms.uSunStrength.value=e.sunStrength,this.uniforms.uMist.value=e.mist,this.uniforms.uCloudCover.value=e.cloudCover,this.uniforms.uGrain.value=e.grain,this.tmpFar.copy(e.skyZenith).lerp(e.skyHaze,.42),this.tmpFar.offsetHSL(0,-.02,-.08),this.tmpMid.copy(e.skyZenith).lerp(this.tmpInk,.48).lerp(e.skyHaze,.08),this.tmpNear.copy(e.skyZenith).lerp(this.tmpInk,.78).lerp(e.fogColor,.04),this.uniforms.uMountainFar.value.copy(this.tmpFar),this.uniforms.uMountainMid.value.copy(this.tmpMid),this.uniforms.uMountainNear.value.copy(this.tmpNear)}update(e,t){this.mesh.position.copy(e.position),this.uniforms.uTime.value=t}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}};function Wd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new ur,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Gd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Gd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Gd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Xn(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Kd(e,t,n,r=1){e.onBeforeCompile=i=>{i.uniforms.uTime={value:0},i.vertexShader=i.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec3 iOrigin = vec3(instanceMatrix[3].x, instanceMatrix[3].y, instanceMatrix[3].z);
          float phase = iOrigin.x * 0.27 + iOrigin.z * 0.19;
          float sway = smoothstep(0.0, ${n.toFixed(2)}, position.y);
          transformed.x += sin(uTime * ${(.8*r).toFixed(2)} + phase) * sway * ${t.toFixed(3)};
          transformed.z += cos(uTime * ${(.63*r).toFixed(2)} + phase * 1.31) * sway * ${(t*.58).toFixed(3)};
        #endif`),e.userData.shader=i},e.customProgramCacheKey=()=>`qianli-wind-${t}-${n}-${r}`}function qd(){let e=new zi(.1,.22,5.1,5,1);e.translate(0,2.55,0);let t=[];for(let[e,n,r,i]of[[1.5,2.35,.28,.36],[1.72,3.05,-.2,.4],[1.56,3.72,.12,.36],[1.28,4.32,-.16,.32],[.94,4.88,.1,.28],[.58,5.42,.02,.23],[.3,5.86,.05,.2]]){let a=new oo(e,0);a.scale(1,i,.92),a.rotateY(r*2.3),a.translate(r,n,e*.08),t.push(a)}let n=Wd(t,!1);return n.computeVertexNormals(),{trunk:e,canopy:n}}function Jd(){let e=new zi(.14,.32,3.7,5,1);e.translate(0,1.85,0);let t=[];for(let[e,n,r,i]of[[1.9,0,4.35,0],[1.25,1.25,3.9,.2],[1.1,-1,4.7,-.35],[.85,.1,3.15,.4],[1,.5,5.45,.1]]){let a=new oo(e,1);a.scale(1,.65,1),a.translate(n,r,i),t.push(a)}let n=Wd(t,!1);return n.computeVertexNormals(),{trunk:e,canopy:n}}function Yd(){let e=[],t=new Zu(491);for(let n=0;n<7;n++){let n=t.float(.65,1.45),r=t.float(.035,.085),i=t.float(-.22,.22),a=new ur,o=new Float32Array([-r,0,0,r,0,0,r*.6+i*.5,n*.62,i*.4,-r*.6+i*.5,n*.62,i*.4,i,n,i*1.4]);a.setAttribute(`position`,new Xn(o,3)),a.setIndex([0,1,2,0,2,3,3,2,4]),a.translate(t.float(-.38,.38),0,t.float(-.38,.38)),a.computeVertexNormals(),e.push(a)}return Wd(e,!1)}function Xd(){let e=new ur,t=new Float32Array([-.045,0,0,.045,0,0,.035,.72,.12,-.032,.78,.1]);return e.setAttribute(`position`,new Xn(t,3)),e.setIndex([0,1,2,0,2,3]),e.computeVertexNormals(),e}function Zd(){let e=[];for(let t=0;t<5;t++){let n=new Ri(.16,5);n.translate(.16,.02,0),n.rotateX(-Math.PI/2),n.rotateY(t/5*Math.PI*2),e.push(n)}return Wd(e,!1)}function Qd(){let e=[],t=new Zu(772);for(let n=0;n<8;n++){let n=t.float(0,Math.PI*2),r=t.float(.28,.72),i=t.float(.022,.055),a=t.float(-.22,.22),o=new ur,s=new Float32Array([-i,0,0,i,0,0,i*.4+a*.5,r*.6,a*.42,-i*.4+a*.5,r*.6,a*.42,a,r,a*1.5]);o.setAttribute(`position`,new Xn(s,3)),o.setIndex([0,1,2,0,2,3,3,2,4]),o.translate(Math.cos(n)*t.float(.1,.32),0,Math.sin(n)*t.float(.1,.32)),o.computeVertexNormals(),e.push(o)}return Wd(e,!1)}function $d(){let e=[],t=new Zu(552);for(let n=0;n<5;n++){let n=new oo(t.float(.28,.55),0);n.scale(1.2,.75,1),n.translate(t.float(-.35,.35),t.float(.22,.6),t.float(-.35,.35)),e.push(n)}return Wd(e,!1)}function ef(e,t,n,r,i=`instances`,a=!1,o=!0){let s=new ui(e,t,n.length);s.name=i;let c=new Nt,l=new ut,u=new Ut,d=new U,f=new U;for(let e=0;e<n.length;e++){let t=n[e];u.set(t.tilt,t.rot,t.tilt*.7),l.setFromEuler(u),d.set(t.x,t.y-.04,t.z),f.set(t.scale,t.scale,t.scale),c.compose(d,l,f),s.setMatrixAt(e,c),r&&s.setColorAt(e,r[e])}return s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),s.castShadow=a,s.receiveShadow=o,s.instanceMatrix.setUsage(Ve),s.computeBoundingSphere(),s}function tf(e,t,n){let r=new cn;r.name=`vegetation`;let i=[],a=new Zu(73917),o=n&&t!==`low`,s=(t,n,r)=>Math.abs(t-e.pathX(n,1))>r&&Math.abs(t-e.pathX(n,-1))>r,c=(t,n,r=0)=>{for(let i of Object.keys(e.sites)){if(i===`spawn`||i===`bridgeCenter`)continue;let a=e.sites[i];if(Math.hypot(t-a.x,n-a.z)<a.radius*.55+1.4+r)return!1}return!(e.isOnBridge(t,n,7)||Math.hypot(t-e.sites.bridgeCenter.x,n-e.sites.bridgeCenter.z)<15)},l=()=>{let t=a.float(Z.xMin+30,Z.xMax-30),n=a.float(Z.zMin+30,Z.zMax-30),r=e.heightAt(t,n);return r<.8||r>150||e.slopeAt(t,n)>1.25||e.isWater(t,n)?null:{x:t,z:n,y:r,h:r}},u=[],d=qd(),f=e=>a.float(.7,1.35)*(e>400?1.05:1);for(let t=0;t<36;t++){let t=null;for(let e=0;e<30&&!t;e++){let e=l();e&&s(e.x,e.z,8.2)&&c(e.x,e.z,2)&&(t=e)}if(!t)continue;let n=a.int(10,24);for(let r=0;r<n;r++){let n=a.float(0,Math.PI*2),r=Math.sqrt(a.float(0,1))*a.float(7,21),i=t.x+Math.cos(n)*r,o=t.z+Math.sin(n)*r,l=e.heightAt(i,o);if(l<.75||e.slopeAt(i,o)>1.45||!s(i,o,5.4)||!c(i,o,1.4)||e.isWater(i,o))continue;let d=f(o);u.push({x:i,z:o,y:l,rot:a.float(0,Math.PI*2),scale:d,tilt:a.float(-.035,.035),color:new G().setHSL(a.float(.29,.4),a.float(.24,.4),a.float(.28,.46))})}}for(let e=0;e<260;e++){let e=l();e&&s(e.x,e.z,7)&&c(e.x,e.z,2)&&u.push({x:e.x,z:e.z,y:e.y,rot:a.float(0,Math.PI*2),scale:f(e.z),tilt:a.float(-.03,.03),color:new G().setHSL(a.float(.31,.42),a.float(.24,.42),a.float(.27,.45))})}for(let t=720;t>-1e3;t-=15)for(let n of[-1,1]){if(a.chance(.34))continue;let r=e.pathX(t,n),i=n,o=r+(a.chance(.78)?i*a.float(6.5,17):-i*a.float(5.5,9)),l=e.heightAt(o,t);l<.7||e.isWater(o,t)||e.slopeAt(o,t)>1.1||s(o,t,4.2)&&c(o,t,1.2)&&u.push({x:o,z:t,y:l,rot:a.float(0,Math.PI*2),scale:a.float(.7,1.25),tilt:a.float(-.04,.04),color:new G().setHSL(a.float(.3,.42),a.float(.24,.44),a.float(.27,.46))})}for(let t of[{z:629,side:-1,off:6.2,scale:1.52},{z:615,side:1,off:7.4,scale:1.28},{z:566,side:1,off:5.8,scale:1.18},{z:548,side:-1,off:8.4,scale:1.34}]){let n=e.pathX(t.z,t.side)+t.side*t.off,r=e.heightAt(n,t.z);r<.6||e.isWater(n,t.z)||u.push({x:n,z:t.z,y:r,rot:a.float(0,Math.PI*2),scale:t.scale,tilt:a.float(-.03,.03),color:new G().setHSL(a.float(.31,.39),a.float(.27,.4),a.float(.3,.42))})}let p=new J({color:`#4d4435`,roughness:1,metalness:0,flatShading:!0}),m=new J({color:`#ffffff`,roughness:.9,metalness:0,flatShading:!0,side:2});Kd(m,.12,6.5),i.push(m);let h=ef(d.trunk,p,u,void 0,`pine-trunks`,o,!0),g=ef(d.canopy,m,u,u.map(e=>e.color),`pine-canopies`,o,!0);r.add(h,g);let _=[],v=Jd();for(let t=0;t<26;t++){let t=null;for(let e=0;e<25&&!t;e++){let e=l();e&&s(e.x,e.z,7.2)&&c(e.x,e.z,1.2)&&(t=e)}if(!t)continue;let n=a.int(6,15);for(let r=0;r<n;r++){let n=a.float(0,Math.PI*2),r=Math.sqrt(a.float(0,1))*14,i=t.x+Math.cos(n)*r,o=t.z+Math.sin(n)*r,l=e.heightAt(i,o);l<.9||e.isWater(i,o)||e.slopeAt(i,o)>1||s(i,o,5.2)&&c(i,o,1.2)&&_.push({x:i,z:o,y:l,rot:a.float(0,Math.PI*2),scale:a.float(.78,1.4),tilt:a.float(-.025,.025),color:new G().setHSL(a.float(.22,.36),a.float(.26,.48),a.float(.3,.46))})}}for(let t=730;t>-1e3;t-=23)for(let n of[-1,1]){if(a.chance(.58))continue;let r=e.pathX(t,n)+n*a.float(5.5,13),i=e.heightAt(r,t);i<.8||e.isWater(r,t)||e.slopeAt(r,t)>1||s(r,t,4.3)&&c(r,t,1.4)&&_.push({x:r,z:t,y:i,rot:a.float(0,Math.PI*2),scale:a.float(.68,1.12),tilt:a.float(-.03,.03),color:new G().setHSL(a.float(.21,.35),a.float(.28,.5),a.float(.3,.48))})}for(let t=0;t<160;t++){let t=l();t&&s(t.x,t.z,6)&&c(t.x,t.z,1.5)&&(Math.abs(t.x-e.riverCenter(t.z))>e.riverHalfWidth(t.z)+140&&a.chance(.5)||_.push({x:t.x,z:t.z,y:t.y,rot:a.float(0,Math.PI*2),scale:a.float(.85,1.5),tilt:a.float(-.02,.02),color:new G().setHSL(a.float(.2,.35),a.float(.27,.48),a.float(.3,.47))}))}let y=p.clone(),b=new J({color:`#ffffff`,roughness:.94,metalness:0,flatShading:!0,side:2});Kd(b,.15,6.2,.85),i.push(b),r.add(ef(v.trunk,y,_,void 0,`broad-trunks`,o,!0),ef(v.canopy,b,_,_.map(e=>e.color),`broad-canopies`,o,!0));let x=[],S=[],C=[],w=e.sites.bamboo,T=(e,t,n,r)=>{x.push({x:e,z:t,y:n,rot:a.float(0,Math.PI*2),scale:r,tilt:a.float(-.025,.025),color:new G().setHSL(a.float(.2,.28),a.float(.3,.5),a.float(.3,.46))});let i=a.int(5,11);for(let o=0;o<i;o++){let i=a.float(0,Math.PI*2),o=a.float(.15,1.25),s=n+r*a.float(3.9,7.4);S.push({x:e+Math.cos(i)*o,z:t+Math.sin(i)*o,y:s,rot:i+a.float(-.6,.6),scale:a.float(.6,1.25),tilt:a.float(-.8,.3),color:new G().setHSL(a.float(.19,.28),a.float(.3,.52),a.float(.36,.53))}),C.push(S[S.length-1].color)}};for(let t=0;t<300;t++){let t=a.float(0,Math.PI*2),n=Math.sqrt(a.float(0,1))*25,r=w.x+Math.cos(t)*n,i=w.z+Math.sin(t)*n;if(Math.hypot(r-w.x,i-w.z)<4.2)continue;let o=e.heightAt(r,i);o<.8||e.isWater(r,i)||T(r,i,o,a.float(.72,1.18))}let E={x:e.pathX(-560,-1)-12,z:-560};for(let t=0;t<90;t++){let t=a.float(0,Math.PI*2),n=Math.sqrt(a.float(0,1))*13,r=E.x+Math.cos(t)*n,i=E.z+Math.sin(t)*n,o=e.heightAt(r,i);o<.8||e.isWater(r,i)||T(r,i,o,a.float(.7,1.06))}let D=new zi(.045,.075,7.6,5,1);D.translate(0,3.8,0);let O=new J({color:`#ffffff`,roughness:.85,metalness:0,side:2});Kd(O,.22,7.7,1.1),i.push(O);let k=ef(D,O,x,x.map(e=>e.color),`bamboo-stalks`,o,!0);r.add(k);let A=Xd(),ee=new J({color:`#ffffff`,roughness:.8,metalness:0,side:2});Kd(ee,.24,8,1.1),i.push(ee),r.add(ef(A,ee,S,C,`bamboo-leaves`,!1,!0));let j=[];for(let t=0;t<1100&&j.length<520;t++){let t=a.float(Z.zMin+40,Z.zMax-40),n=a.sign(),r=e.riverCenter(t)+n*(e.riverHalfWidth(t)+a.float(-3,8)),i=e.heightAt(r,t);i<-.5||i>1.35||e.isOnBridge(r,t,4)||s(r,t,3.2)&&j.push({x:r,z:t,y:Math.max(.03,i),rot:a.float(0,Math.PI*2),scale:a.float(.65,1.55),tilt:a.float(-.1,.1),color:new G().setHSL(a.float(.18,.3),a.float(.18,.38),a.float(.28,.5))})}let te=Yd(),M=new J({color:`#ffffff`,roughness:.92,side:2,transparent:!0,alphaTest:.2});Kd(M,.2,1.3,1.4),i.push(M),r.add(ef(te,M,j,j.map(e=>e.color),`reeds`,!1,!0));let N=[];for(let t=0;t<400&&N.length<120;t++){let t=a.float(-720,80),n=e.riverCenter(t),r=e.riverHalfWidth(t),i=n+a.float(-r*.78,r*.78);e.waterDepthAt(i,t)<.35||e.isOnBridge(i,t,2)||N.push({x:i,z:t,y:.06,rot:a.float(0,Math.PI*2),scale:a.float(.3,.95),tilt:0,color:new G().setHSL(a.float(.22,.33),a.float(.2,.4),a.float(.24,.38))})}let P=new Ri(1,12);P.rotateX(-Math.PI/2);let ne=new J({color:`#ffffff`,roughness:.9,side:2});r.add(ef(P,ne,N,N.map(e=>e.color),`lotus-pads`,!1,!1));let re=[];for(let t=0;t<1100&&re.length<360;t++){let t=a.float(Z.zMin+40,Z.zMax-40),n=a.chance(.5)?1:-1,r=e.pathX(t,n)+n*a.float(3.2,24),i=e.heightAt(r,t);i<.55||e.isWater(r,t)||e.slopeAt(r,t)>.8||c(r,t,2)&&re.push({x:r,z:t,y:i+.28,rot:a.float(0,Math.PI*2),scale:a.float(.55,1.35),tilt:a.float(-.2,.2),color:new G().setHSL(a.chance(.42)?.1:a.chance(.4)?.52:.21,a.float(.32,.6),a.float(.58,.78))})}let ie=Zd(),ae=new J({color:`#ffffff`,roughness:.9,side:2});r.add(ef(ie,ae,re,re.map(e=>e.color),`wildflowers`,!1,!1));let oe=[];for(let t=0;t<500&&oe.length<150;t++){let t=a.float(Z.zMin+50,Z.zMax-50),n=a.sign(),r=e.riverCenter(t),i=e.riverHalfWidth(t),o=a.chance(.28),l=r+n*(i+a.float(o?-5:2,o?28:52)),u=e.heightAt(l,t);u<-.8||u>8.5||e.isOnBridge(l,t,5)||s(l,t,2.6)&&c(l,t,1)&&oe.push({x:l,z:t,y:Math.max(u+.1,-.1),rot:a.float(0,Math.PI*2),scale:a.float(.35,1.12),tilt:a.float(-.5,.5),color:new G().setHSL(a.float(.19,.28),a.float(.06,.17),a.float(.35,.55))})}let se=new oo(1,1),ce=se.getAttribute(`position`);for(let e=0;e<ce.count;e++){let t=ce.getX(e),n=ce.getY(e),r=ce.getZ(e),i=1+.18*Math.sin(t*4.3+n*7.1+r*3.2)+.09*Math.sin(t*11.1-r*8.7);ce.setXYZ(e,t*i,n*i*1.18,r*i)}se.computeVertexNormals();let F=ef(se,new J({map:wd(12,`#b8b5a4`),color:`#e6e2d3`,roughness:.98,metalness:0,flatShading:!0}),oe,oe.map(e=>e.color),`rocks`,o,!0);r.add(F);let I=[];for(let t=0;t<2400&&I.length<1500;t++){let t=a.float(Z.zMin+40,Z.zMax-40),n=a.chance(.5)?1:-1,r=e.pathX(t,n)+n*a.float(-6.5,26),i=e.heightAt(r,t);i<.55||i>18||e.isWater(r,t)||e.slopeAt(r,t)>1.3||Math.abs(r-e.pathX(t,1))<2.7||Math.abs(r-e.pathX(t,-1))<2.7||c(r,t,-2)&&I.push({x:r,z:t,y:i,rot:a.float(0,Math.PI*2),scale:a.float(.65,1.4),tilt:a.float(-.08,.08),color:new G().setHSL(a.float(.18,.31),a.float(.24,.48),a.float(.34,.54))})}for(let t=0;t<700;t++){let t=a.float(Z.zMin+40,Z.zMax-40),n=a.chance(.5)?1:-1,r=e.pathX(t,n)+n*a.float(2.1,8),i=e.heightAt(r,t);i<.55||e.isWater(r,t)||e.slopeAt(r,t)>1.2||I.push({x:r,z:t,y:i,rot:a.float(0,Math.PI*2),scale:a.float(.9,1.7),tilt:a.float(-.08,.08),color:new G().setHSL(a.float(.18,.3),a.float(.3,.52),a.float(.4,.6))})}let le=Qd(),ue=new J({color:`#ffffff`,roughness:.95,side:2});Kd(ue,.1,.8,1.35),i.push(ue),r.add(ef(le,ue,I,I.map(e=>e.color),`grass-tufts`,!1,!0));let de=[];for(let t=0;t<800&&de.length<340;t++){let t=a.float(Z.zMin+50,Z.zMax-50),n=a.chance(.5)?1:-1,r=e.pathX(t,n)+n*a.float(-11,35),i=e.heightAt(r,t);i<.7||i>28||e.isWater(r,t)||e.slopeAt(r,t)>1.25||s(r,t,3.4)&&c(r,t,.4)&&de.push({x:r,z:t,y:i,rot:a.float(0,Math.PI*2),scale:a.float(.65,1.6),tilt:a.float(-.05,.05),color:new G().setHSL(a.float(.19,.33),a.float(.26,.5),a.float(.26,.45))})}let fe=$d(),pe=new J({color:`#ffffff`,roughness:.92,flatShading:!0});return r.add(ef(fe,pe,de,de.map(e=>e.color),`shrubs`,!1,!0)),{group:r,windMaterials:i,update(e){for(let t of i){let n=t.userData.shader;n?.uniforms.uTime&&(n.uniforms.uTime.value=e)}}}}function nf(){let t=document.createElement(`canvas`);t.width=256,t.height=256;let n=t.getContext(`2d`);n.fillStyle=`#242724`,n.fillRect(0,0,256,256),n.strokeStyle=`rgba(121,110,84,.21)`,n.lineWidth=1;for(let e=0;e<256;e+=7)n.beginPath(),n.moveTo(0,e),n.lineTo(256,e),n.stroke();for(let e=0;e<256;e+=11)n.strokeStyle=`rgba(110,101,78,.13)`,n.beginPath(),n.moveTo(e,0),n.lineTo(e,256),n.stroke();for(let e=0;e<25;e++)n.strokeStyle=`rgba(190,173,132,.08)`,n.beginPath(),n.moveTo(0,Math.random()*256),n.bezierCurveTo(72,Math.random()*256,170,Math.random()*256,256,Math.random()*256),n.stroke();let r=new Ni(t);return r.wrapS=e,r.wrapT=e,r.repeat.set(1,2),r.colorSpace=Ie,r}function rf(){let e=6.6,t=1.25,n=[],r=[],i=[];for(let i=0;i<34;i++){let a=i/33,o=-6.6/2+a*e,s=Math.sin(Math.PI*a)**.46,c=t/2*(.24+.76*s),l=.42*Math.abs(a*2-1)**3.2;for(let e=0;e<14;e++){let t=e/13,i=t*Math.PI,s=Math.cos(i)*c,u=.42+l-.86*Math.sin(i)**.9;n.push(s,u,o),r.push(t,a)}}for(let e=0;e<33;e++)for(let t=0;t<13;t++){let n=e*14+t,r=n+1,a=(e+1)*14+t,o=a+1;i.push(n,a,r,r,a,o)}let a=n.length/3;for(let i=0;i<34;i++){let a=i/33,o=-6.6/2+a*e,s=t*.35*Math.sin(Math.PI*a)**.25;n.push(-s,.35,o,s,.35,o),r.push(0,a,1,a)}for(let e=0;e<33;e++){let t=a+e*2;i.push(t,t+2,t+1,t+1,t+2,t+3)}let o=new ur;return o.setAttribute(`position`,new K(n,3)),o.setAttribute(`uv`,new K(r,2)),o.setIndex(i),o.computeVertexNormals(),o}function af(){let e=.82,t=[],n=[],r=[];for(let r=0;r<18;r++){let i=r/17,a=.15+i*1.9,o=.88+.12*Math.sin(Math.PI*i);for(let r=0;r<10;r++){let s=r/9,c=s*Math.PI;t.push(Math.cos(c)*e*o,.91+Math.sin(c)*e*.84,a),n.push(s,i*2)}}for(let e=0;e<17;e++)for(let t=0;t<9;t++){let n=e*10+t,i=n+1,a=(e+1)*10+t,o=a+1;r.push(n,i,a,i,o,a)}let i=new ur;return i.setAttribute(`position`,new K(t,3)),i.setAttribute(`uv`,new K(n,2)),i.setIndex(r),i.computeVertexNormals(),i}function of(){let e=[],t=6.3;for(let n of[-1,1]){for(let r=0;r<18;r++){let i=r/17,a=-6.3/2+i*t,o=.62*(.24+.76*Math.sin(Math.PI*i)**.46),s=.42*Math.abs(i*2-1)**3.2,c=new zi(.017,.022,.2,4);c.translate(n*o,.5+s,a),e.push(c)}let r=new fo(new Qi(Array.from({length:15},(e,r)=>{let i=r/14,a=-6.3/2+i*t,o=.62*(.24+.76*Math.sin(Math.PI*i)**.46),s=.42*Math.abs(i*2-1)**3.2;return new U(n*o,.6+s,a)})),22,.022,4,!1);e.push(r)}return sf(e)}function sf(e){let t=new ur,n=[],r=[],i=[],a=[],o=0;for(let t of e){let e=t.getAttribute(`position`),s=t.getAttribute(`normal`),c=t.getAttribute(`uv`);for(let t=0;t<e.count;t++)n.push(e.getX(t),e.getY(t),e.getZ(t)),s&&r.push(s.getX(t),s.getY(t),s.getZ(t)),c&&i.push(c.getX(t),c.getY(t));if(t.index)for(let e=0;e<t.index.count;e++)a.push(t.index.getX(e)+o);else for(let t=0;t<e.count;t++)a.push(t+o);o+=e.count,t.dispose()}return t.setAttribute(`position`,new K(n,3)),r.length===n.length&&t.setAttribute(`normal`,new K(r,3)),i.length*3==n.length*2&&t.setAttribute(`uv`,new K(i,2)),t.setIndex(a),r.length||t.computeVertexNormals(),t}var cf=class{group;length=6.6;width=1.25;heading=0;position;speed=0;rowing=0;active=!1;oar;lanternLight;lanternMat;lanternGroup=null;bobPhase=Math.random()*Math.PI*2;woodMat;constructor(){this.group=new cn,this.group.name=`wupeng-boat`,this.position=new U(0,.18,0),this.woodMat=new J({map:Td(7),color:`#7b5b3e`,roughness:.9,metalness:0,side:2});let e=new q(rf(),this.woodMat);e.castShadow=!0,e.receiveShadow=!0,this.group.add(e);let t=new J({color:`#3e3226`,roughness:1,side:2}),n=new q(of(),t);n.castShadow=!0,this.group.add(n);let r=new q(af(),new J({map:nf(),color:`#b4a88d`,roughness:.96,metalness:0,side:2}));r.castShadow=!0,r.name=`boat-canopy`,this.group.add(r);let i=new J({color:`#66543b`,roughness:1});for(let e=0;e<4;e++){let t=new q(new uo(.82,.025,4,18,Math.PI),i);t.position.set(0,.91,.17+e*.6),t.rotation.z=0,this.group.add(t)}let a=new J({map:Td(10),color:`#9a7953`,roughness:.9});for(let e of[-.4,1.55]){let t=new q(new Li(1,.09,.28),a);t.position.set(0,.5,e),t.castShadow=!0,this.group.add(t)}this.oar=new cn;let o=new q(new zi(.025,.035,2.7,6),a);o.rotation.z=Math.PI*.38,o.position.set(.55,.78,2);let s=new q(new Li(.16,.02,.56),this.woodMat);s.position.set(1.22,.22,2.47),s.rotation.z=-.2,this.oar.add(o,s),this.group.add(this.oar);let c=new cn;this.lanternGroup=c;let l=new q(new zi(.025,.035,1.15,5),a);l.position.set(-.62,1.12,-2.7),c.add(l),this.lanternMat=new J({color:`#e2b978`,emissive:`#d38b43`,emissiveIntensity:1.1,roughness:.6});let u=new q(new lo(.1,10,8),this.lanternMat);u.scale.y=1.25,u.position.set(-.88,1.5,-2.92),c.add(u);let d=new Pr(new br({map:Ad(),color:`#ffd79a`,transparent:!0,opacity:.38,depthWrite:!1,blending:2}));d.scale.set(1,1,1),d.position.copy(u.position),c.add(d),this.lanternLight=new as(`#ffc17b`,3.2,7,2),this.lanternLight.position.copy(u.position),c.add(this.lanternLight),this.group.add(c);let f=new q(new Bi(.035,.3,5),new J({color:`#9f3d2d`,roughness:.8}));f.position.set(0,.74,-3.12),f.rotation.x=Math.PI,this.group.add(f),this.group.position.copy(this.position)}setPose(e,t,n){this.position.set(e,.18,t),this.heading=n,this.group.position.set(e,.18,t),this.group.rotation.y=n}getSeatWorld(e){return e.set(.18,1.34,-.55),this.group.localToWorld(e),e}getBowWorld(e=new U){return this.group.localToWorld(e.set(0,.4,-3.1)),e}update(e,t,n=0){this.rowing=Yu(this.rowing,Math.abs(n),3,t);let r=Math.sin(e*1.2+this.bobPhase)*.045+Math.sin(e*.53+this.bobPhase*1.7)*.025,i=Math.sin(e*.88+this.bobPhase)*.012+this.rowing*.018;this.group.position.y=.18+r,this.group.rotation.z=i,this.group.rotation.x=Math.sin(e*.61+this.bobPhase)*.008,this.group.rotation.y=this.heading,this.oar.rotation.x=Math.sin(e*(2.3+this.rowing*2.2))*(.1+this.rowing*.28),this.oar.rotation.z=Math.sin(e*(1.8+this.rowing*1.5))*.03,this.lanternMat.emissiveIntensity=.8+Math.sin(e*3.2)*.08,this.lanternLight.intensity=.55+Math.sin(e*2.7)*.05}setLantern(e){this.lanternLight.visible=e,this.lanternMat.emissiveIntensity=e?1.1:.05}setPassengerView(e){this.lanternGroup&&(this.lanternGroup.visible=!e)}dispose(){this.group.traverse(e=>{e instanceof q&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose())})}},lf=new U,uf=new U;function df(e,t,n,r,i=0,a=0,o=0){let s=new q(new Li(e,t,n),r);return s.position.set(i,a,o),s.castShadow=!0,s.receiveShadow=!0,s}function ff(e,t,n,r,i,a=0,o=0,s=0){let c=new q(new zi(e,t,n,r),i);return c.position.set(a,o,s),c.castShadow=!0,c.receiveShadow=!0,c}function pf(e,t,n,r,i=6){lf.subVectors(r,n);let a=lf.length(),o=new q(new zi(e,e*1.03,a,i),t);return uf.copy(n).addScaledVector(lf,.5),o.position.copy(uf),o.quaternion.setFromUnitVectors(new U(0,1,0),lf.normalize()),o.castShadow=!0,o.receiveShadow=!0,o}function mf(e,t,n,r,i,a,o,s){e.add(df(n*1.12,r*1.18,.08,s,i,a,o-.035));let c=new q(new so(n,r),new J({map:t,roughness:.72,metalness:.02}));c.position.set(i,a,o+.02),e.add(c)}function hf(e,t,n,r,i){let a=[],o=[],s=[],c=0;for(let l=0;l<e;l++){for(let s=0;s<=8;s++){let c=s/8,u=(l+c)/e*Math.PI*2+Math.PI/e,d=Math.abs(c*2-1)**7;for(let s=0;s<=9;s++){let f=s/9,p=(n+(t-n)*f)*(1+.065*f**5*(.25+d*.8)),m=r-r*f**1.62+i*f**5*d;a.push(Math.cos(u)*p,m,Math.sin(u)*p),o.push((l+c)/e*3.2,f*2.6)}}for(let e=0;e<8;e++)for(let t=0;t<9;t++){let n=c+e*10+t,r=n+9+1,i=n+1,a=r+1;s.push(n,i,r,r,i,a)}c+=90}let l=new ur;return l.setAttribute(`position`,new K(a,3)),l.setAttribute(`uv`,new K(o,2)),l.setIndex(s),l.computeVertexNormals(),l}var gf=class{stone=new J({map:wd(210),color:`#c4c1ad`,roughness:.96});stoneDark=new J({map:wd(211),color:`#767c70`,roughness:.98});redWood=new J({map:Td(64),color:`#955041`,roughness:.78,emissive:`#2a120d`,emissiveIntensity:.3});darkWood=new J({map:Td(65),color:`#5c4634`,roughness:.88,emissive:`#17120d`,emissiveIntensity:.24});wood=new J({map:Td(66),color:`#ad8a60`,roughness:.86});tile=new J({map:Ed(),color:`#70857c`,roughness:.85,side:2,emissive:`#1d2a25`,emissiveIntensity:.24});gold=new J({color:`#b28b51`,roughness:.33,metalness:.55});cushion=new J({color:`#7b4c3c`,roughness:.95});glowTexture=Od(`rgba(255,245,218,1)`,`rgba(255,225,167,0)`)};function _f(e,t){let n=new cn;n.name=`pavilion-${t.name}`,n.position.set(t.site.x,t.site.y,t.site.z);let r=Math.atan2(t.pathX-t.site.x,t.pathZ-t.site.z);n.rotation.y=r;let i=t.radius+1.6,a=.14,o=new q(new zi(i,i+.3,a,t.sides===4?4:16),e.stone);o.position.y=a/2,o.rotation.y=t.sides===4?Math.PI/4:0,o.receiveShadow=!0,n.add(o);let s=new q(new uo(i-.05,.07,4,40),e.stoneDark);s.rotation.x=Math.PI/2,s.position.y=.15000000000000002,n.add(s);for(let t=0;t<3;t++){let r=df(3.2-t*.22,.08,.65,e.stone,0,a-t*.035,i+.32+t*.56);r.castShadow=!1,n.add(r)}let c=t.radius*.72,l=[];if(t.sides===4)for(let e of[-1,1])for(let t of[-1,1])l.push({x:e*c,z:t*c});else for(let e=0;e<6;e++){let t=e/6*Math.PI*2+Math.PI/6;l.push({x:Math.cos(t)*c,z:Math.sin(t)*c})}let u=a+t.columnHeight-.16;for(let r of l)n.add(ff(.12,.15,t.columnHeight,8,e.redWood,r.x,a+t.columnHeight/2,r.z)),n.add(ff(.24,.27,.16,8,e.stoneDark,r.x,.22000000000000003,r.z));for(let t=0;t<l.length;t++){let r=l[t],i=l[(t+1)%l.length];if(n.add(pf(.085,e.redWood,new U(r.x,u,r.z),new U(i.x,u,i.z),5)),(r.z+i.z)*.5>c*.35)continue;let a=new U(r.x+(i.x-r.x)*.08,.79,r.z+(i.z-r.z)*.08),o=new U(i.x-(i.x-r.x)*.08,.79,i.z-(i.z-r.z)*.08);n.add(pf(.035,e.redWood,a,o,4)),n.add(pf(.045,e.redWood,a.clone().setY(.42000000000000004),o.clone().setY(.42000000000000004),4));for(let t=0;t<3;t++){let a=t/2;n.add(ff(.025,.035,.4,4,e.redWood,Ku(r.x,i.x,a),.5800000000000001,Ku(r.z,i.z,a)))}}let d=u+.2,f=new cn;f.position.y=d;let p=t.sides===4?1.36:1.18,m=new q(hf(t.sides,i*1.17,.5,p,.48),e.tile);m.castShadow=!0,m.receiveShadow=!0,f.add(m);for(let n=0;n<t.sides;n++){let r=n/t.sides*Math.PI*2,a=i*1.17;f.add(pf(.04,e.darkWood,new U(0,p,0),new U(Math.cos(r)*a,.48,Math.sin(r)*a),4))}let h=new cn;h.position.y=p,h.add(ff(.035,.04,.5,6,e.gold,0,.24,0)),h.add(new q(new lo(.12,10,8),e.gold)),f.add(h);let g=new q(new zi(i*1.1,i*1.12,.1,t.sides===4?8:12),new Vr({color:`#4b3c2b`,side:2,fog:!0}));g.position.y=-.1,f.add(g);let _=new q(new Ri(.6,20),new Vr({color:`#af8c57`,transparent:!0,opacity:.6,side:2}));_.rotation.x=Math.PI/2,_.position.y=-.18,f.add(_);let v=new cn;v.position.y=2.45;let y=new Pr(new br({map:e.glowTexture,color:`#ffcb86`,transparent:!0,opacity:.26,depthWrite:!1,blending:2}));y.scale.set(2.3,2.3,1),v.add(y);let b=new q(new lo(.14,10,8),new J({color:`#d3a566`,emissive:`#b77536`,emissiveIntensity:.9,roughness:.65}));b.scale.y=1.2,v.add(b);let x=new as(`#ffc078`,9,12,2);v.add(x),n.add(v),n.add(f);let S=d+p;if(t.doubleRoof){let r=ff(i*.53,i*.6,.5,8,e.redWood,0,d+p+.2,0);n.add(r);let a=new cn;a.position.y=d+p+.4;let o=new q(hf(t.sides,i*.72,.3,.78,.3),e.tile);o.castShadow=!0,a.add(o),a.add(ff(.03,.035,.38,6,e.gold,0,.9,0)),a.add(new q(new lo(.11,10,8),e.gold).translateY(1.1)),n.add(a),S=d+p+1.3}mf(n,Sd(t.name),2,.62,0,u-.34,i*.77,e.darkWood);for(let t of[-1,1]){let r=new cn;r.position.set(t*i*.72,u-.48,i*.78),r.add(ff(.006,.006,.48,3,e.darkWood,0,.24,0));let a=new q(new lo(.15,10,8),new J({color:`#a54633`,emissive:`#8c3525`,emissiveIntensity:.3,roughness:.72}));a.scale.y=1.35,a.position.y=-.18,a.castShadow=!0,r.add(a),r.add(ff(.01,.025,.18,4,e.redWood,0,-.43,0));let o=new Pr(new br({map:e.glowTexture,color:`#ffc47b`,transparent:!0,opacity:.12,depthWrite:!1,blending:2}));o.scale.set(1.1,1.1,1),o.position.y=-.18,r.add(o),n.add(r)}if(t.furniture===`table`){let t=df(2.2,.1,.9,e.wood,0,.84,-.2);n.add(t);for(let t of[-1,1])for(let r of[-1,1])n.add(df(.09,.7,.09,e.darkWood,t*.9,.49,-.2+r*.3));let r=new q(new so(1.3,.48),new J({map:xd(`山色有无中`,{width:512,height:200,fontSize:48,color:`#3b3f35`,background:`#e9dec5`,letterSpacing:3}),roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(0,.9,-.2),n.add(r)}if(t.furniture===`qin`){let t=df(2.35,.09,.72,e.wood,0,.67,-.1);n.add(t);for(let t of[-1,1])for(let r of[-1,1])n.add(df(.08,.53,.08,e.darkWood,t*.9,.41000000000000003,-.1+r*.24));let r=new cn;r.position.set(0,.75,-.1);let i=new q(new Li(1.72,.07,.34),new J({color:`#382b22`,roughness:.45,metalness:.04}));i.castShadow=!0,r.add(i);let a=new hi({color:`#d9c493`,transparent:!0,opacity:.8});for(let e=0;e<7;e++){let t=-.125+e*.042;r.add(new Ci(new ur().setFromPoints([new U(-.78,.05,t),new U(.78,.06,t+.003)]),a))}r.add(new q(new Ri(.1,12),new J({color:`#b49b61`,roughness:.4,metalness:.32})).rotateX(-Math.PI/2).translateX(-.42).translateY(.05)),n.add(r);for(let t of[-.72,.72])n.add(ff(.28,.3,.11,12,e.cushion,t,.21000000000000002,.75))}let C=new U(0,0,i+1.4);return n.localToWorld(C),n.traverse(e=>{e instanceof q&&(e.receiveShadow=!0,e.castShadow=e.castShadow!==!1)}),{group:n,front:C,topY:S,baseY:t.site.y}}var vf=class{root=new cn;mats=new gf;shape;seals=new Map;lanterns=[];scrolls=new Map;focusSprites=new Map;boat;ambientBoats=[];boatHome;qinPoint;chimePoint;altarPoint;bridgePoint;overlookPoint;startPoint;dockApproach;focusId=null;pavilions=new Map;chimeTubes=null;chimeSwing=0;qinNotes=[];litCount=0;egretWing=null;constructor(e,t=`high`){this.shape=e,this.root.name=`landmarks`;let n=e.sites,r=_f(this.mats,{name:`入画亭`,site:{x:n.startPavilion.x,y:n.startPavilion.y,z:n.startPavilion.z},sides:4,radius:4.1,columnHeight:3.15,doubleRoof:!0,pathX:e.pathX(n.startPavilion.z,1),pathZ:n.startPavilion.z,furniture:`table`});this.root.add(r.group),this.pavilions.set(`start`,r),this.startPoint=r.front.clone();let i=_f(this.mats,{name:`听琴亭`,site:{x:n.guqin.x,y:n.guqin.y,z:n.guqin.z},sides:6,radius:4.35,columnHeight:3.05,pathX:e.pathX(n.guqin.z,-1),pathZ:n.guqin.z,furniture:`qin`});this.root.add(i.group),this.pavilions.set(`guqin`,i),this.qinPoint=i.group.localToWorld(new U(0,.9,0)),this.buildBridge(),this.bridgePoint=new U(e.bridge.cx,e.bridgeDeckHeight(e.bridge.cx)+1.15,e.bridge.z),this.buildLanternGlade(),this.buildIslet(),this.buildDock(),this.buildChime(),this.buildOverlook(),this.boat=this.createBoatAtDock(),this.root.add(this.boat.group),this.boatHome=this.boat.position.clone(),this.dockApproach=new U(e.sites.dock.x,Math.max(.4,e.heightAt(e.sites.dock.x,e.sites.dock.z)),e.sites.dock.z),this.buildSeals(),this.buildScrolls(),this.buildFocusSprites(),this.buildStartSign(),this.buildDistantPagoda(),this.buildAmbientBoats(),this.revealSeal(`qing`,!0),this.revealSeal(`qiao`,!0),this.revealSeal(`zhou`,!0),this.overlookPoint=new U(e.sites.overlook.x,e.sites.overlook.y+1.3,e.sites.overlook.z),this.root.updateMatrixWorld(!0)}buildBridge(){let e=this.shape.bridge,t=new cn;t.name=`stone-bridge`,t.position.set(e.cx,0,e.z-e.halfWidth);let n=e.halfWidth*2,r=e.westEnd-e.cx,i=e.eastEnd-e.cx,a=new ya,o=t=>this.shape.bridgeDeckHeight(t+e.cx)-.25;a.moveTo(r,-1.8),a.lineTo(i,-1.8),a.lineTo(i,o(i));for(let e=63;e>=0;e--)a.lineTo(Ku(r,i,e/64),o(Ku(r,i,e/64)));a.closePath();let s=(e,t,n)=>{let r=new va;return r.moveTo(e-t,-.6),r.lineTo(e-t,n*.38),r.bezierCurveTo(e-t*.7,n*.86,e-t*.22,n,e,n),r.bezierCurveTo(e+t*.22,n,e+t*.7,n*.86,e+t,n*.38),r.lineTo(e+t,-.6),r.closePath(),r};a.holes.push(s(0,14.5,4.3)),a.holes.push(s(r+13,7.6,2.6)),a.holes.push(s(i-13,7.6,2.6));let c=new q(new ro(a,{depth:n,bevelEnabled:!1,curveSegments:8}),this.mats.stone);c.castShadow=!0,c.receiveShadow=!0,t.add(c);let l=[],u=[],d=[];for(let t=0;t<=64;t++){let r=Ku(e.westEnd,e.eastEnd,t/64),i=r-e.cx,a=this.shape.bridgeDeckHeight(r)+.045;for(let r=0;r<4;r++)l.push(i,a,-e.halfWidth+.35+r/3*(n-.7)),u.push(r/3,t/8)}for(let e=0;e<64;e++)for(let t=0;t<3;t++){let n=e*4+t,r=n+1,i=n+4,a=i+1;d.push(n,i,r,r,i,a)}let f=new ur;f.setAttribute(`position`,new K(l,3)),f.setAttribute(`uv`,new K(u,2)),f.setIndex(d),f.computeVertexNormals();let p=new q(f,this.mats.stone);p.receiveShadow=!0,t.add(p);let m=[];for(let t of[-1,1])for(let n=0;n<38;n++){let r=Ku(e.westEnd,e.eastEnd,n/37),i=r-e.cx,a=this.shape.bridgeDeckHeight(r),o=new Li(.16,1.02,.16);if(o.translate(i,a+.51,t*(e.halfWidth-.34)),m.push(o),n<37){let r=Ku(e.westEnd,e.eastEnd,(n+1)/37),o=this.shape.bridgeDeckHeight(r);for(let n of[.34,.82]){let s=new U(i,a+n,t*(e.halfWidth-.34)),c=new U(r-e.cx,o+n,t*(e.halfWidth-.34)),l=new Li(s.distanceTo(c),.075,.1),u=new Nt,d=new ut().setFromUnitVectors(new U(1,0,0),c.clone().sub(s).normalize());u.compose(s.clone().lerp(c,.5),d,new U(1,1,1)),l.applyMatrix4(u),m.push(l)}}}let h=new q(Wd(m,!1),this.mats.stoneDark);h.castShadow=!0,h.receiveShadow=!0,t.add(h);for(let n of[e.westEnd,e.eastEnd])for(let r of[-1,1]){let i=new q(new Hi(.23,0),this.mats.stoneDark);i.position.set(n-e.cx,this.shape.bridgeDeckHeight(n)+1.15,r*(e.halfWidth-.34)),i.castShadow=!0,t.add(i)}let g=new q(new so(2.2,.62),new J({map:Sd(`卧 虹`),roughness:.8}));g.position.set(0,2.75,n+.02),t.add(g),this.root.add(t)}buildLanternGlade(){let e=this.shape.sites.lanternGlade,t=new cn;t.name=`lantern-glade`,t.position.set(e.x,e.y,e.z),this.root.add(t);let n=new q(new zi(5.6,5.9,.11,16),this.mats.stone);n.position.y=.03,n.receiveShadow=!0,t.add(n);let r=new q(new zi(1,1.2,.4,8),this.mats.stoneDark);r.position.y=.22,r.castShadow=!0,r.receiveShadow=!0,t.add(r);let i=[[-2.7,2.1],[2.7,1.9],[0,-2.9]];for(let n=0;n<3;n++){let r=this.createLantern(n);r.group.position.set(i[n][0],.05,i[n][1]),r.position.set(e.x+i[n][0],e.y+1.1,e.z+i[n][1]),t.add(r.group),this.lanterns.push(r)}for(let[e,n,r]of[[-3.9,-.9,.25],[3.9,-.8,-.35]]){let i=df(1.55,.2,.42,this.mats.stone,e,.25,n);i.rotation.y=r,t.add(i)}}createLantern(e){let t=new cn;t.name=`stone-lantern-${e}`,t.add(ff(.44,.55,.2,8,this.mats.stoneDark,0,.1,0)),t.add(ff(.15,.21,1,8,this.mats.stone,0,.68,0)),t.add(ff(.36,.3,.13,8,this.mats.stoneDark,0,1.2,0)),t.add(df(.57,.58,.57,this.mats.stone,0,1.52,0));let n=this.mats.stoneDark.clone();n.map=null,n.color=new G(`#c7a56b`),n.emissive=new G(`#c37635`),n.emissiveIntensity=.01,n.transparent=!0,n.opacity=.5;for(let e of[[.29,0,Math.PI/2],[-.29,0,-Math.PI/2],[0,.29,0],[0,-.29,Math.PI]]){let r=new q(new so(.35,.4),n);r.position.set(e[0],1.52,e[1]),r.rotation.y=e[2],t.add(r)}let r=new q(new lo(.075,8,6),new Vr({color:`#ffd490`,transparent:!0,opacity:0}));r.position.y=1.51,t.add(r);let i=new q(new Bi(.57,.34,8),this.mats.stoneDark);i.position.y=1.98,i.castShadow=!0,t.add(i),t.add(ff(.045,.045,.25,5,this.mats.stoneDark,0,2.25,0));let a=new Pr(new br({map:Ad(),color:`#ffc26f`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));a.position.y=1.6,a.scale.set(2.3,2.3,1),t.add(a);let o=new as(`#ffbe73`,0,13,2);return o.position.y=1.58,t.add(o),{index:e,group:t,light:o,glass:n,flame:r,glow:a,lit:!1,position:new U}}buildIslet(){let e=this.shape.sites.islet,t=new cn;t.name=`river-islet`,t.position.set(e.x,0,e.z),this.root.add(t);for(let e of[{s:[4.6,1,3.9],p:[0,-.8,0],r:.4},{s:[3.4,1.15,3],p:[1.2,.05,-.4],r:1.2},{s:[2.5,.95,2],p:[-1.3,.35,.7],r:-.4},{s:[1.8,.6,1.6],p:[.1,.95,.2],r:2.1}]){let n=new q(new Hi(1,1),this.mats.stoneDark);n.scale.set(e.s[0],e.s[1],e.s[2]),n.position.set(e.p[0],e.p[1],e.p[2]),n.rotation.set(e.r,e.r*1.5,0),n.castShadow=!0,n.receiveShadow=!0,t.add(n)}let n=new q(new lo(2.2,14,8,0,Math.PI*2,0,Math.PI*.46),new J({color:`#5a7552`,roughness:1}));n.scale.set(1,.28,.82),n.position.y=1.03,t.add(n);let r=new J({color:`#355746`,roughness:.9,flatShading:!0});t.add(ff(.1,.18,2.1,5,this.mats.darkWood,-1.25,2,-.4));for(let e=0;e<3;e++){let n=new q(new Bi(1-e*.22,1.1,7),r);n.position.set(-1.25,2.85+e*.54,-.4),n.castShadow=!0,t.add(n)}let i=new cn;i.position.set(.8,1.34,.85);let a=new J({color:`#eee8d7`,roughness:.72}),o=new q(new lo(.27,10,7),a);o.scale.set(1.5,.72,.72),i.add(o);let s=new q(new zi(.055,.075,.62,6),a);s.position.set(-.28,.33,0),s.rotation.z=-.25,i.add(s);let c=new q(new lo(.105,8,6),a);c.position.set(-.36,.64,0),i.add(c);let l=new q(new Bi(.03,.22,5),new J({color:`#c3a06c`}));l.rotation.z=Math.PI/2,l.position.set(-.5,.64,0),i.add(l);let u=new q(new lo(.23,8,5),a);u.scale.set(1.2,.35,.8),u.position.set(.08,.1,.15),i.add(u),i.rotation.y=-.9,t.add(i),this.egretWing=u}buildDock(){let e=this.shape.sites.dock,t=Math.max(.58,this.shape.heightAt(e.x,e.z)-.1),n=new cn;n.name=`west-dock`,n.position.set(e.x,0,e.z),this.root.add(n);let r=new cn;r.position.y=.82,n.add(r);for(let e=0;e<10;e++)r.add(df(.82,.09,2.2,this.mats.wood,e*.83+.35,0,0));for(let e of[.9,4.1,7.3])for(let t of[-1,1])r.add(ff(.1,.13,2.4,6,this.mats.darkWood,e,-.9,t));r.add(ff(.06,.09,2,6,this.mats.darkWood,8,.4,1.1));let i=new q(new lo(.15,8,6),new J({color:`#caa56b`,emissive:`#b97534`,emissiveIntensity:1.05,roughness:.5}));i.scale.y=1.3,i.position.set(8,1.33,1.1),r.add(i);let a=new Pr(new br({map:Ad(),color:`#ffd18a`,transparent:!0,opacity:.4,depthWrite:!1,blending:2}));a.scale.set(1.8,1.8,1),a.position.copy(i.position),r.add(a);let o=df(.9,1.4,.09,this.mats.darkWood,0,1.25,1.35);o.rotation.y=.2,n.add(o);let s=new q(new so(.62,.9),new J({map:xd(`西渡`,{width:220,height:360,vertical:!0,fontSize:96,color:`#d5c297`,background:`rgba(0,0,0,0)`}),transparent:!0,roughness:1}));s.position.set(0,1.29,1.41),s.rotation.y=.2,n.add(s);let c=new q(new uo(.22,.034,4,16),this.mats.wood);c.rotation.x=Math.PI/2,c.position.set(2,.87,.55),n.add(c),n.add(ff(.23,.28,.36,8,this.mats.wood,5.7,.96,-.8));for(let e=0;e<3;e++)n.add(df(1.8,.1,.66,this.mats.stone,-.6,.1+e*.1,0));this.dockApproach=new U(e.x,t,e.z)}createBoatAtDock(){let e=new cf,t=Z.dockZ,n=this.shape.sites.dock.x;for(let e=0;e<80&&!(this.shape.waterDepthAt(n,t)>.9);e++)n+=.45;return n+=2,e.setPose(n,t,-.22),e.setLantern(!0),e}buildChime(){let e=this.shape.sites.bamboo,t=new cn;t.name=`bamboo-chime`,t.position.set(e.x,e.y,e.z),this.root.add(t);for(let e of[-1,1])t.add(ff(.08,.12,2.55,6,this.mats.darkWood,e,1.27,0));t.add(pf(.075,this.mats.darkWood,new U(-1.25,2.52,0),new U(1.25,2.52,0),6));let n=new cn,r=new J({color:`#90815f`,roughness:.36,metalness:.55});for(let e=0;e<5;e++){let t=new q(new zi(.035,.045,.72+e*.06,6,1,!0),r);t.position.set(-.4+e*.2,1.88+e*.03,0),t.castShadow=!0,n.add(t)}t.add(n),this.chimeTubes=n,t.add(df(1.7,.17,.38,this.mats.stone,2.6,.24,1)),t.add(df(.65,.48,.42,this.mats.stoneDark,2.6,.24,1)),this.chimePoint=new U(e.x,e.y+1,e.z+.8),this.addFocus(`chime`,t,new U(0,2.9,0),`#dfe6ce`,1.3)}buildOverlook(){let e=this.shape.sites.overlook,t=new cn;t.name=`overlook-terrace`,t.position.set(e.x,e.y,e.z),this.root.add(t);let n=new q(new zi(8.1,8.5,.2,12),this.mats.stone);n.position.y=.05,n.receiveShadow=!0,t.add(n);let r=new q(new zi(3,3,.045,24),new J({color:`#a99c80`,roughness:.92}));r.position.y=.17,t.add(r),t.add(df(2,.52,1.05,this.mats.stoneDark,0,.46,0)),t.add(df(2.35,.12,1.35,this.mats.stone,0,.77,0)),t.add(df(2.1,2.7,.26,this.mats.stoneDark,0,1.66,-2.25)),t.add(df(2.4,.24,.5,this.mats.stone,0,3.05,-2.25));let i=new q(new so(1.35,1.35),new J({map:xd(`千山一望`,{width:320,height:320,fontSize:78,color:`#dbccb0`,background:`rgba(0,0,0,0)`,letterSpacing:0}),transparent:!0,roughness:1}));i.position.set(0,1.7,-2.11),t.add(i);let a=[];for(let e=0;e<=13;e++){let t=Math.PI*-.08+e/13*Math.PI*1.18;a.push([Math.cos(t)*7.35,Math.sin(t)*7.35])}for(let e=0;e<a.length;e++){let[n,r]=a[e];if(t.add(df(.16,1,.16,this.mats.stoneDark,n,.55,r)),e<a.length-1){let[i,o]=a[e+1];t.add(pf(.05,this.mats.stoneDark,new U(n,.94,r),new U(i,.94,o),4)),t.add(pf(.03,this.mats.stoneDark,new U(n,.48,r),new U(i,.48,o),4))}}let o=new cn;o.position.set(0,0,3.4),o.rotation.y=.2;for(let e of[-2.45,2.45])o.add(ff(.15,.2,3.8,6,this.mats.redWood,e,1.9,0));o.add(df(5.9,.3,.34,this.mats.redWood,0,3.45,0)),o.add(df(5.1,.18,.28,this.mats.darkWood,0,3.76,0));for(let e of[-1,1]){let t=df(2.7,.12,.4,this.mats.tile,e*2.15,3.96,0);t.rotation.z=e*-.17,o.add(t)}o.add(new q(new so(2.25,.64),new J({map:Sd(`望 江`),roughness:.7})).translateZ(.22).translateY(3.17)),t.add(o);for(let e=0;e<5;e++)t.add(df(4.3,.11,.55,this.mats.stone,0,.02-e*.07,8.2+e*.5));this.addFocus(`altar`,t,new U(0,1.45,0),`#f0d19b`,1.15),this.altarPoint=new U(e.x,e.y+1,e.z)}buildSeals(){let e=this.shape.sites,t={qing:new U(e.startPavilion.x,e.startPavilion.y+1.45,e.startPavilion.z),qiao:new U(e.bridgeCenter.x,this.shape.bridgeDeckHeight(e.bridgeCenter.x)+1.25,e.bridgeCenter.z),deng:new U(e.lanternGlade.x,e.lanternGlade.y+1.35,e.lanternGlade.z),yin:new U(e.guqin.x,e.guqin.y+1.55,e.guqin.z+.1),zhou:new U(e.islet.x,2.95,e.islet.z),huang:new U(e.bamboo.x+1.25,e.bamboo.y+1.2,e.bamboo.z+.9),shan:new U(e.overlook.x,e.overlook.y+1.62,e.overlook.z)};for(let e of ad){let n=this.createSeal(e,t[e.id]);this.seals.set(e.id,n),this.root.add(n.group)}}createSeal(e,t){let n=new cn;n.name=`seal-${e.id}`,n.position.copy(t),n.visible=!1;let r=Cd(e.glyph),i=new q(new Li(.6,.7,.16),new J({color:`#c0ccb7`,roughness:.34,metalness:.03,emissive:new G(e.color),emissiveIntensity:.12,transparent:!0,opacity:.96}));i.castShadow=!0,n.add(i),n.add(new q(new Li(.68,.78,.1),new J({color:`#8e7955`,roughness:.42,metalness:.22})).translateZ(-.035));for(let e of[.083,-.083]){let t=new q(new so(.52,.6),new Vr({map:r,transparent:!0}));t.position.z=e,e<0&&(t.rotation.y=Math.PI),n.add(t)}let a=new Pr(new br({map:this.mats.glowTexture,color:e.color,transparent:!0,opacity:.6,depthWrite:!1,blending:2}));a.scale.set(2.15,2.15,1),n.add(a);let o=new q(new uo(.52,.014,4,32),new Vr({color:`#e2c58f`,transparent:!0,opacity:.5}));o.rotation.x=Math.PI/2,n.add(o);for(let t=0;t<3;t++){let r=new Pr(new br({map:Od(),color:e.color,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));r.scale.set(.1,.1,1),r.userData.orbit=t/3,n.add(r)}return{id:e.id,def:e,group:n,halo:a,ring:o,basePosition:t.clone(),visible:!1,collected:!1,revealT:0,collectT:0}}buildScrolls(){let e=this.shape.sites,t=[{def:od[0],x:e.startPavilion.x-4.6,z:e.startPavilion.z+4.8,yaw:-.25},{def:od[1],x:this.shape.bridge.eastEnd+3.6,z:this.shape.bridge.z+7,yaw:-1.2},{def:od[2],x:e.guqin.x+4,z:e.guqin.z+2.6,yaw:.7},{def:od[3],x:e.overlook.x+4.5,z:e.overlook.z+1.4,yaw:-.8}];for(let e of t){let t=Math.max(.25,this.shape.heightAt(e.x,e.z)),n=this.createScrollStand(e.def,e.x,t,e.z,e.yaw);this.scrolls.set(e.def.id,n),this.root.add(n.group)}}createScrollStand(e,t,n,r,i){let a=new cn;a.name=`scroll-${e.id}`,a.position.set(t,n,r),a.rotation.y=i,a.add(df(1.6,.09,.78,this.mats.wood,0,.78,0));for(let e of[-1,1])for(let t of[-1,1])a.add(df(.075,.78,.075,this.mats.darkWood,e*.64,.39,t*.26));let o=new q(new so(1.3,.48),new J({map:xd(e.title.replace(/\s/g,``),{width:512,height:190,fontSize:54,color:`#4e493a`,background:`#e8dcc2`,letterSpacing:3}),roughness:.92,side:2}));o.rotation.x=-Math.PI/2,o.position.y=.832,a.add(o);for(let e of[-1,1]){let t=ff(.032,.032,.55,6,this.mats.darkWood,e*.69,.85,0);t.rotation.x=Math.PI/2,a.add(t)}return a.add(new q(new so(.8,.26),new J({map:xd(e.location,{width:360,height:120,fontSize:38,color:`#d3c3a2`,background:`#4c4d3f`,letterSpacing:4}),roughness:.9})).translateY(1.1).translateZ(.41)),this.addFocus(`scroll-${e.id}`,a,new U(0,1.42,0),`#e7d3a5`,1.1),{id:e.id,def:e,group:a,position:new U(t,n+.8,r),read:!1}}buildStartSign(){let e=this.shape.sites.spawn,t=e.x+5.6,n=e.z-22,r=this.shape.heightAt(t,n),i=new cn;i.position.set(t,r,n),i.add(ff(.075,.11,2.1,6,this.mats.darkWood,0,1.05,0));let a=df(1.2,.72,.08,this.mats.wood,.14,1.7,0);a.rotation.z=-.05,i.add(a),i.add(new q(new so(1,.5),new J({map:xd(`入画`,{width:400,height:190,fontSize:105,color:`#342b20`,background:`rgba(0,0,0,0)`,letterSpacing:8}),transparent:!0,roughness:1})).translateX(.15).translateY(1.71).translateZ(.045)),this.root.add(i)}buildDistantPagoda(){let e=-700,t=this.shape.heightAt(330,e);if(t<8)return;let n=new cn;n.position.set(330,t,e);let r=new J({color:`#5b6c63`,roughness:.96,flatShading:!0}),i=new J({color:`#445651`,roughness:.97,flatShading:!0});n.add(df(8,1.2,8,r,0,.6,0));for(let e=0;e<5;e++){let t=6.7-e*1.05;n.add(df(t,2.2,t,r,0,2.2+e*2.1,0));let a=new q(new Bi(t*1.15,1.2,4),i);a.rotation.y=Math.PI/4,a.position.y=2.2+e*2.1+1.55,n.add(a)}n.add(ff(.1,.2,3.2,5,this.mats.gold,0,13.6,0)),n.traverse(e=>{e instanceof q&&(e.castShadow=!1,e.receiveShadow=!1)}),this.root.add(n)}buildAmbientBoats(){let e=new cf;e.setPose(this.shape.riverCenter(-560)-7,-560,Math.PI+.2),e.group.scale.setScalar(.9),e.setLantern(!0),this.root.add(e.group),this.ambientBoats.push(e);let t=new cf;t.setPose(this.shape.riverCenter(180)+8,180,.35),t.group.scale.setScalar(.72),t.setLantern(!1),this.root.add(t.group),this.ambientBoats.push(t)}addFocus(e,t,n,r,i){let a=new Pr(new br({map:Od(`rgba(255,247,224,1)`,`rgba(255,222,161,0)`),color:r,transparent:!0,opacity:.06,depthWrite:!1,blending:2}));return a.position.copy(n),a.scale.setScalar(i),t.add(a),this.focusSprites.set(e,{sprite:a,baseScale:i}),a}buildFocusSprites(){this.addFocus(`seal-qing`,this.seals.get(`qing`).group,new U(0,.4,0),`#cbe2c6`,1.5),this.addFocus(`qin`,this.pavilions.get(`guqin`).group,new U(0,1.4,0),`#d7e1bc`,1.35),this.addFocus(`guqin`,this.pavilions.get(`guqin`).group,new U(0,1.4,0),`#d7e1bc`,1.35),this.addFocus(`boat`,this.boat.group,new U(0,2,0),`#ffd19a`,1.25)}setFocus(e){this.focusId=e}revealSeal(e,t=!1){let n=this.seals.get(e);n&&!n.collected&&(n.visible=!0,n.group.visible=!0,n.revealT=+!!t)}collectSeal(e){let t=this.seals.get(e);t&&(t.collected=!0,t.collectT=0)}getSealMapPositions(){return ad.map(e=>{let t=this.seals.get(e.id)?.basePosition??new U;return{id:e.id,glyph:e.glyph,x:t.x,z:t.z}})}getBoatInteractPoint(){return this.boat.group.getWorldPosition(new U).add(new U(0,1.4,0))}isBoatAtDock(){return Math.hypot(this.boat.position.x-this.boatHome.x,this.boat.position.z-this.boatHome.z)<2.4}activateLantern(e){let t=this.lanterns[e];return!t||t.lit?!1:(t.lit=!0,this.litCount++,t.glass.emissiveIntensity=1.1,t.glass.opacity=.8,t.flame.material.opacity=.9,t.glow.material.opacity=.42,t.light.intensity=7,!0)}get litLanterns(){return this.litCount}markScrollRead(e){let t=this.scrolls.get(e);t&&(t.read=!0)}playGuqin(){for(let e=0;e<7;e++){let t=new Pr(new br({map:xd(e<4?`音`:`羽`,{width:96,height:96,fontSize:62,color:`rgba(240,226,192,.8)`,background:`rgba(0,0,0,0)`}),color:`#f0dfba`,transparent:!0,opacity:.75,depthWrite:!1,blending:2}));t.position.copy(this.qinPoint).add(new U((e-3)*.16,.15,0)),t.scale.setScalar(.34+e*.02),this.root.add(t),this.qinNotes.push({sprite:t,velocity:new U((e-3)*.06,.35+e*.018,-.06+e%2*.05),life:1})}}ringChime(){this.chimeSwing=1}update(e,t,n){for(let n of this.seals.values()){if(!n.visible&&!n.collected){n.group.visible=!1;continue}if(n.collected){n.collectT=Math.min(1,n.collectT+t/.62),n.group.scale.setScalar(Math.max(.001,1-nd(n.collectT))),n.group.rotation.y+=t*2.5,n.halo.material.opacity=(1-n.collectT)*.4,n.collectT>=1&&(n.group.visible=!1);continue}n.revealT=Math.min(1,n.revealT+t/.8);let r=nd(n.revealT);n.group.visible=!0,n.group.scale.setScalar(r*(.95+Math.sin(e*1.8)*.03)),n.group.position.set(n.basePosition.x,n.basePosition.y+Math.sin(e*1.3+n.basePosition.x)*.09,n.basePosition.z),n.group.rotation.y+=t*.38,n.ring.rotation.z+=t*.45,n.halo.material.opacity=(.36+Math.sin(e*2+n.basePosition.z)*.09)*r;for(let t of n.group.children)if(t instanceof Pr&&t.userData.orbit!==void 0){let n=t.userData.orbit,r=e*.7+n*Math.PI*2;t.position.set(Math.cos(r)*.68,Math.sin(r*1.6)*.3,Math.sin(r)*.68),t.material.opacity=.25+Math.sin(e*2+n*4)*.12}}for(let t of this.lanterns){if(!t.lit)continue;let r=.85+Math.sin(e*7.3+t.index*2.1)*.1;t.flame.material.opacity=.65+r*.28,t.glow.material.opacity=.24+r*.22,t.light.intensity=(4.2+r*3.2)*n.lanternGlow}this.chimeSwing>0&&(this.chimeSwing=Math.max(0,this.chimeSwing-t*.32),this.chimeTubes&&(this.chimeTubes.rotation.z=Math.sin(e*7.2)*.13*this.chimeSwing,this.chimeTubes.rotation.x=Math.sin(e*5.1+1)*.06*this.chimeSwing));for(let e=this.qinNotes.length-1;e>=0;e--){let n=this.qinNotes[e];n.life-=t*.34,n.life<=0?(n.sprite.parent?.remove(n.sprite),n.sprite.material.dispose(),this.qinNotes.splice(e,1)):(n.sprite.position.addScaledVector(n.velocity,t),n.velocity.y+=t*.14,n.sprite.material.opacity=Math.max(0,n.life)*.75,n.sprite.scale.setScalar(.22+(1-n.life)*.2))}this.egretWing&&(this.egretWing.rotation.y=Math.sin(e*.3)*.03);for(let[n,r]of this.focusSprites){let i=this.focusId===n,a=r.sprite.material;a.opacity=Yu(a.opacity,i?.72+Math.sin(e*4)*.08:.05,5,t);let o=r.baseScale*(i?1.2:1);r.sprite.scale.x=Yu(r.sprite.scale.x,o,4,t),r.sprite.scale.y=r.sprite.scale.x}this.boat.update(e,t,this.boat.speed*3);for(let n of this.ambientBoats)n.update(e,t,.15)}getSealNode(e){return this.seals.get(e)}setBoatPose(e,t,n){this.boat.setPose(e,t,n)}dispose(){this.root.traverse(e=>{e instanceof q&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))})}},yf=class{points;geo;material;pool=[];positions;colors;sizes;lives;max;rng=new Zu(9119);constructor(e,t=720){this.max=t,this.positions=new Float32Array(t*3),this.colors=new Float32Array(t*3),this.sizes=new Float32Array(t),this.lives=new Float32Array(t);for(let e=0;e<t;e++)this.positions[e*3+1]=-9999;this.geo=new ur,this.geo.setAttribute(`position`,new Xn(this.positions,3)),this.geo.setAttribute(`aColor`,new Xn(this.colors,3)),this.geo.setAttribute(`aSize`,new Xn(this.sizes,1)),this.geo.setAttribute(`aLife`,new Xn(this.lives,1)),this.material=new xo({uniforms:{uTex:{value:Od()}},vertexShader:`
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aLife;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (280.0 / max(1.0, -mv.z)) * (0.55 + aLife * 0.7);
          gl_Position = projectionMatrix * mv;
          vColor = aColor;
          vAlpha = smoothstep(0.0, 0.16, aLife) * smoothstep(1.0, 0.55, aLife);
          if (aLife <= 0.001) {
            gl_Position = vec4(9999.0, 9999.0, 9999.0, 1.0);
          }
        }
      `,fragmentShader:`
        uniform sampler2D uTex;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 t = texture2D(uTex, gl_PointCoord);
          gl_FragColor = vec4(vColor, t.a * vAlpha * 0.85);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,transparent:!0,depthWrite:!1,blending:2}),this.points=new Ai(this.geo,this.material),this.points.frustumCulled=!1,this.points.renderOrder=10,e.add(this.points)}burst(e,t,n=34,r=1){let i=new G(t);for(let t=0;t<n;t++){this.pool.length>=this.max&&this.pool.shift();let t=this.rng.float(0,Math.PI*2),n=this.rng.float(-.15,1),a=this.rng.float(.6,2.6)*r,o=new U(Math.cos(t)*Math.sqrt(1-n*n)*a,n*a+this.rng.float(.4,1.1),Math.sin(t)*Math.sqrt(1-n*n)*a);this.pool.push({position:e.clone().add(new U(this.rng.float(-.3,.3),this.rng.float(0,.8),this.rng.float(-.3,.3))),velocity:o,color:i.clone().offsetHSL(this.rng.float(-.04,.04),0,this.rng.float(-.06,.1)),life:1,maxLife:this.rng.float(.8,1.6),size:this.rng.float(.4,1.4)})}}update(e){let t=this.positions,n=this.colors,r=this.sizes,i=this.lives;for(let a=0;a<this.max;a++){let o=this.pool[a];o?(o.life-=e/o.maxLife,o.velocity.y-=e*1.6,o.velocity.multiplyScalar(1-e*.55),o.position.addScaledVector(o.velocity,e),t[a*3]=o.position.x,t[a*3+1]=o.position.y,t[a*3+2]=o.position.z,n[a*3]=o.color.r,n[a*3+1]=o.color.g,n[a*3+2]=o.color.b,r[a]=o.size,i[a]=Math.max(0,o.life)):(i[a]=0,t[a*3+1]=-9999)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aLife.needsUpdate=!0}};function bf(){let e=new Float32Array([0,0,.12,-.78,.18,-.1,-.12,.02,.28,0,0,.12,.12,.02,.28,.78,.18,-.1]),t=new ur;return t.setAttribute(`position`,new Xn(e,3)),t.setIndex([0,1,2,3,4,5]),t.computeVertexNormals(),t}var xf=class{group=new cn;clouds=[];mists=[];birdMeshes=[];flocks=[];birdMatrix=new Nt;birdQuat=new ut;birdPos=new U;birdScale=new U;birdEuler=new Ut;dust;dustMaterial;dustPositions;dustVelocity;dustCount=180;fireflies;firefliesMaterial;fireflyCount=180;fireflyPositions;bursts;ripples=[];rippleIndex=0;rng=new Zu(778123);shape;elapsed=0;constructor(e,t,n={quality:`high`}){this.shape=t,this.group.name=`ambience`,e.add(this.group);let r=[Dd(0),Dd(1),Dd(2)],i=n.quality===`low`?7:14;for(let e=0;e<i;e++){let t=r[e%r.length],n=new Pr(new br({map:t,color:`#f4ecdb`,transparent:!0,opacity:.12,depthWrite:!1,fog:!0})),i=this.rng.float(Z.zMin+100,Z.zMax-100),a=this.rng.float(Z.xMin+100,Z.xMax-100),o=this.rng.float(55,140);n.position.set(a,o,i);let s=this.rng.float(95,270);n.scale.set(s,s*this.rng.float(.24,.44),1),this.group.add(n),this.clouds.push({sprite:n,baseX:a,baseZ:i,speed:this.rng.float(.5,1.8),phase:this.rng.float(0,Math.PI*2),baseOpacity:this.rng.float(.06,.16)})}let a=n.quality===`low`?4:10;for(let e=0;e<a;e++){let n=new Pr(new br({map:r[e%r.length],color:`#e8e6d9`,transparent:!0,opacity:.06,depthWrite:!1,fog:!0})),i=this.rng.float(-850,700),a=t.riverCenter(i)+this.rng.float(-80,80);n.position.set(a,this.rng.float(2,13),i),n.scale.set(this.rng.float(50,150),this.rng.float(16,38),1),this.group.add(n),this.mists.push({sprite:n,baseX:a,baseZ:i,speed:this.rng.float(.2,.65),phase:this.rng.float(0,Math.PI*2)})}let o=bf(),s=new Vr({color:`#1d2922`,transparent:!0,opacity:.62,side:2,depthWrite:!1});for(let e of[{z:430,radius:34,alt:23,count:13,x:null},{z:-230,radius:45,alt:31,count:11,x:null},{z:-760,radius:38,alt:28,count:9,x:null}]){let t={center:new U(this.shape.riverCenter(e.z)+30,e.alt,e.z),radius:e.radius,altitude:e.alt,phase:this.rng.float(0,Math.PI*2),speed:this.rng.float(.035,.06),startled:0,count:e.count,offsets:Array.from({length:e.count},(t,n)=>({a:n/e.count*Math.PI*2+this.rng.float(-.15,.15),r:this.rng.float(.65,1.3),h:this.rng.float(-2.6,2.8),phase:this.rng.float(0,Math.PI*2),size:this.rng.float(.65,1.25)}))};this.flocks.push(t);let n=new ui(o,s,e.count);n.frustumCulled=!1,n.instanceMatrix.setUsage(He),this.group.add(n),this.birdMeshes.push(n)}this.dustPositions=new Float32Array(this.dustCount*3),this.dustVelocity=new Float32Array(this.dustCount*3);for(let e=0;e<this.dustCount;e++)this.dustPositions[e*3]=this.rng.float(-40,40),this.dustPositions[e*3+1]=this.rng.float(.5,16),this.dustPositions[e*3+2]=this.rng.float(-40,40),this.dustVelocity[e*3]=this.rng.float(-.1,.1),this.dustVelocity[e*3+1]=this.rng.float(.02,.12),this.dustVelocity[e*3+2]=this.rng.float(-.1,.1);let c=new ur;c.setAttribute(`position`,new Xn(this.dustPositions,3)),this.dustMaterial=new Ti({map:Od(`rgba(255,246,219,1)`,`rgba(255,236,189,0)`),color:`#f7e8c7`,size:.16,transparent:!0,opacity:.32,depthWrite:!1,blending:2,sizeAttenuation:!0}),this.dust=new Ai(c,this.dustMaterial),this.dust.frustumCulled=!1,e.add(this.dust),this.fireflyPositions=new Float32Array(this.fireflyCount*3);for(let e=0;e<this.fireflyCount;e++){let t=this.rng.float(-820,700);this.fireflyPositions[e*3]=this.shape.riverCenter(t)+this.rng.float(-55,55),this.fireflyPositions[e*3+1]=this.rng.float(.4,5.5),this.fireflyPositions[e*3+2]=t}let l=new ur;l.setAttribute(`position`,new Xn(this.fireflyPositions,3)),this.firefliesMaterial=new Ti({map:Od(`rgba(255,234,164,1)`,`rgba(255,205,92,0)`),color:`#ffd382`,size:.23,transparent:!0,opacity:0,depthWrite:!1,blending:2,sizeAttenuation:!0}),this.fireflies=new Ai(l,this.firefliesMaterial),this.fireflies.frustumCulled=!1,e.add(this.fireflies),this.bursts=new yf(e,n.quality===`low`?300:720),Od(`rgba(255,255,255,.5)`,`rgba(255,255,255,0)`);for(let e=0;e<8;e++){let e=new Vr({color:`#e9f0db`,transparent:!0,opacity:0,depthWrite:!1,side:2,blending:2}),t=new q(new co(.55,.68,32),e);t.rotation.x=-Math.PI/2,t.visible=!1,t.renderOrder=4,this.group.add(t),this.ripples.push({mesh:t,life:0,maxLife:2.5})}}burst(e,t,n=34,r=1){this.bursts.burst(e,t,n,r)}ripple(e,t,n=1){let r=this.ripples[this.rippleIndex%this.ripples.length];this.rippleIndex++,r.life=1,r.maxLife=2.6,r.mesh.position.set(e,.08,t),r.mesh.scale.setScalar(n),r.mesh.visible=!0,r.mesh.material.opacity=.5}startleBirds(){for(let e of this.flocks)e.startled=1}update(e,t,n,r,i){this.elapsed=e;for(let t of this.clouds){let n=(t.baseX+e*t.speed)%1600-800;t.sprite.position.x=n,t.sprite.position.z=t.baseZ+Math.sin(e*.012+t.phase)*15;let i=t.sprite.material;i.color.copy(r.cloudColor),i.opacity=t.baseOpacity*(.6+r.cloudCover*.65)}for(let t of this.mists){t.sprite.position.x=t.baseX+Math.sin(e*.02+t.phase)*10,t.sprite.position.z=t.baseZ+Math.cos(e*.013+t.phase)*8;let n=t.sprite.material;n.color.copy(r.skyHaze),n.opacity=.025+r.mist*.08}for(let n=0;n<this.flocks.length;n++){let r=this.flocks[n],i=this.birdMeshes[n];r.startled>0&&(r.startled=Math.max(0,r.startled-t*.065));let a=r.startled,o=r.speed*(1+a*2.4),s=r.center.y+a*18+Math.sin(e*.13+r.phase)*2;for(let t=0;t<r.count;t++){let n=r.offsets[t],c=n.a+e*o*(1+t*.004)+r.phase,l=r.radius*n.r*(1+a*1.6),u=r.center.x+Math.cos(c)*l+Math.sin(e*.23+n.phase)*1.2,d=r.center.z+Math.sin(c)*l*.71,f=s+n.h+Math.sin(e*.8+n.phase)*.5+a*8;this.birdPos.set(u,f,d),this.birdEuler.set(0,-c-Math.PI*.5,Math.sin(e*1.7+n.phase)*.08),this.birdQuat.setFromEuler(this.birdEuler);let p=n.size*2.3;this.birdScale.set(p,p*(.8+Math.sin(e*5+n.phase)*.14),p),this.birdMatrix.compose(this.birdPos,this.birdQuat,this.birdScale),i.setMatrixAt(t,this.birdMatrix)}i.instanceMatrix.needsUpdate=!0}let a=this.dustPositions;for(let n=0;n<this.dustCount;n++){let r=n*3;a[r]+=(this.dustVelocity[r]+Math.sin(e*.33+n)*.03)*t,a[r+1]+=this.dustVelocity[r+1]*t,a[r+2]+=this.dustVelocity[r+2]*t;let o=a[r]-i.x,s=a[r+2]-i.z;o>38&&(a[r]-=76),o<-38&&(a[r]+=76),s>38&&(a[r+2]-=76),s<-38&&(a[r+2]+=76),a[r+1]>16&&(a[r+1]=.4)}this.dust.geometry.attributes.position.needsUpdate=!0,this.dustMaterial.opacity=.12+(1-r.mist)*.18;let o=this.fireflyPositions;for(let t=0;t<this.fireflyCount;t++){let n=t*3;o[n]+=Math.sin(e*.8+t*2.1)*.018,o[n+1]+=Math.sin(e*1.7+t)*.004+.002,o[n+2]+=Math.cos(e*.7+t*1.7)*.016,o[n+1]>6.5&&(o[n+1]=.5),o[n]-i.x,o[n+2]-i.z}this.fireflies.geometry.attributes.position.needsUpdate=!0,this.firefliesMaterial.opacity=r.fireflies*(.55+Math.sin(e*1.7)*.08),this.bursts.update(t);for(let e of this.ripples)e.life<=0||(e.life-=t/e.maxLife,e.mesh.scale.addScalar(t*2.4),e.mesh.material.opacity=Math.max(0,e.life)*.42,e.life<=0&&(e.mesh.visible=!1))}dispose(){this.group.traverse(e=>{(e instanceof q||e instanceof Pr)&&(e.geometry?.dispose?.(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e?.dispose?.()))})}},Sf={clear:{id:`clear`,skyZenith:new G(`#4f8391`),skyHorizon:new G(`#e2d3b1`),skyHaze:new G(`#a9bcae`),cloudColor:new G(`#f3ead5`),cloudShadow:new G(`#aebcaf`),sunColor:new G(`#ffdca1`),sunDir:new U(-.32,.48,-.82).normalize(),sunStrength:1,fogColor:new G(`#a9baad`),fogDensity:.00118,hemiSky:new G(`#accac8`),hemiGround:new G(`#5d6652`),hemiIntensity:.76,sunIntensity:2.7,ambientIntensity:.27,waterDeep:new G(`#0e3940`),waterShallow:new G(`#3f7773`),waterFoam:new G(`#e7ddc1`),waterGlow:new G(`#b9d1c2`),mist:.2,cloudCover:.36,exposure:1.06,fireflies:0,lanternGlow:.25,grain:.62},mist:{id:`mist`,skyZenith:new G(`#829997`),skyHorizon:new G(`#d2cec0`),skyHaze:new G(`#b9c3b9`),cloudColor:new G(`#e8e4d8`),cloudShadow:new G(`#aeb8ae`),sunColor:new G(`#f1dfc1`),sunDir:new U(-.34,.33,-.86).normalize(),sunStrength:.42,fogColor:new G(`#bdc6ba`),fogDensity:.0042,hemiSky:new G(`#c7d3ce`),hemiGround:new G(`#737b68`),hemiIntensity:1,sunIntensity:.9,ambientIntensity:.36,waterDeep:new G(`#294c4c`),waterShallow:new G(`#718b81`),waterFoam:new G(`#dedac9`),waterGlow:new G(`#c5d0c4`),mist:1.15,cloudCover:.84,exposure:1.01,fireflies:0,lanternGlow:.52,grain:.8},dusk:{id:`dusk`,skyZenith:new G(`#405760`),skyHorizon:new G(`#dca076`),skyHaze:new G(`#b59b87`),cloudColor:new G(`#e9c6a5`),cloudShadow:new G(`#947f76`),sunColor:new G(`#ffad6e`),sunDir:new U(.56,.115,-.82).normalize(),sunStrength:.9,fogColor:new G(`#94857a`),fogDensity:.00185,hemiSky:new G(`#8f9b9e`),hemiGround:new G(`#584b3e`),hemiIntensity:.62,sunIntensity:1.55,ambientIntensity:.23,waterDeep:new G(`#1d3036`),waterShallow:new G(`#5b6d69`),waterFoam:new G(`#e0c6a3`),waterGlow:new G(`#d7a47d`),mist:.4,cloudCover:.66,exposure:.96,fireflies:1,lanternGlow:1.1,grain:.75}};function Cf(e){return{...e,skyZenith:e.skyZenith.clone(),skyHorizon:e.skyHorizon.clone(),skyHaze:e.skyHaze.clone(),cloudColor:e.cloudColor.clone(),cloudShadow:e.cloudShadow.clone(),sunColor:e.sunColor.clone(),sunDir:e.sunDir.clone(),fogColor:e.fogColor.clone(),hemiSky:e.hemiSky.clone(),hemiGround:e.hemiGround.clone(),waterDeep:e.waterDeep.clone(),waterShallow:e.waterShallow.clone(),waterFoam:e.waterFoam.clone(),waterGlow:e.waterGlow.clone()}}var wf=class{current;from;target;progress=1;duration=2.8;queued=null;constructor(e=`clear`){this.current=Cf(Sf[e]),this.from=Cf(Sf[e]),this.target=Cf(Sf[e])}get id(){return this.target.id}set(e,t=!1){e===this.target.id&&this.progress<1?this.queued=e:e===this.target.id&&this.progress>=1||(t?(this.current=Cf(Sf[e]),this.from=Cf(Sf[e]),this.target=Cf(Sf[e]),this.progress=1):(this.from=Cf(this.current),this.target=Cf(Sf[e]),this.progress=0,this.queued=null))}update(e){if(this.progress>=1)return!1;this.progress=Math.min(1,this.progress+e/this.duration);let t=Ju(0,1,this.progress),n=this.from,r=this.target,i=this.current;i.id=r.id,i.skyZenith.lerpColors(n.skyZenith,r.skyZenith,t),i.skyHorizon.lerpColors(n.skyHorizon,r.skyHorizon,t),i.skyHaze.lerpColors(n.skyHaze,r.skyHaze,t),i.cloudColor.lerpColors(n.cloudColor,r.cloudColor,t),i.cloudShadow.lerpColors(n.cloudShadow,r.cloudShadow,t),i.sunColor.lerpColors(n.sunColor,r.sunColor,t),i.sunDir.lerpVectors(n.sunDir,r.sunDir,t).normalize(),i.fogColor.lerpColors(n.fogColor,r.fogColor,t),i.hemiSky.lerpColors(n.hemiSky,r.hemiSky,t),i.hemiGround.lerpColors(n.hemiGround,r.hemiGround,t),i.waterDeep.lerpColors(n.waterDeep,r.waterDeep,t),i.waterShallow.lerpColors(n.waterShallow,r.waterShallow,t),i.waterFoam.lerpColors(n.waterFoam,r.waterFoam,t),i.waterGlow.lerpColors(n.waterGlow,r.waterGlow,t);let a=i,o=n,s=r;for(let e of[`sunStrength`,`fogDensity`,`hemiIntensity`,`sunIntensity`,`ambientIntensity`,`mist`,`cloudCover`,`exposure`,`fireflies`,`lanternGlow`,`grain`])a[e]=o[e]+(s[e]-o[e])*t;if(this.progress>=1&&this.queued){let e=this.queued;this.queued=null,this.set(e)}return!0}get isTransitioning(){return this.progress<1}},Tf=class{position=new U;velocity=new U;yaw=0;pitch=0;roll=0;mode=`walk`;onGround=!0;eyeHeight=1.68;speed=0;verticalVelocity=0;camera;boat=null;boatSpeed=0;boatHeading=0;footstep=0;footstepEvent=null;headBobTime=0;headBobEnabled=!0;bobAmount=0;landDip=0;fovKick=0;lastGroundY=0;wasGrounded=!0;shake=0;bank=0;boatWakeTimer=0;eyePosition=new U;seatPosition=new U;constructor(e){this.camera=e,this.resetAtSpawn(null)}resetAtSpawn(e,t=60,n=640){if(e){let t=e.pathX(Z.startZ,1),n=Z.startZ;this.position.set(t,e.heightAt(t,n),n)}else this.position.set(t,1,n);this.velocity.set(0,0,0),this.verticalVelocity=0,this.yaw=0,this.pitch=-.03,this.roll=0,this.mode=`walk`,this.boat=null,this.onGround=!0,this.lastGroundY=this.position.y,this.eyePosition.copy(this.position),this.updateCamera(0,0)}setPosition(e,t,n,r){this.position.set(e,n,t),this.velocity.set(0,0,0),this.verticalVelocity=0,r!==void 0&&(this.yaw=r),this.updateCamera(0,0)}addLook(e,t,n=1){let r=.00215*n;this.yaw-=e*r,this.pitch=Gu(this.pitch-t*r*.92,-1.35,1.25),this.yaw>Math.PI&&(this.yaw-=Math.PI*2),this.yaw<-Math.PI&&(this.yaw+=Math.PI*2)}addShake(e){this.shake=Math.min(.8,this.shake+e)}addFovKick(e){this.fovKick=Math.min(7,this.fovKick+e)}board(e,t){this.mode=`boat`,this.boat=e,e.setPassengerView(!0),this.boatSpeed=0,this.boatHeading=this.yaw,e.heading=this.yaw,this.speed=0,this.verticalVelocity=0,this.position.set(e.position.x,0,e.position.z)}disembark(e){if(this.mode!==`boat`||!this.boat)return!1;let t=e.findDisembarkPoint(this.boat.position.x,this.boat.position.z);if(!t)return!1;let n=e.heightAt(t.x,t.z);return this.mode=`walk`,this.boat.setPassengerView(!1),this.boat.speed=0,this.boat=null,this.boatSpeed=0,this.position.set(t.x,n,t.z),this.velocity.set(0,0,0),this.verticalVelocity=0,this.onGround=!0,this.updateCamera(0,0),!0}update(e,t,n,r){this.footstepEvent=null,(t.lookDx!==0||t.lookDy!==0)&&this.addLook(t.lookDx,t.lookDy,1),this.mode===`boat`?this.updateBoat(e,t,n,r):this.updateWalk(e,t,n,r)}updateWalk(e,t,n,r){let i=r&&(Math.abs(t.forward)>.01||Math.abs(t.strafe)>.01),a=t.sprint&&i&&t.forward>.1,o=a?8.2:4.35,s=this.onGround?14:3.2,c=this.onGround?11:.8,l=Math.sin(this.yaw),u=Math.cos(this.yaw),d=0,f=0;r&&(d=t.strafe*u-t.forward*l,f=-t.forward*u-t.strafe*l);let p=Math.hypot(d,f);p>0&&(d/=p,f/=p);let m=d*o,h=f*o,g=p>0?s:c;this.velocity.x=Yu(this.velocity.x,m,g,e),this.velocity.z=Yu(this.velocity.z,h,g,e),Math.abs(this.velocity.x)<.005&&(this.velocity.x=0),Math.abs(this.velocity.z)<.005&&(this.velocity.z=0),this.speed=Math.hypot(this.velocity.x,this.velocity.z),r&&t.jump&&this.onGround&&(this.verticalVelocity=6.35,this.onGround=!1,this.footstepEvent=`step`);let _=this.velocity.x*e,v=this.velocity.z*e,y=this.tryMove(this.position.x+_,this.position.z+v,n);if(y.ok)this.position.x=y.x,this.position.z=y.z;else{let e=this.tryMove(this.position.x+_,this.position.z,n),t=this.tryMove(this.position.x,this.position.z+v,n);e.ok&&(this.position.x=e.x),t.ok&&(this.position.z=t.z),e.ok||(this.velocity.x*=.2),t.ok||(this.velocity.z*=.2)}this.position.x=Gu(this.position.x,Z.xMin+8,Z.xMax-8),this.position.z=Gu(this.position.z,Z.zMin+8,Z.zMax-8);let b=n.groundAt(this.position.x,this.position.z);if(this.onGround)b>this.position.y+.95?this.position.y=Yu(this.position.y,b,15,e):this.position.y=Yu(this.position.y,b,26,e),this.lastGroundY=b;else if(this.verticalVelocity-=20*e,this.position.y+=this.verticalVelocity*e,this.position.y<=b){let e=Math.abs(this.verticalVelocity);this.position.y=b,this.verticalVelocity=0,this.onGround=!0,this.landDip=Math.min(.13,e*.009),this.footstepEvent=`land`}if(this.position.y<-.45){let e=n.nearestLandPoint(this.position.x,this.position.z);this.setPosition(e.x,e.z,Math.max(.7,n.heightAt(e.x,e.z)),this.yaw),this.footstepEvent=`land`}let x=this.speed;this.headBobTime+=e*(x>.2?(a?10.2:7.2)*Gu(x/4.2,.35,1.5):1.15);let S=this.onGround&&this.headBobEnabled?Math.sin(this.headBobTime*1.08)*(x/4.35)*.035:0;this.bobAmount=Yu(this.bobAmount,S,11,e);let C=Math.floor(this.headBobTime/Math.PI);this.onGround&&x>1&&C!==this.footstep&&(this.footstep=C,this.footstepEvent=`step`),this.landDip=Yu(this.landDip,0,7,e),this.bank=Yu(this.bank,-t.strafe*.35,5,e),this.roll=Yu(this.roll,-t.strafe*.012+Math.sin(this.headBobTime)*.0012,6,e),this.fovKick=Yu(this.fovKick,a?5.5:0,4.5,e),this.shake=Yu(this.shake,0,8,e),this.eyePosition.set(this.position.x,this.position.y+this.eyeHeight+this.bobAmount-this.landDip,this.position.z),this.applyCamera(x)}updateBoat(e,t,n,r){if(!this.boat){this.mode=`walk`;return}let i=r?t.forward:0,a=r?t.strafe:0,o=i>0?(t.sprint?7.3:4.8)*Gu(i,0,1):i<0?-1.9:0;this.boatSpeed=Yu(this.boatSpeed,o,i===0?1.05:.85,e),this.boatHeading-=a*e*(.32+Math.abs(this.boatSpeed)*.055)*(this.boatSpeed<0?-1:1),this.boat.heading=this.boatHeading,this.boat.speed=this.boatSpeed;let s=this.boatHeading,c=-Math.sin(s)*this.boatSpeed*e,l=-Math.cos(s)*this.boatSpeed*e,u=this.boat.position.x+c,d=this.boat.position.z+l,f=n.waterDepthAt(u,d),p=u-Math.sin(s)*3.1,m=d-Math.cos(s)*3.1,h=n.waterDepthAt(p,m),g=n.isIsletCollision(u,d);f>.45&&h>.3&&!g?(this.boat.position.x=u,this.boat.position.z=d):(this.boatSpeed*=.35,this.boat.speed=this.boatSpeed),this.boat.position.y=.18,this.boat.group.position.x=this.boat.position.x,this.boat.group.position.z=this.boat.position.z,this.boatHeading=this.boat.heading,this.yaw=Yu(this.yaw,this.yaw,1,e),this.boat.getSeatWorld(this.eyePosition),this.eyePosition.y+=Math.sin(this.headBobTime*.8)*.015,this.boatWakeTimer+=e*(Math.abs(this.boatSpeed)+.2),this.headBobTime+=e*(.9+Math.abs(this.boatSpeed)*.4),this.roll=Yu(this.roll,Math.sin(this.headBobTime*.7)*.005+a*.008,3,e),this.bank=Yu(this.bank,Ef(a)*.1,3,e),this.fovKick=Yu(this.fovKick,Math.abs(this.boatSpeed)*.35,3,e),this.shake=Yu(this.shake,0,8,e),this.speed=Math.abs(this.boatSpeed),Math.abs(this.boatSpeed)>.7&&this.boatWakeTimer>1.1&&(this.boatWakeTimer=0,this.footstepEvent=`boat`),this.position.set(this.boat.position.x,0,this.boat.position.z),this.applyCamera(1)}tryMove(e,t,n){let r=n.groundAt(e,t),i=n.isOnBridge(e,t,.3);return!i&&r<.2||!i&&n.slopeAt(e,t)>1.24&&r>this.position.y+.3||this.onGround&&r>this.position.y+.72?{ok:!1,x:this.position.x,z:this.position.z}:{ok:!0,x:e,z:t}}applyCamera(e){this.camera.position.copy(this.eyePosition);let t=this.shake*(Math.sin(this.headBobTime*41)*.014+Math.sin(this.headBobTime*67)*.007),n=this.shake*(Math.cos(this.headBobTime*37)*.01);this.camera.position.x+=t,this.camera.position.y+=n,this.camera.rotation.order=`YXZ`,this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=this.roll+this.bank*.004,this.camera.fov=Ku(this.camera.fov,64+this.fovKick+Gu(e-4,0,5)*.8,1-Math.exp(-.064)),this.camera.updateProjectionMatrix()}updateCamera(e,t){this.mode===`boat`&&this.boat?this.boat.getSeatWorld(this.eyePosition):this.eyePosition.set(this.position.x,this.position.y+this.eyeHeight,this.position.z),this.camera.position.copy(this.eyePosition),this.camera.rotation.order=`YXZ`,this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=this.roll,this.camera.fov=64,this.camera.updateProjectionMatrix()}getEyeHeightAboveGround(e){return this.eyePosition.y-e.groundAt(this.position.x,this.position.z)}};function Ef(e){return Math.sign(e)*Math.min(1,Math.abs(e))}var Df=new Set([`KeyW`,`KeyA`,`KeyS`,`KeyD`,`ShiftLeft`,`ShiftRight`,`Space`,`KeyE`,`KeyJ`,`KeyM`,`KeyP`,`KeyR`,`KeyH`,`Digit1`,`Digit2`,`Digit3`,`Escape`]),Of=new Set([`KeyE`,`KeyJ`,`KeyM`,`KeyP`,`KeyR`,`KeyH`,`Digit1`,`Digit2`,`Digit3`]),kf=class{keys=new Set;lookX=0;lookY=0;jumpPressed=!1;enabled=!0;pointerLocked=!1;sensitivity=1;handlers;canvas;attached=!1;touchId=null;touchLastX=0;touchLastY=0;touchStartX=0;touchStartY=0;touchMoved=!1;touchMode=null;joystick={x:0,y:0};keysBound=!1;constructor(e,t){this.canvas=e,this.handlers=t}attach(){this.attached||(this.attached=!0,window.addEventListener(`keydown`,this.onKeyDown,{capture:!0}),window.addEventListener(`keyup`,this.onKeyUp,{capture:!0}),window.addEventListener(`blur`,this.onWindowBlur),document.addEventListener(`pointerlockchange`,this.onLockChange),document.addEventListener(`mousemove`,this.onMouseMove),window.addEventListener(`wheel`,this.onWheel,{passive:!1}),this.canvas.addEventListener(`mousedown`,this.onMouseDown),this.canvas.addEventListener(`touchstart`,this.onTouchStart,{passive:!1}),this.canvas.addEventListener(`touchmove`,this.onTouchMove,{passive:!1}),this.canvas.addEventListener(`touchend`,this.onTouchEnd,{passive:!1}),this.canvas.addEventListener(`touchcancel`,this.onTouchEnd,{passive:!1}))}detach(){this.attached&&(this.attached=!1,window.removeEventListener(`keydown`,this.onKeyDown,{capture:!0}),window.removeEventListener(`keyup`,this.onKeyUp,{capture:!0}),window.removeEventListener(`blur`,this.onWindowBlur),document.removeEventListener(`pointerlockchange`,this.onLockChange),document.removeEventListener(`mousemove`,this.onMouseMove),window.removeEventListener(`wheel`,this.onWheel),this.canvas.removeEventListener(`mousedown`,this.onMouseDown),this.canvas.removeEventListener(`touchstart`,this.onTouchStart),this.canvas.removeEventListener(`touchmove`,this.onTouchMove),this.canvas.removeEventListener(`touchend`,this.onTouchEnd),this.canvas.removeEventListener(`touchcancel`,this.onTouchEnd))}requestPointerLock(){if(this.canvas.requestPointerLock)try{let e=this.canvas.requestPointerLock({unadjustedMovement:!1});e&&typeof e.catch==`function`&&e.catch(()=>void 0)}catch{this.canvas.requestPointerLock()}}exitPointerLock(){document.pointerLockElement&&document.exitPointerLock()}setEnabled(e){this.enabled=e,e||(this.keys.clear(),this.joystick.x=0,this.joystick.y=0,this.jumpPressed=!1)}simulateKey(e,t){if(this.enabled||!t){if(t){let t=this.keys.has(e);this.keys.add(e),t||(e===`Space`&&(this.jumpPressed=!0),Of.has(e)&&this.handlers.onAction(e))}else this.keys.delete(e)}}simulateLook(e,t){this.enabled&&(this.lookX+=e*this.sensitivity,this.lookY+=t*this.sensitivity)}simulateWheel(e){this.enabled&&this.handlers.onWheel(e)}simulateAction(e){this.enabled&&this.handlers.onAction(e)}setJoystick(e,t){this.joystick.x=Math.max(-1,Math.min(1,e)),this.joystick.y=Math.max(-1,Math.min(1,t))}get forward(){return+!!this.keys.has(`KeyW`)-!!this.keys.has(`KeyS`)-this.joystick.y}get strafe(){return+!!this.keys.has(`KeyD`)-!!this.keys.has(`KeyA`)+this.joystick.x}get sprint(){return this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`)}consumeLook(){let e=this.lookX,t=this.lookY;return this.lookX=0,this.lookY=0,{dx:e,dy:t}}consumeJump(){return this.jumpPressed?(this.jumpPressed=!1,!0):!1}get joystickVector(){return this.joystick}onKeyDown=e=>{this.enabled?Df.has(e.code)&&(e.preventDefault(),e.ctrlKey||e.metaKey||e.altKey)||e.repeat||(this.keys.add(e.code),e.code===`Space`&&(this.jumpPressed=!0),Of.has(e.code)&&this.handlers.onAction(e.code)):e.code===`Escape`||e.code};onKeyUp=e=>{this.keys.delete(e.code)};onWindowBlur=()=>{this.keys.clear(),this.joystick.x=0,this.joystick.y=0,this.handlers.onBlur()};onMouseMove=e=>{this.pointerLocked&&this.enabled&&(this.lookX+=e.movementX*this.sensitivity,this.lookY+=e.movementY*this.sensitivity,this.handlers.onLook(e.movementX*this.sensitivity,e.movementY*this.sensitivity))};onWheel=e=>{this.enabled&&e.deltaY!==0&&this.handlers.onWheel(e.deltaY)};onLockChange=()=>{this.pointerLocked=document.pointerLockElement===this.canvas,this.handlers.onPointerLockChange(this.pointerLocked)};onMouseDown=e=>{e.button===0&&this.enabled&&this.handlers.onAction(`Click`)};onTouchStart=e=>{if(!this.enabled)return;let t=e.changedTouches[0];if(!t)return;let n=this.canvas.getBoundingClientRect(),r=t.clientX-n.left;this.touchId=t.identifier,this.touchLastX=r,this.touchLastY=t.clientY,this.touchStartX=r,this.touchStartY=t.clientY,this.touchMoved=!1,this.touchMode=r<n.width*.38?`move`:`look`,e.preventDefault()};onTouchMove=e=>{if(!this.enabled||this.touchId===null)return;let t=Array.from(e.touches).find(e=>e.identifier===this.touchId);if(!t)return;let n=t.clientX-this.touchLastX,r=t.clientY-this.touchLastY;if(this.touchLastX=t.clientX,this.touchLastY=t.clientY,Math.abs(t.clientX-this.touchStartX)+Math.abs(t.clientY-this.touchStartY)>8&&(this.touchMoved=!0),this.touchMode===`look`)this.lookX+=n*1.45,this.lookY+=r*1.45,this.handlers.onLook(n*1.45,r*1.45);else{let e=(t.clientX-this.touchStartX)/54,n=(t.clientY-this.touchStartY)/54;this.joystick.x=Math.max(-1,Math.min(1,e)),this.joystick.y=Math.max(-1,Math.min(1,n))}e.preventDefault()};onTouchEnd=e=>{this.touchId!==null&&Array.from(e.changedTouches).some(e=>e.identifier===this.touchId)&&(!this.touchMoved&&this.touchMode===`look`&&this.handlers.onAction(`Click`),this.touchId=null,this.touchMode=null,this.joystick.x=0,this.joystick.y=0,e.preventDefault())}},Af=class{listeners=new Map;on(e,t){let n=this.listeners.get(e);return n||(n=new Set,this.listeners.set(e,n)),n.add(t),()=>n?.delete(t)}emit(e,...t){let n=this.listeners.get(e);if(n)for(let r of n)try{r(...t)}catch(t){console.error(`[event ${e}]`,t)}}},jf=`qianli-river-save-v1`,Mf=`qianli-river-quality-v1`,Nf=class{emitter=new Af;canvas;cloud;scene=new _n;camera;renderer;shape;sky;water;terrain;vegetation;landmarks;ambience;weather=new wf(`clear`);audio=rd;player;input;recorder;quality;started=!1;paused=!1;modal=null;pendingPanorama=!1;allSealsCelebrated=!1;sealsCollected=new Set;scrollsRead=new Set;guqinPlayed=!1;chimePlayed=!1;target=null;prompt=null;currentFocus=null;location=null;lastLocationId=null;toastSeq=0;lastToast=null;time=0;lastFrame=performance.now();fpsSmoothed=60;lastSnapshot=0;lastInteractionCheck=0;lastSaveAt=0;nextAutosaveAt=12;startedAt=0;boatIdle=0;boatReturnNotified=!1;saved=null;sunLight;hemiLight;ambientLight;fog;pano;weatherBeforePanorama=null;attractBase=new U;attractLook=new U;attractQuat=new ut;adaptiveTimer=0;adaptiveDowngrades=0;resizeObserver=null;tickHandle=0;disposed=!1;suspended=!1;participants=1;staticUI;shadowAccumulator=0;locationNoticeCooldown=0;visitedLocations=new Set;useTouchLock=!1;constructor(e){this.canvas=e.canvas,this.cloud=!!e.cloud,this.quality=e.quality??localStorage.getItem(Mf)??`high`,[`low`,`medium`,`high`].includes(this.quality)||(this.quality=`high`),this.renderer=new Wu({canvas:e.canvas,antialias:!0,alpha:!1,powerPreference:`high-performance`,stencil:!1,depth:!0}),this.renderer.outputColorSpace=Ie,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.04,this.renderer.shadowMap.enabled=this.quality!==`low`,this.renderer.shadowMap.type=1,this.renderer.setClearColor(`#bcc8b9`,1),this.renderer.info.autoReset=!1,this.scene.background=new G(`#bcc8b9`),this.scene.fog=this.fog=new gn(`#bcc8b9`,.002),this.camera=new rs(64,1,.08,5200),this.camera.position.set(0,10,0),this.camera.rotation.order=`YXZ`,this.shape=new _d,this.sunLight=new cs(`#ffe2b2`,2.3),this.sunLight.castShadow=this.quality!==`low`,this.sunLight.shadow.mapSize.set(this.quality===`high`?2048:1024,this.quality===`high`?2048:1024),this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=280,this.sunLight.shadow.camera.left=-65,this.sunLight.shadow.camera.right=65,this.sunLight.shadow.camera.top=65,this.sunLight.shadow.camera.bottom=-65,this.sunLight.shadow.bias=-4e-4,this.sunLight.shadow.normalBias=.035,this.sunLight.shadow.blurSamples=12,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.hemiLight=new Go(`#c7d6cf`,`#7c8067`,.9),this.scene.add(this.hemiLight),this.ambientLight=new ls(`#e6ddc9`,.28),this.scene.add(this.ambientLight),this.player=new Tf(this.camera),this.input=new kf(this.canvas,{onAction:e=>this.handleAction(e),onLook:()=>void 0,onWheel:e=>this.handleWheel(e),onPointerLockChange:e=>this.emitter.emit(`pointerlock`,e),onBlur:()=>this.input.keys.clear()}),this.recorder=new id(this.canvas,()=>this.audio.getAudioStream()),this.pano={active:!1,elapsed:0,yaw:0,pitch:0,radius:480,center:new U(0,0,-300),startPosition:new U,startQuaternion:new ut,dragging:!1,lastX:0,lastY:0},this.landmarks=new vf(this.shape,this.quality),this.scene.add(this.landmarks.root),this.staticUI={map:this.shape.makeMapData(this.landmarks.getSealMapPositions()),worldNote:`程序化青绿山水 · 所有画面实时生成`,landmarks:cd.map(e=>({id:e.id,name:e.name,kicker:e.kicker}))},this.applyInitialPlayer(),this.setupEvents(),this.layout(),this.loop=this.loop.bind(this)}async init(e){let t=(t,n)=>e?.(t,n);t(4,`研墨铺绢……`),await Pf(),this.renderer.setPixelRatio(this.pixelRatioForQuality(this.quality)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.camera.aspect=window.innerWidth/Math.max(1,window.innerHeight),this.camera.updateProjectionMatrix(),t(12,`搭起远山与云脚……`),await Pf(),this.sky=new Ud(this.scene),this.sky.applyLook(this.weather.current),t(22,`铺展青绿山水……`),await Pf(),this.terrain=Pd(this.shape,this.quality),this.scene.add(this.terrain.mesh,this.terrain.pathGroup),t(45,`引一江春水……`),await Pf(),this.water=new Bd(this.shape),this.scene.add(this.water.mesh),t(55,`种松植竹，点染烟岚……`),await Pf(),this.vegetation=tf(this.shape,this.quality,this.quality!==`low`),this.scene.add(this.vegetation.group),t(74,`起亭台，架长桥……`),await Pf(),this.ambience=new xf(this.scene,this.shape,{quality:this.quality}),await Pf(),t(86,`收拾印章与题跋……`),this.loadSaved(),this.applyWeatherVisuals(!0),this.applyInitialAttractCamera(),this.player.setPosition(this.shape.sites.spawn.x,this.shape.sites.spawn.z,this.shape.sites.spawn.y,-.12),this.camera.position.copy(this.player.eyePosition),this.camera.rotation.set(this.player.pitch,this.player.yaw,0,`YXZ`),t(94,`等一阵风来……`),this.cloud||(this.input.attach(),this.bindPanoramaPointer()),this.setupContextLoss(),await Pf(),t(100,`长卷已就`),this.emitStaticUI(),this.renderer.compile(this.scene,this.camera),this.lastFrame=performance.now(),this.tickHandle=requestAnimationFrame(this.loop),this.emitter.emit(`ready`)}setupEvents(){window.addEventListener(`resize`,this.layout),document.addEventListener(`visibilitychange`,()=>{document.hidden?(this.audio.setMuted(!0),this.save()):this.audio.setMuted(!1)}),window.addEventListener(`beforeunload`,()=>this.save()),this.renderer.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),this.emitter.emit(`fatal`,`WebGL 上下文丢失，请刷新页面重试。`)}),this.recorder.onState=e=>this.emitter.emit(`recording-state`,e),this.recorder.onFinished=(e,t)=>{let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=`千里江山-云游青绿-${new Date().toISOString().replace(/[:.]/g,`-`)}.webm`,document.body.appendChild(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(n),1e4),this.toast(`游览片段已收入卷中 · ${Qu(t)}`)}}setupContextLoss(){this.canvas.addEventListener(`contextmenu`,e=>e.preventDefault())}bindPanoramaPointer(){this.canvas.addEventListener(`pointerdown`,e=>{this.pano.active&&e.button===0&&(this.pano.dragging=!0,this.pano.lastX=e.clientX,this.pano.lastY=e.clientY,this.canvas.setPointerCapture?.(e.pointerId),this.canvas.style.cursor=`grabbing`)}),this.canvas.addEventListener(`pointermove`,e=>{if(!this.pano.active||!this.pano.dragging)return;let t=e.clientX-this.pano.lastX,n=e.clientY-this.pano.lastY;this.pano.lastX=e.clientX,this.pano.lastY=e.clientY,this.pano.yaw-=t*.004,this.pano.pitch=Gu(this.pano.pitch+n*.003,.28,1.25)});let e=e=>{this.pano.active&&(this.pano.dragging=!1,this.canvas.style.cursor=`grab`,this.canvas.releasePointerCapture?.(e.pointerId))};this.canvas.addEventListener(`pointerup`,e),this.canvas.addEventListener(`pointercancel`,e)}applyInitialPlayer(){let e=this.shape.sites.spawn.x,t=this.shape.sites.spawn.z;this.player.setPosition(e,t,this.shape.heightAt(e,t),-.08),this.player.pitch=-.02}applyInitialAttractCamera(){let e=this.shape.pathX(520,1)+26,t=this.shape.heightAt(e,520)+8.5;this.attractBase.set(e,t,540),this.attractLook.set(this.shape.riverCenter(200)-5,13,80),this.camera.position.copy(this.attractBase),this.camera.lookAt(this.attractLook),this.attractQuat.copy(this.camera.quaternion)}pixelRatioForQuality(e){let t=window.devicePixelRatio||1;return this.cloud?Math.min(e===`low`?.85:e===`medium`?1:1.25,t):Math.min(e===`low`?.85:e===`medium`?1.35:2,t)}layout=()=>{if(!this.renderer)return;let e=this.cloud?Math.max(1,window.innerWidth):window.innerWidth,t=this.cloud?Math.max(1,window.innerHeight):window.innerHeight;this.renderer.setPixelRatio(this.pixelRatioForQuality(this.quality)),this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix()};start(e={}){if(!this.started){if(this.started=!0,this.startedAt=performance.now(),this.audio.unlock().catch(()=>void 0),e.resume&&this.saved?.player){let e=this.saved.player,t=this.shape.groundAt(e.x,e.z);this.player.setPosition(e.x,e.z,Math.max(.3,t),e.yaw),this.player.pitch=-.03}else this.applyInitialPlayer();this.player.yaw=this.saved?.player?.yaw??-.12,this.player.updateCamera(this.time,0),this.emitStaticUI(),this.emitter.emit(`started`,e),this.showStartToast(),this.weather.id!==`clear`&&this.audio.setWeather(this.weather.id),this.emitter.emit(`location`,this.location)}}showStartToast(){let e=this.sealsCollected.size;e===0?(window.setTimeout(()=>this.toast(`入画。沿江边石径向北，入画亭在第一处柳岸。`),900),window.setTimeout(()=>this.toast(`靠近可观看之物，按 E 或轻触画面。`),5200)):e>=7?window.setTimeout(()=>this.toast(`七印归一。可回望江台再观山河。`),700):window.setTimeout(()=>this.toast(`续游前尘。你已收得 `+e+` 枚印章。`),700)}setPaused(e){this.paused=e,e?(this.input.keys.clear(),this.audio.fadeAmbientForModal(!0)):this.audio.fadeAmbientForModal(!1)}getPrompt(){return this.prompt}getUIState(){let e=this.computeObjective(),t=e?.target??null,n=e?.sealId,r=n?this.landmarks.getSealNode(n):null,i=t?new U(t.x,0,t.z):null,a=i?Math.hypot(i.x-this.player.position.x,i.z-this.player.position.z):0;return{mode:this.getMode(),objective:e?{...e,target:{...e.target,name:r?.def.location??e.target.name}}:null,collected:Array.from(this.sealsCollected),readScrolls:Array.from(this.scrollsRead),prompt:this.prompt,weather:this.weather.id,weatherLabel:sd[this.weather.id].name,player:{x:this.player.position.x,y:this.player.eyePosition.y,z:this.player.position.z,yaw:this.player.yaw,speed:this.player.speed,boat:this.player.mode===`boat`},target:t?{x:t.x,z:t.z,glyph:t.glyph,name:t.name,active:a<8}:null,location:this.location,modal:this.modal,toast:this.lastToast&&this.time-this.lastToast.at<4.4?{id:this.lastToast.id,text:this.lastToast.text}:null,allSeals:this.sealsCollected.size>=ad.length,gateRemaining:Math.max(0,6-this.sealsCollected.size),fps:Math.round(this.fpsSmoothed),participants:this.participants,serverTime:Date.now()}}getStaticUI(){return this.staticUI}getMapData(){return this.staticUI.map}emitStaticUI(){this.emitter.emit(`static-ui`,this.staticUI)}getMode(){return this.pano.active?`panorama`:this.player.mode===`boat`?`boat`:`walk`}computeObjective(){let e=ad.find(e=>!this.sealsCollected.has(e.id));if(!e)return{sealId:`shan`,chapter:`卷末`,title:`七印归一 · 回望江台`,hint:`七枚印章已经归卷。回望江台可按 E 再观山河，或按 J 翻阅行旅册。`,step:7,target:{x:this.shape.sites.overlook.x,z:this.shape.sites.overlook.z,glyph:`山`,name:`望江台`}};let t=this.landmarks.getSealNode(e.id)?.basePosition??new U;e.id===`deng`&&this.landmarks.litLanterns<3?t=new U(this.shape.sites.lanternGlade.x,this.shape.sites.lanternGlade.y,this.shape.sites.lanternGlade.z):e.id===`yin`&&!this.guqinPlayed?t=this.landmarks.qinPoint.clone():e.id===`huang`&&!this.chimePlayed?t=this.landmarks.chimePoint.clone():e.id===`zhou`&&this.player.mode===`walk`?t=this.landmarks.dockApproach.clone():e.id===`shan`&&this.sealsCollected.size<6&&(t=this.landmarks.altarPoint.clone());let n=ad.findIndex(t=>t.id===e.id)+1;return{sealId:e.id,chapter:e.chapter,title:e.taskTitle,hint:e.taskHint,step:n,target:{x:t.x,z:t.z,glyph:e.glyph,name:e.location}}}setWeatherInternal(e,t=!1){(this.weather.id!==e||t)&&(this.weather.set(e,t),this.audio.setWeather(e),this.emitter.emit(`weather`,e),this.cloud||this.save())}setWeather(e){this.setWeatherInternal(e,!1),this.toast(`${sd[e].name} · ${sd[e].description}`)}applyWeatherVisuals(e=!1){let t=this.weather.current;this.renderer.toneMappingExposure=t.exposure,this.fog.color.copy(t.fogColor),this.fog.density=t.fogDensity,this.renderer.setClearColor(t.fogColor,1),this.sky&&this.sky.applyLook(t),this.sunLight.color.copy(t.sunColor),this.sunLight.intensity=t.sunIntensity,this.hemiLight.color.copy(t.hemiSky),this.hemiLight.groundColor.copy(t.hemiGround),this.hemiLight.intensity=t.hemiIntensity,this.ambientLight.intensity=t.ambientIntensity,e&&this.weather.update(999)}handleAction(e){this.started&&(this.modal?(e===`KeyE`||e===`Click`)&&this.closeModal():this.pano.active||(e===`Digit1`?this.setWeather(`clear`):e===`Digit2`?this.setWeather(`mist`):e===`Digit3`?this.setWeather(`dusk`):e===`KeyE`||e===`Click`?this.interact():e===`KeyJ`?this.emitter.emit(`codex`):e===`KeyH`?this.emitter.emit(`help`):e===`KeyP`?this.emitter.emit(`photo`):e===`KeyR`?this.emitter.emit(`record`):e===`KeyM`&&this.emitter.emit(`map`)))}handleWheel(e){this.pano.active&&(this.pano.radius=Gu(this.pano.radius+e*.35,210,920))}remoteLook(e,t){this.pano.active?(this.pano.yaw-=e*.004,this.pano.pitch=Gu(this.pano.pitch+t*.0032,.28,1.25)):this.modal||this.input.simulateLook(e,t)}remoteWheel(e){this.handleWheel(e)}remoteKey(e,t){this.started&&this.input.simulateKey(e,t)}remoteTouchAction(e){e===`interact`?this.modal?this.closeModal():this.handleAction(`KeyE`):e===`close-modal`?this.closeModal():e===`panorama-exit`?this.exitPanorama():e===`jump`?this.input.jumpPressed=!0:e===`toggle-codex`&&this.emitter.emit(`codex`)}remoteJoystick(e,t){this.input.setJoystick(e,t)}interact(){!this.started||this.paused||this.modal||this.pano.active||(this.target?this.performInteraction(this.target):this.player.mode===`boat`&&(this.player.disembark(this.shape)?(this.landmarks.boat.speed=0,this.audio.splash(void 0,.8),this.toast(`靠岸。乌篷船会自己回到西渡口。`),this.boatIdle=0,this.boatReturnNotified=!1):this.toast(`这里离岸尚远，再摇两橹。`)))}performInteraction(e){switch(e.kind){case`seal`:e.data&&this.collectSeal(e.data);break;case`scroll`:e.data&&this.openScroll(e.data);break;case`lantern`:{let t=Number(e.data??0);if(this.landmarks.activateLantern(t)){this.audio.chime(),this.audio.splash(void 0,.35),this.ambience.burst(new U(e.pos.x,e.pos.y,e.pos.z),`#ffc370`,30,.6);let t=this.landmarks.litLanterns;t>=3?(this.landmarks.revealSeal(`deng`),this.toast(`三灯俱明 · 石灯径上浮出一枚「灯」印`)):this.toast(`石灯亮起 · 已燃 ${t}/3 盏`),this.save()}break}case`guqin`:this.audio.playGuqinPhrase(),this.landmarks.playGuqin(),this.ambience.burst(this.landmarks.qinPoint,`#e8d7aa`,20,.4),this.ambience.startleBirds(),this.guqinPlayed||(this.guqinPlayed=!0,this.landmarks.revealSeal(`yin`),this.toast(`一曲既终，琴案上生出一枚「音」印`),this.save());break;case`chime`:this.chimePlayed=!0,this.landmarks.ringChime(),this.audio.chime(),this.ambience.startleBirds(),this.ambience.burst(this.landmarks.chimePoint.clone().add(new U(0,1,0)),`#e3e8ce`,24,.6),this.landmarks.revealSeal(`huang`),this.toast(`风过竹梢，铜铃三响，一枚「篁」印落在石上`),this.save();break;case`boat`:if(this.player.mode===`boat`)break;this.player.board(this.landmarks.boat,this.shape),this.player.boatHeading=this.landmarks.boat.heading,this.audio.splash(void 0,1.2),this.toast(`已登乌篷船 · W/S 摇橹，A/D 转舵，E 靠岸`);break;case`altar`:if(this.sealsCollected.size>=7)this.startPanorama();else{this.landmarks.getSealNode(`shan`)?.group.visible&&this.sealsCollected.has(`shan`)&&this.startPanorama();let e=Math.max(0,6-this.sealsCollected.size);e>0&&(this.modal={kind:`notice`,kicker:`望江台 · 石案`,title:`七印未齐`,body:`石案上的凹槽空着。还差 ${e} 枚印章，才能合为一卷山河。回身看看来路，或可翻阅行旅册。`,footnote:`集齐六印，第七印自会显形`,sealGlyph:`山`},this.audio.paper(),this.emitter.emit(`modal-open`,this.modal))}}this.target&&this.computeInteractions(performance.now(),!0)}collectSeal(e){if(this.sealsCollected.has(e))return;let t=ld(e);this.sealsCollected.add(e),this.landmarks.collectSeal(e),this.audio.playSeal(this.sealsCollected.size),this.audio.paper(),this.player.addFovKick(2.2),this.player.addShake(.2);let n=this.landmarks.getSealNode(e)?.group.position??this.player.eyePosition;this.ambience.burst(n,t.color,46,1.1),this.ambience.startleBirds(),this.toast(`得印 · ${t.glyph} · ${t.name}（${this.sealsCollected.size}/7）`),this.sealsCollected.size>=6&&!this.sealsCollected.has(`shan`)&&(this.landmarks.revealSeal(`shan`),window.setTimeout(()=>this.toast(`六印已归。登临望江台，最后一印正在等你。`),1500)),this.openSealModal(t),this.save()}openSealModal(e){this.modal={kind:`seal`,sealId:e.id},this.sealsCollected.size>=7&&(this.pendingPanorama=!0),this.audio.paper(),this.emitter.emit(`modal-open`,this.modal)}openScroll(e){let t=ud(e);this.scrollsRead.add(e),this.landmarks.markScrollRead(e),this.modal={kind:`scroll`,scrollId:t.id},this.audio.paper(),this.emitter.emit(`modal-open`,this.modal),this.save()}closeModal(){this.modal&&(this.modal=null,this.audio.paper(),this.emitter.emit(`modal-close`),this.pendingPanorama&&(this.pendingPanorama=!1,window.setTimeout(()=>{this.started&&!this.modal&&this.startPanorama()},380)),this.computeInteractions(performance.now(),!0))}toggleCodex(){this.emitter.emit(`codex`)}canCollect(e){if(this.sealsCollected.has(e))return!1;let t=this.landmarks.getSealNode(e);return!(!t||!t.visible||e===`shan`&&this.sealsCollected.size<6||e===`zhou`&&this.player.mode!==`boat`&&this.player.position.distanceTo(this.landmarks.getBoatInteractPoint())>13)}computeInteractions(e,t=!1){if(this.pano.active||this.modal){this.target=null,this.prompt&&(this.prompt=null,this.landmarks.setFocus(null),this.emitter.emit(`prompt`,null));return}let n=[],r=this.player.eyePosition,i=new U(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw)),a=e=>e.distanceTo(r),o=e=>a(e)<2.1||new U().subVectors(e,r).setY(0).normalize().dot(i)>-.22;for(let e of ad){let t=this.landmarks.getSealNode(e.id);if(!t||!t.visible||t.collected||!this.canCollect(e.id))continue;let r=t.group.position.clone(),i=e.id===`zhou`?7:4.1;a(r)<=i&&o(r)&&n.push({id:`seal-${e.id}`,kind:`seal`,title:`取印 · ${e.glyph}`,sub:`${e.location} · 七印之一`,focusId:`seal-${e.id}`,radius:i,pos:r,data:e.id})}for(let e of this.landmarks.scrolls.values()){let t=e.position.clone();a(t)<=3.8&&o(t)&&n.push({id:`scroll-${e.id}`,kind:`scroll`,title:`展读 · ${e.def.title.replace(/\s/g,``)}`,sub:`一卷旧题跋`,focusId:`scroll-${e.id}`,radius:3.8,pos:t,data:e.id})}for(let e of this.landmarks.lanterns){if(e.lit)continue;let t=e.position.clone();a(t)<=3.5&&o(t)&&n.push({id:`lantern-${e.index}`,kind:`lantern`,title:`燃灯`,sub:`石灯尚暗，靠近以点亮`,focusId:`lantern-${e.index}`,radius:3.5,pos:t,data:String(e.index)})}if(!this.guqinPlayed){let e=this.landmarks.qinPoint.clone();a(e)<=4.2&&o(e)&&n.push({id:`guqin`,kind:`guqin`,title:`抚琴`,sub:`七弦无声，等你拨响`,focusId:`qin`,radius:4.2,pos:e})}if(!this.chimePlayed){let e=this.landmarks.chimePoint.clone();a(e)<=4.2&&o(e)&&n.push({id:`chime`,kind:`chime`,title:`听风`,sub:`铜铃不响，竹叶有声`,focusId:`chime`,radius:4.2,pos:e})}if(this.player.mode===`walk`){let e=this.landmarks.getBoatInteractPoint();e.distanceTo(r)<=8.2&&n.push({id:`boat`,kind:`boat`,title:`登舟`,sub:this.landmarks.isBoatAtDock()?`乌篷船系在西渡口`:`渔舟停在岸边`,focusId:`boat`,radius:8.2,pos:e})}let s=!(!this.landmarks.getSealNode(`shan`)?.visible||this.sealsCollected.has(`shan`)),c=this.landmarks.altarPoint.clone();!s&&a(c)<=4.5&&o(c)&&n.push({id:`altar`,kind:`altar`,title:this.sealsCollected.size>=7?`再观山河`:this.sealsCollected.size>=6?`观第七印`:`观石案`,sub:this.sealsCollected.size>=7?`七印归一，可再登高`:`望江台上的一方石案`,focusId:`altar`,radius:4.5,pos:c}),n.sort((e,t)=>a(e.pos)-a(t.pos));let l=n[0]??null,u=l?.id!==this.target?.id;this.target=l,l?(this.prompt={id:l.id,key:`E`,title:l.title,sub:l.sub},(u||t)&&this.emitter.emit(`prompt`,this.prompt),this.currentFocus!==l.focusId&&(this.currentFocus=l.focusId,this.landmarks.setFocus(l.focusId))):(this.prompt=null,(u||t)&&this.emitter.emit(`prompt`,null),this.currentFocus&&(this.currentFocus=null,this.landmarks.setFocus(null)))}updateLocation(){let e=this.player.position.x,t=this.player.position.z,n=null;if(this.shape.isOnBridge(e,t,2)?n=`bridge`:Math.hypot(e-this.shape.sites.overlook.x,t-this.shape.sites.overlook.z)<20?n=`overlook`:Math.hypot(e-this.shape.sites.bamboo.x,t-this.shape.sites.bamboo.z)<23?n=`bamboo`:Math.hypot(e-this.shape.sites.dock.x,t-this.shape.sites.dock.z)<17?n=`dock`:Math.hypot(e-this.shape.sites.guqin.x,t-this.shape.sites.guqin.z)<19?n=`guqin`:Math.hypot(e-this.shape.sites.lanternGlade.x,t-this.shape.sites.lanternGlade.z)<18?n=`lanterns`:Math.hypot(e-this.shape.sites.startPavilion.x,t-this.shape.sites.startPavilion.z)<23?n=`start`:this.player.mode===`boat`&&Math.hypot(e-this.shape.sites.islet.x,t-this.shape.sites.islet.z)<36&&(n=`islet`),n===this.lastLocationId)return;if(this.lastLocationId=n,!n){this.location=null,this.emitter.emit(`location`,null);return}let r=cd.find(e=>e.id===n);r&&(this.location={id:n,name:r.name,kicker:r.kicker,description:r.description},this.visitedLocations.add(n),this.emitter.emit(`location`,this.location),this.started&&!this.visitedLocations.has(`seen-${n}`)&&this.visitedLocations.add(`seen-${n}`),this.save())}updateBoatReturn(e){this.player.mode===`boat`?(this.boatIdle=0,this.boatReturnNotified=!1):this.started&&(Math.hypot(this.landmarks.boat.position.x-this.landmarks.boatHome.x,this.landmarks.boat.position.z-this.landmarks.boatHome.z)<2.5?this.boatIdle=0:(this.boatIdle+=e,this.boatIdle>30&&(this.landmarks.setBoatPose(this.landmarks.boatHome.x,this.landmarks.boatHome.z,-.22),this.landmarks.boat.speed=0,this.boatIdle=0,this.boatReturnNotified||(this.boatReturnNotified=!0,this.toast(`渔舟无人，已自行回到西渡口。`)))))}updateCinematic(e,t){let n=Math.sin(t*.035)*1.8;this.camera.position.set(this.attractBase.x+n,this.attractBase.y+Math.sin(t*.05)*.4,this.attractBase.z+Math.cos(t*.03)*1.2);let r=new U(this.attractLook.x+Math.sin(t*.022)*22,this.attractLook.y+Math.sin(t*.04)*1.4,this.attractLook.z);this.camera.lookAt(r),this.camera.fov=58,this.camera.updateProjectionMatrix(),this.updateEnvironment(e,t),this.attractQuat}updateEnvironment(e,t){this.weather.update(e),this.applyWeatherVisuals(!1);let n=this.weather.current;this.sky.update(this.camera,t),this.vegetation.update(t),this.ambience.update(t,e,this.camera,n,this.player.position),this.landmarks.update(t,e,n);let r=this.landmarks.boat.group.position;this.water.update(t,this.camera,n,this.fog.density,r,this.player.mode===`boat`?1:.35);let i=this.started?this.player.position:this.camera.position;this.sunLight.position.set(i.x+n.sunDir.x*110,i.y+n.sunDir.y*110,i.z+n.sunDir.z*110),this.sunLight.target.position.set(i.x,i.y,i.z),this.sunLight.target.updateMatrixWorld(),this.sunLight.castShadow&&(this.shadowAccumulator+=e,this.shadowAccumulator>.15&&(this.shadowAccumulator=0,this.sunLight.shadow.needsUpdate=!0)),this.audio.update(this.distanceToWater(),this.player.speed,this.player.mode===`boat`,e)}distanceToWater(){let e=this.player.position;return Math.max(0,Math.abs(e.x-this.shape.riverCenter(e.z))-this.shape.riverHalfWidth(e.z)+4)}updateGameplay(e,t){if(!this.paused&&!this.modal&&!this.pano.active){let n=this.input.consumeLook();if(this.player.update(e,{forward:this.input.forward,strafe:this.input.strafe,sprint:this.input.sprint,jump:this.input.consumeJump(),lookDx:n.dx,lookDy:n.dy},this.shape,!0),this.audio.setBoatRowing(this.player.mode===`boat`?Math.abs(this.player.boatSpeed)/7:0),this.player.footstepEvent){if(this.player.footstepEvent===`boat`){let e=this.landmarks.boat.group.position;this.ambience.ripple(e.x+this.landmarks.boat.speed*.5,e.z+2.2,.8+Math.abs(this.player.boatSpeed)*.12),this.audio.footstep(`boat`,1)}else{let e=this.player.mode===`boat`?`boat`:this.shape.isOnBridge(this.player.position.x,this.player.position.z,1)?`bridge`:Math.min(Math.abs(this.player.position.x-this.shape.pathX(this.player.position.z,1)),Math.abs(this.player.position.x-this.shape.pathX(this.player.position.z,-1)))<4?`stone`:`grass`;this.audio.footstep(this.player.footstepEvent===`land`?`land`:e)}}this.updateBoatReturn(e),t-this.lastInteractionCheck>.08&&(this.lastInteractionCheck=t,this.computeInteractions(t)),this.input}else this.input.consumeLook(),this.input.consumeJump(),this.prompt&&(this.prompt=null,this.emitter.emit(`prompt`,null),this.landmarks.setFocus(null),this.currentFocus=null);this.pano.active?this.updatePanoramaCamera(e):this.player.updateCamera(t,e),this.pano.active||this.updateLocation(),this.updateEnvironment(e,t)}updatePanoramaCamera(e){this.pano.elapsed+=e,this.pano.dragging||(this.pano.yaw+=e*.018);let t=this.pano.center,n=this.pano.radius,r=this.pano.pitch,i=Math.sin(this.pano.yaw)*Math.cos(r)*n,a=Math.cos(this.pano.yaw)*Math.cos(r)*n,o=Math.sin(r)*n+20,s=new U(t.x+i,o,t.z+a),c=t.clone().add(new U(0,15,-40));if(this.pano.elapsed<4.2){let e=td(Gu(this.pano.elapsed/4.2,0,1));this.camera.position.lerpVectors(this.pano.startPosition,s,e);let t=new ut,n=new Nt().lookAt(this.pano.startPosition,this.pano.startPosition.clone().add(new U(0,0,-1)),new U(0,1,0));t.setFromRotationMatrix(n);let r=new ut,i=new Nt().lookAt(s,c,new U(0,1,0));r.setFromRotationMatrix(i),this.camera.quaternion.slerpQuaternions(this.pano.startQuaternion,r,e),this.camera.fov=Ku(64,50,e)}else this.camera.position.copy(s),this.camera.lookAt(c),this.camera.fov=50;this.camera.updateProjectionMatrix()}startPanorama(){!this.pano.active&&this.started&&(this.audio.ctx&&this.audio.chime(),this.audio.paper(),this.pano.active=!0,this.pano.elapsed=0,this.pano.yaw=.42,this.pano.pitch=.47,this.pano.radius=820,this.pano.center.set(this.shape.riverCenter(-300)+15,10,-300),this.pano.startPosition.copy(this.camera.position),this.pano.startQuaternion.copy(this.camera.quaternion),this.weatherBeforePanorama=this.weather.id,this.weather.id!==`clear`&&(this.weather.set(`clear`,!1),this.audio.setWeather(`clear`)),this.emitter.emit(`panorama-start`),this.prompt=null,this.target=null,this.landmarks.setFocus(null),this.emitter.emit(`prompt`,null),this.canvas.style.cursor=`grab`,this.audio.fadeAmbientForModal(!1))}exitPanorama(){this.pano.active&&(this.pano.active=!1,this.canvas.style.cursor=``,this.player.updateCamera(this.time,0),this.camera.fov=64,this.camera.updateProjectionMatrix(),this.weatherBeforePanorama&&=(this.weather.set(this.weatherBeforePanorama,!1),this.audio.setWeather(this.weatherBeforePanorama),null),this.emitter.emit(`panorama-end`),this.audio.uiTick(!1))}handlePhotoRequest(){this.emitter.emit(`photo-request`)}capturePhoto(){this.renderer.render(this.scene,this.camera);let e=this.canvas,t=e.width,n=e.height,r=document.createElement(`canvas`);r.width=t,r.height=n;let i=r.getContext(`2d`);i.drawImage(e,0,0,t,n);let a=Math.max(1,t/1920);return i.fillStyle=`rgba(239, 230, 210, 0.7)`,i.font=`${28*a}px 'Ma Shan Zheng', 'STKaiti', serif`,i.textAlign=`left`,i.fillText(`千 里 江 山`,60*a,n-110*a),i.font=`${11*a}px 'Noto Serif SC', 'Songti SC', serif`,i.fillStyle=`rgba(242, 234, 216, 0.55)`,i.fillText(`云 游 青 绿 · 实 时 画 境`,62*a,n-82*a),i.strokeStyle=`rgba(163, 61, 44, .75)`,i.strokeRect(t-140*a,n-146*a,62*a,72*a),i.fillStyle=`rgba(163, 61, 44, .85)`,i.font=`${34*a}px 'Ma Shan Zheng', 'STKaiti', serif`,i.fillText(`青`,t-119*a,n-104*a),i.fillStyle=`rgba(255,255,255,0.34)`,i.font=`${10*a}px 'Cormorant Garamond', serif`,i.fillText(new Date().toLocaleDateString(`zh-CN`),62*a,n-52*a),r.toDataURL(`image/png`)}downloadPhoto(){let e=this.capturePhoto(),t=document.createElement(`a`);t.href=e,t.download=`千里江山-云游青绿-${Date.now()}.png`,document.body.appendChild(t),t.click(),t.remove(),this.toast(`已留影 · 山水与你都在卷中`)}toggleRecording(){let e=this.recorder.toggle();this.toast(e.message)}startRecording(){let e=this.recorder.start(60);this.toast(e.message)}stopRecording(){this.recorder.stop()}setParticipants(e){this.participants=Math.max(1,e)}getSavedGame(){return this.saved}hasSavedGame(){return!!this.saved}setQuality(e){this.quality=e,this.renderer.shadowMap.enabled=e!==`low`,this.sunLight.castShadow=e!==`low`,this.layout();try{localStorage.setItem(Mf,e)}catch{}this.emitter.emit(`quality`,e)}loadSaved(){if(!this.cloud)try{let e=localStorage.getItem(jf);if(!e)return;let t=JSON.parse(e);if(!t||t.version!==1)return;this.saved=t,this.sealsCollected=new Set(t.seals.filter(e=>ad.some(t=>t.id===e))),this.scrollsRead=new Set(t.scrolls.filter(e=>od.some(t=>t.id===e))),this.guqinPlayed=!!t.guqin,this.chimePlayed=!!t.chime;let n=Gu(t.lanterns??0,0,3);for(let e=0;e<n;e++)this.landmarks.activateLantern(e);for(let e of this.sealsCollected){let t=this.landmarks.getSealNode(e);t&&(t.collected=!0,t.visible=!0,t.collectT=1,t.group.visible=!1)}n>=3&&this.landmarks.revealSeal(`deng`,!0),this.guqinPlayed&&this.landmarks.revealSeal(`yin`,!0),this.chimePlayed&&this.landmarks.revealSeal(`huang`,!0),this.sealsCollected.size>=6&&this.landmarks.revealSeal(`shan`,!0);for(let e of this.scrollsRead)this.landmarks.markScrollRead(e);t.weather&&sd[t.weather]&&(this.weather.set(t.weather,!0),this.audio.setWeather(t.weather))}catch{this.saved=null}}save(){if(this.cloud||!this.started)return;this.lastSaveAt=performance.now();let e=this.player.position.x,t=this.player.position.z;if(this.player.mode===`boat`){let n=this.shape.nearestLandPoint(e,t);e=n.x,t=n.z}let n={version:1,seals:Array.from(this.sealsCollected),scrolls:Array.from(this.scrollsRead),lanterns:this.landmarks.litLanterns,guqin:this.guqinPlayed,chime:this.chimePlayed,weather:this.weather.id,player:this.started?{x:e,z:t,yaw:this.player.yaw}:null,savedAt:Date.now()};this.saved=n;try{localStorage.setItem(jf,JSON.stringify(n))}catch{}}resetProgress(){try{localStorage.removeItem(jf)}catch{}window.location.reload()}toast(e){this.toastSeq++,this.lastToast={id:this.toastSeq,text:e,at:this.time},this.emitter.emit(`toast`,{id:this.toastSeq,text:e})}pauseRendering(){this.suspended||(this.suspended=!0,cancelAnimationFrame(this.tickHandle),this.audio.setMuted(!0))}resumeRendering(){this.suspended&&!this.disposed&&(this.suspended=!1,this.lastFrame=performance.now(),this.tickHandle=requestAnimationFrame(this.loop))}cloudFrameAccumulator=0;loop(e){if(this.disposed||this.suspended)return;let t=Math.min(.06,Math.max(.001,(e-this.lastFrame)/1e3));if(this.lastFrame=e,this.cloud){if(this.cloudFrameAccumulator+=t,this.cloudFrameAccumulator<1/30){this.tickHandle=requestAnimationFrame(this.loop);return}t=Math.min(.07,this.cloudFrameAccumulator),this.cloudFrameAccumulator=0}this.time+=t,this.fpsSmoothed=this.fpsSmoothed*.94+1/Math.max(t,.001)*.06,this.started?this.paused?(this.updateEnvironment(t,this.time),this.renderer.render(this.scene,this.camera)):(this.updateGameplay(t,this.time),this.renderer.render(this.scene,this.camera)):(this.updateCinematic(t,this.time),this.renderer.render(this.scene,this.camera)),this.updateAdaptiveQuality(t),this.started&&this.time-this.lastSnapshot>.12&&(this.lastSnapshot=this.time,this.emitter.emit(`ui`,this.getUIState())),this.started&&this.time>this.nextAutosaveAt&&(this.nextAutosaveAt=this.time+12,this.save()),this.tickHandle=requestAnimationFrame(this.loop)}updateAdaptiveQuality(e){this.cloud||!this.started||performance.now()-this.startedAt<12e3||(this.adaptiveTimer+=e,!(this.adaptiveTimer<6)&&(this.adaptiveTimer=0,this.quality===`high`&&this.fpsSmoothed<34&&this.adaptiveDowngrades<1?(this.adaptiveDowngrades++,this.setQuality(`medium`),this.emitter.emit(`quality-auto`,`medium`)):this.quality===`medium`&&this.fpsSmoothed<24&&this.adaptiveDowngrades<2&&(this.adaptiveDowngrades++,this.setQuality(`low`),this.emitter.emit(`quality-auto`,`low`))))}pauseAudio(){this.audio.setMuted(!0)}resumeAudio(){this.audio.setMuted(!1)}getAudioStream(){return this.audio.getAudioStream()}async ensureAudio(){await this.audio.unlock()}emit(e,...t){this.emitter.emit(e,...t)}on(e,t){return this.emitter.on(e,t)}requestPointerLock(){this.input.requestPointerLock()}exitPointerLock(){this.input.exitPointerLock()}setInputEnabled(e){this.input.setEnabled(e)}isPointerLocked(){return document.pointerLockElement===this.canvas}dispose(){this.disposed=!0,cancelAnimationFrame(this.tickHandle),this.input.detach(),this.recorder.dispose(),window.removeEventListener(`resize`,this.layout),this.resizeObserver?.disconnect(),this.renderer.dispose(),this.audio.close().catch(()=>void 0)}emitPhoto(){this.handlePhotoRequest()}formatDistanceToTarget(){let e=this.computeObjective();return e?$u(Math.hypot(e.target.x-this.player.position.x,e.target.z-this.player.position.z)):`—`}showRouteHint(){let e=this.computeObjective();return e?`${e.chapter} · ${e.title}`:`七印归一`}get currentTime(){return this.time}get startedTime(){return this.startedAt}get currentPrompt(){return this.prompt}getCurrentWeather(){return this.weather.id}getSealsCollected(){return Array.from(this.sealsCollected)}getScrollsRead(){return Array.from(this.scrollsRead)}getGuqinPlayed(){return this.guqinPlayed}getChimePlayed(){return this.chimePlayed}getLanternsLit(){return this.landmarks.litLanterns}isPanoramaActive(){return this.pano.active}getParticipantCount(){return this.participants}getRecorder(){return this.recorder}getWorldNote(){return`千山叠翠，一江横陈。所有画面与声音均在运行时生成。`}getFormattedRuntime(){return Qu((performance.now()-this.startedAt)/1e3)}getModal(){return this.modal}debugTeleport(e){let t=this.shape.sites[e],n=this.shape.groundAt(t.x,t.z);this.player.setPosition(t.x,t.z,Math.max(.35,n),this.player.yaw)}};function Pf(){return new Promise(e=>requestAnimationFrame(()=>e()))}function Ff(e,t,n,r,i,a){if(!(t.length<2)){e.save(),e.beginPath();for(let r=0;r<t.length;r++){let[i,a]=n(t[r].x,t[r].z);r===0?e.moveTo(i,a):e.lineTo(i,a)}e.lineWidth=r,e.strokeStyle=i,e.lineCap=`round`,e.lineJoin=`round`,a&&e.setLineDash(a),e.stroke(),e.restore()}}function If(e,t,n,r,i,a,o=`local`){let s=e.getBoundingClientRect(),c=Math.max(80,Math.round(s.width||200)),l=Math.min(2,window.devicePixelRatio||1),u=Math.round(c*l);(e.width!==u||e.height!==u)&&(e.width=u,e.height=u);let d=e.getContext(`2d`);if(!d)return;let f=u,p=u;d.setTransform(1,0,0,1,0,0),d.clearRect(0,0,f,p);let m=o===`cloud`?`rgba(240,231,212,.72)`:`rgba(243,234,214,.7)`,h=o===`cloud`?`rgba(240,231,212,.24)`:`rgba(243,234,214,.2)`,g=o===`cloud`?`rgba(126,167,165,.3)`:`rgba(140,176,166,.32)`,_=`rgba(224,190,134,.95)`,v=d.createRadialGradient(f/2,p/2,f*.08,f/2,p/2,f*.52);v.addColorStop(0,o===`cloud`?`rgba(20,34,24,.22)`:`rgba(24,37,28,.12)`),v.addColorStop(1,o===`cloud`?`rgba(13,22,15,.5)`:`rgba(20,31,23,.48)`),d.fillStyle=v,d.beginPath(),d.arc(f/2,p/2,f*.495,0,Math.PI*2),d.fill(),d.strokeStyle=o===`cloud`?`rgba(238,228,208,.2)`:`rgba(245,235,216,.22)`,d.lineWidth=Math.max(1,l*.7),d.beginPath(),d.arc(f/2,p/2,f*.48,0,Math.PI*2),d.stroke(),d.save(),d.beginPath(),d.arc(f/2,p/2,f*.47,0,Math.PI*2),d.clip();let y=f*.47/250,b=(e,t)=>[f/2+(e-n.x)*y,p/2+(t-n.z)*y];d.strokeStyle=h,d.lineWidth=1;for(let e=f*.14;e<f*.48;e+=f*.115)d.beginPath(),d.arc(f/2,p/2,e,0,Math.PI*2),d.globalAlpha=.32,d.stroke(),d.globalAlpha=1;Ff(d,t.river,b,f*.065,g),Ff(d,t.river,b,Math.max(1,l*.6),`rgba(209,224,206,.14)`),Ff(d,t.eastPath,b,f*.018,`rgba(217,195,153,.34)`),Ff(d,t.westPath,b,f*.018,`rgba(217,195,153,.34)`);for(let e of t.branchPaths)Ff(d,e,b,f*.009,`rgba(217,195,153,.24)`,[3*l,4*l]);let[x,S]=b(t.bridge[0].x,t.bridge[0].z),[C,w]=b(t.bridge[1].x,t.bridge[1].z);d.strokeStyle=`rgba(219,206,177,.55)`,d.lineWidth=Math.max(1.4,l*1.4),d.beginPath(),d.moveTo(x,S),d.lineTo(C,w),d.stroke(),d.textAlign=`center`,d.textBaseline=`middle`;for(let e of t.landmarks){let[t,n]=b(e.x,e.z);t<0||t>f||n<0||n>p||(d.globalAlpha=.72,d.fillStyle=`rgba(237,227,205,.56)`,d.font=`${8*l}px 'Noto Serif SC', serif`,d.fillText(e.glyph,t,n-8*l),d.beginPath(),d.arc(t,n,1.6*l,0,Math.PI*2),d.fill(),d.globalAlpha=1)}for(let e of r){let[t,n]=b(e.x,e.z);if(t<-10||t>f+10||n<-10||n>p+10)continue;let r=i.has(e.id);d.beginPath(),d.arc(t,n,r?3.1*l:2.2*l,0,Math.PI*2),d.fillStyle=r?`#b6543f`:`rgba(195,175,141,.38)`,d.fill(),r&&(d.strokeStyle=`rgba(243,225,193,.55)`,d.lineWidth=.8*l,d.stroke())}if(a){let[e,t]=b(a.x,a.z),n=e-f/2,r=t-p/2,i=f*.41,o=Math.hypot(n,r)>i;if(o){let a=Math.atan2(r,n);e=f/2+Math.cos(a)*i,t=p/2+Math.sin(a)*i}d.save(),d.translate(e,t),o?d.rotate(Math.atan2(r,n)+Math.PI/2):d.rotate(Math.PI/4),d.fillStyle=_;let s=3.6*l;d.beginPath(),d.moveTo(0,-s),d.lineTo(s,0),d.lineTo(0,s),d.lineTo(-s,0),d.closePath(),d.fill(),d.restore(),o||(d.font=`${7*l}px 'Noto Serif SC', serif`,d.fillStyle=_,d.fillText(a.glyph??`印`,e,t-8*l))}d.save(),d.translate(f/2,p/2),d.rotate(-n.yaw),d.fillStyle=`rgba(245,231,202,.92)`,d.beginPath(),d.moveTo(0,-7*l),d.lineTo(4.2*l,4.5*l),d.lineTo(0,2.2*l),d.lineTo(-4.2*l,4.5*l),d.closePath(),d.fill(),d.strokeStyle=`rgba(26,39,29,.5)`,d.lineWidth=.8*l,d.stroke(),d.restore(),d.restore(),d.fillStyle=m,d.font=`${8*l}px 'Noto Serif SC', serif`,d.textAlign=`center`,d.fillText(`北`,f/2,12*l),d.strokeStyle=`rgba(243,233,213,.3)`,d.beginPath(),d.moveTo(f/2,17*l),d.lineTo(f/2,22*l),d.stroke()}var Lf=[``,`壹`,`贰`,`叁`,`肆`,`伍`,`陆`,`柒`];function Q(e){let t=document.getElementById(e);if(!t)throw Error(`Missing UI element #${e}`);return t}function Rf(e){let t=e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}var zf=class{game;splash=Q(`splash`);loading=Q(`loading-screen`);hud=Q(`hud`);overlay=`none`;previousOverlay=`none`;hadPointerLock=!1;suppressPause=!1;starting=!1;codexTab=`seals`;uiState=null;sealPips=new Map;toastTimers=new Set;pendingOpen=!1;pauseBeforeHelp=!1;cloudCreateHandler;cloudJoinHandler;cloudCancelHandler;cloudLaunchActive=!1;suppressUiKeyUntil=0;constructor(e){this.game=e,this.buildSeals(),this.bind(),this.bindGameEvents(),this.refreshSave(),this.applySettings(e)}setCloudHandlers(e){this.cloudCreateHandler=e.create,this.cloudJoinHandler=e.join,this.cloudCancelHandler=e.cancel}showReady(){this.loading.classList.add(`leaving`),window.setTimeout(()=>this.loading.classList.add(`hidden`),1100),this.splash.classList.remove(`hidden`),this.refreshSave()}setLoading(e,t){let n=document.getElementById(`loading-progress-bar`),r=document.getElementById(`loading-message`),i=document.getElementById(`loading-percent`);n&&(n.style.width=`${Math.max(4,Math.min(100,e))}%`),r&&(r.textContent=t),i&&(i.textContent=`${Math.round(e)}%`)}showCloudLaunch(e=`正在寻找一间临水的房间……`){Q(`cloud-launch-status`).classList.remove(`hidden`),Q(`cloud-launch-message`).textContent=e,Q(`cloud-launch-hint`).textContent=`首次启动需要唤醒无头画师，约 5–12 秒。`;let t=document.getElementById(`cloud-launch-bar`);t&&(t.style.width=`8%`),this.overlay=`cloud-launch`,this.cloudLaunchActive=!0,this.game.setInputEnabled(!1)}setCloudProgress(e,t){let n=document.getElementById(`cloud-launch-bar`);n&&(n.style.width=`${Math.max(6,Math.min(100,e))}%`);let r=document.getElementById(`cloud-launch-message`);r&&(r.textContent=t)}cloudError(e){this.cloudLaunchActive=!1;let t=document.getElementById(`cloud-launch-hint`);t&&(t.textContent=e);let n=document.getElementById(`cloud-launch-bar`);n&&(n.style.width=`0%`);let r=document.getElementById(`cloud-note`);r&&(r.textContent=e),this.game.setInputEnabled(!0),window.setTimeout(()=>{this.cloudLaunchActive},10)}hideCloudLaunch(){Q(`cloud-launch-status`).classList.add(`hidden`),this.cloudLaunchActive=!1,this.overlay===`cloud-launch`&&(this.overlay=`none`)}hideLocalStage(){this.splash.classList.add(`hidden`),this.hud.classList.add(`hidden`),this.loading.classList.add(`hidden`),document.body.classList.remove(`playing`)}buildSeals(){let e=Q(`seal-row`);e.innerHTML=``;for(let t of ad){let n=document.createElement(`span`);n.className=`seal-pip`,n.dataset.seal=t.id,n.textContent=t.glyph,n.title=`${t.name} · ${t.location}`,e.appendChild(n),this.sealPips.set(t.id,n)}}refreshSave(){let e=Q(`btn-continue`),t=Q(`continue-label`);if(this.game.hasSavedGame()){let n=this.game.getSavedGame();e.classList.remove(`hidden`),n&&(t.textContent=`${n.seals.length} 印 · ${sd[n.weather]?.name??`晴岚`}`)}else e.classList.add(`hidden`)}bind(){Q(`btn-local`).addEventListener(`click`,()=>{this.starting||this.startLocal(!1)}),Q(`btn-continue`).addEventListener(`click`,()=>{this.starting||this.startLocal(!0)}),Q(`btn-help-top`).addEventListener(`click`,()=>this.openHelp(`splash`)),Q(`btn-cloud-create`).addEventListener(`click`,()=>{this.cloudLaunchActive||this.cloudCreateHandler?.()}),Q(`btn-cloud-join`).addEventListener(`click`,()=>{if(this.cloudLaunchActive)return;let e=Q(`room-code-input`).value.trim().toUpperCase();e?this.cloudJoinHandler?.(e,Q(`spectator-toggle`).checked):(this.setCloudNote(`先写下房间码，再渡云而去。`),Q(`room-code-input`).focus())}),Q(`room-code-input`).addEventListener(`keydown`,e=>{e.key===`Enter`&&Q(`btn-cloud-join`).click()}),Q(`cloud-launch-cancel`).addEventListener(`click`,()=>{this.cloudCancelHandler?.(),this.hideCloudLaunch()}),Q(`btn-menu`).addEventListener(`click`,()=>this.openPause()),Q(`btn-codex`).addEventListener(`click`,()=>this.openCodex()),Q(`btn-photo`).addEventListener(`click`,()=>this.takePhoto()),Q(`btn-record`).addEventListener(`click`,()=>this.toggleRecording()),Q(`weather-switch`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-weather]`);t&&this.game.setWeather(t.dataset.weather)}),Q(`scroll-close`).addEventListener(`click`,()=>this.closeScroll()),Q(`scroll-layer`).addEventListener(`click`,e=>{e.target===Q(`scroll-layer`)&&this.closeScroll()}),Q(`codex-close`).addEventListener(`click`,()=>this.closeCodex()),Q(`codex-close-foot`).addEventListener(`click`,()=>this.closeCodex()),Q(`codex-screen`).addEventListener(`click`,e=>{e.target===Q(`codex-screen`)&&this.closeCodex()}),document.querySelectorAll(`[data-codex-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{this.codexTab=e.dataset.codexTab,document.querySelectorAll(`[data-codex-tab]`).forEach(t=>t.classList.toggle(`active`,t===e)),this.renderCodex()})}),Q(`pause-resume`).addEventListener(`click`,()=>this.resumeFromPause()),Q(`pause-help`).addEventListener(`click`,()=>this.openHelp(`pause`)),Q(`pause-photo`).addEventListener(`click`,()=>{this.game.downloadPhoto()}),Q(`pause-reset`).addEventListener(`click`,()=>{window.confirm(`重头入画？已收的印章与题跋都会散入云烟。`)&&this.game.resetProgress()}),Q(`pause-quit`).addEventListener(`click`,()=>{location.reload()}),Q(`help-close`).addEventListener(`click`,()=>this.closeHelp()),Q(`help-close-foot`).addEventListener(`click`,()=>this.closeHelp()),Q(`help-screen`).addEventListener(`click`,e=>{e.target===Q(`help-screen`)&&this.closeHelp()}),Q(`btn-panorama-exit`).addEventListener(`click`,()=>this.game.exitPanorama()),Q(`btn-panorama-photo`).addEventListener(`click`,()=>this.game.downloadPhoto());let e=Q(`setting-sensitivity`);e.addEventListener(`input`,()=>{let t=Number(e.value);this.game.input.sensitivity=t,Q(`sensitivity-value`).textContent=t.toFixed(2);try{localStorage.setItem(`qianli-sensitivity`,String(t))}catch{}});let t=Q(`setting-volume`);t.addEventListener(`input`,()=>{let e=Number(t.value)/100;this.game.audio.setVolume(e),Q(`volume-value`).textContent=String(Math.round(e*100));try{localStorage.setItem(`qianli-volume`,String(e))}catch{}});let n=Q(`setting-quality`);n.addEventListener(`change`,()=>{this.game.setQuality(n.value),this.toast(`画境质感 · ${n.options[n.selectedIndex].text}`)});let r=Q(`setting-bob`);r.addEventListener(`change`,()=>{this.game.player.headBobEnabled=r.checked;let e=r.parentElement?.querySelector(`output`);e&&(e.textContent=r.checked?`开`:`关`)}),document.addEventListener(`keydown`,this.onDocumentKeyDown,{capture:!0}),document.addEventListener(`click`,e=>{this.game.started&&this.overlay===`none`&&!this.game.isPanoramaActive()&&e.target===this.game.canvas&&!this.game.isPointerLocked()&&this.requestLock()})}setCloudNote(e){let t=document.getElementById(`cloud-note`);t&&(t.textContent=e)}bindGameEvents(){this.game.on(`ui`,e=>this.applyState(e)),this.game.on(`modal-open`,e=>this.onModalOpen(e)),this.game.on(`toast`,(...e)=>{let t=e[0];t&&this.toast(t.text)}),this.game.on(`prompt`,()=>{this.uiState&&this.applyPrompt(this.uiState)}),this.game.on(`location`,e=>{e&&this.showLocation(e)}),this.game.on(`pointerlock`,e=>this.onPointerLock(!!e)),this.game.on(`codex`,()=>this.openCodex()),this.game.on(`help`,()=>this.openHelp(`game`)),this.game.on(`photo`,()=>this.takePhoto()),this.game.on(`record`,()=>this.toggleRecording()),this.game.on(`map`,()=>{this.codexTab=`journey`,this.openCodex()}),this.game.on(`panorama-start`,()=>this.onPanoramaStart()),this.game.on(`panorama-end`,()=>this.onPanoramaEnd()),this.game.on(`recording-state`,(...e)=>this.updateRecording(e[0])),this.game.on(`fatal`,(...e)=>{Q(`fatal-error`).classList.remove(`hidden`),Q(`fatal-message`).textContent=String(e[0]??`未知错误`)}),this.game.on(`quality-auto`,(...e)=>{this.toast(`为流畅计，画境自动调至 ${e[0]===`medium`?`中`:`低`} 质。`),this.uiState&&this.applyState(this.uiState)})}startLocal(e){this.starting=!0,this.game.ensureAudio().catch(()=>void 0),this.game.start({resume:e}),this.game.setInputEnabled(!0),this.suppressPause=!0,this.splash.classList.add(`leaving`),this.hud.classList.remove(`hidden`),document.body.classList.add(`playing`),this.overlay=`none`,window.setTimeout(()=>{this.splash.classList.add(`hidden`),this.starting=!1,this.requestLock()},950),this.showLocation({kicker:`卷首 · 青绿`,name:`入画`,description:`莫急，先听一听水声。`}),this.updateFromGameState()}requestLock(){this.game.started&&!this.game.isPanoramaActive()&&(this.suppressPause=!0,this.game.requestPointerLock(),window.setTimeout(()=>{this.suppressPause=!1},700))}onPointerLock(e){e?(this.hadPointerLock=!0,this.suppressPause=!1):this.hadPointerLock&&!this.suppressPause&&this.game.started&&this.overlay===`none`&&!this.game.isPanoramaActive()&&!this.game.modal&&this.openPause()}applyState(e){if(this.uiState=e,!this.game.started)return;let t=Q(`objective-title`),n=Q(`objective-hint`),r=Q(`objective-step`),i=Q(`objective-distance`),a=Q(`objective-weather`);e.objective?(t.textContent=e.objective.title,n.textContent=e.objective.hint,r.textContent=Lf[e.objective.step]??String(e.objective.step),i.textContent=`目标 ${$u(Math.hypot(e.objective.target.x-e.player.x,e.objective.target.z-e.player.z))}`):(t.textContent=`七印归一`,n.textContent=`回望江台，再观山河。`),a.textContent=e.weatherLabel,document.querySelectorAll(`[data-weather]`).forEach(t=>{t.classList.toggle(`active`,t.dataset.weather===e.weather)}),this.updateSeals(e),this.applyPrompt(e),this.compass(e),this.updateMinimap(e);let o=Q(`fps-value`);o.textContent=String(e.fps);let s=Q(`quality-label`);s.textContent=this.game.quality===`high`?`高`:this.game.quality===`medium`?`中`:`低`;let c=Q(`boat-panel`);if(e.mode===`boat`){c.classList.remove(`hidden`);let t=Q(`boat-speed`);t.textContent=e.player.speed<.5?`泊舟`:e.player.speed>5?`破浪`:`摇橹`}else c.classList.add(`hidden`);let l=Q(`minimap-coord`),u=this.game.getMapData().landmarks[0];l.textContent=`离卷首 ${(Math.hypot(e.player.x-u.x,e.player.z-u.z)/100).toFixed(1)} 里`;let d=this.game.isPointerLocked();document.body.classList.toggle(`playing`,d&&!this.game.modal&&this.overlay===`none`&&!this.game.isPanoramaActive())}updateSeals(e){let t=new Set(e.collected),n=e.objective?.sealId;for(let e of ad){let r=this.sealPips.get(e.id);r&&(r.classList.toggle(`collected`,t.has(e.id)),r.classList.toggle(`next`,!t.has(e.id)&&n===e.id),r.title=t.has(e.id)?`${e.name} · 已得`:`${e.name} · ${e.location}`)}let r=Q(`seal-count`);r.textContent=String(t.size)}applyPrompt(e){let t=Q(`interact-prompt`),n=Q(`reticle`);e.prompt&&!this.game.modal&&!this.game.isPanoramaActive()?(t.classList.remove(`hidden`),Q(`interact-title`).textContent=e.prompt.title,Q(`interact-sub`).textContent=e.prompt.sub,n.classList.add(`active`)):(t.classList.add(`hidden`),n.classList.remove(`active`))}compass(e){let t=Q(`compass-target`),n=Q(`compass-distance`),r=Q(`compass-target-glyph`);if(!e.target){t.style.opacity=`0`,n.textContent=`—`;return}t.style.opacity=`1`,r.textContent=e.target.glyph;let i=e.target.x-e.player.x,a=e.target.z-e.player.z,o=Rf(Math.atan2(i,-a)- -e.player.yaw),s=Math.max(-.92,Math.min(.92,o/(Math.PI*.62)));t.style.left=`${50+s*38}%`,n.textContent=$u(Math.hypot(i,a)),t.classList.toggle(`behind`,Math.abs(o)>Math.PI*.5)}updateMinimap(e){let t=Q(`minimap`);if(!t)return;let n=this.game.getMapData();If(t,n,{x:e.player.x,z:e.player.z,yaw:e.player.yaw},n.seals,new Set(e.collected),e.target)}updateFromGameState(){this.applyState(this.game.getUIState())}onModalOpen(e){if(!e||this.overlay!==`none`&&this.overlay!==`scroll`)return;let t=e;this.overlay=`scroll`,this.suppressUiKeyUntil=performance.now()+320,this.game.setInputEnabled(!1),this.game.exitPointerLock(),this.suppressPause=!0,this.renderScroll(t),Q(`scroll-layer`).classList.remove(`hidden`),Q(`interact-prompt`).classList.add(`hidden`),this.game.audio.paper(),window.setTimeout(()=>{Q(`scroll-close`).focus({preventScroll:!0})},80)}renderScroll(e){let t=Q(`scroll-kicker`),n=Q(`scroll-title`),r=Q(`scroll-index`),i=Q(`scroll-content`),a=Q(`scroll-seal`),o=Q(`scroll-footnote`);if(e.kind===`seal`){let s=ld(e.sealId);t.textContent=`${s.chapter} · 得 印`,n.textContent=`${s.glyph} · ${s.name}`,r.textContent=s.location,a.textContent=s.glyph,o.textContent=`已收录于行旅册 · ${this.game.getSealsCollected().length}/7`,i.innerHTML=`
        <div class="poem-block">${s.poem.replace(/\n/g,`<br>`)}</div>
        ${s.body.map(e=>`<p>${e}</p>`).join(``)}
        <div class="lore-grid">${s.lore.map(e=>`<div class="lore-item"><b>${e.title}</b>${e.text}</div>`).join(``)}</div>
      `,this.game.getSealsCollected().length>=7&&(o.textContent=`七印归一 · 收卷后可自望江台俯瞰全卷`)}else if(e.kind===`scroll`){let s=ud(e.scrollId);t.textContent=s.kicker,n.textContent=s.title,r.textContent=s.location,a.textContent=s.sealGlyph,o.textContent=s.footnote,i.innerHTML=`
        <div class="poem-block">${s.poem.replace(/\n/g,`<br>`)}</div>
        ${s.body.map(e=>`<p>${e}</p>`).join(``)}
        <div class="lore-grid">
          <div class="lore-item"><b>画中境</b>所有山石、江水、舟桥皆在运行时生成，无一张贴图山水。</div>
          <div class="lore-item"><b>题记</b>青绿设色，绢本手卷，墨线为骨，矿物色为肉。</div>
        </div>
      `}else t.textContent=e.kicker,n.textContent=e.title,r.textContent=`卷中偶记`,a.textContent=e.sealGlyph,o.textContent=e.footnote,i.innerHTML=`<p>${e.body}</p>`;Q(`scroll-layer`).classList.remove(`hidden`),Q(`scroll-content`).scrollTop=0}closeScroll(){this.overlay===`scroll`&&(this.game.closeModal(),Q(`scroll-layer`).classList.add(`hidden`),this.overlay=`none`,this.suppressPause=!0,this.game.setInputEnabled(!0),this.game.audio.uiTick(!1),this.game.getSealsCollected().length>=ad.length||this.requestLock())}openCodex(){this.game.started&&this.overlay===`none`&&!this.game.isPanoramaActive()&&(this.overlay=`codex`,this.suppressUiKeyUntil=performance.now()+320,this.pauseBeforeHelp=!1,this.game.setPaused(!0),this.game.setInputEnabled(!1),this.game.exitPointerLock(),this.suppressPause=!0,this.codexTab=`seals`,document.querySelectorAll(`[data-codex-tab]`).forEach(e=>{e.classList.toggle(`active`,e.dataset.codexTab===`seals`)}),this.renderCodex(),Q(`codex-screen`).classList.remove(`hidden`),this.game.audio.uiTick(!0))}renderCodex(){let e=Q(`codex-content`),t=Q(`codex-footnote`),n=new Set(this.game.getSealsCollected()),r=new Set(this.game.getScrollsRead());if(this.codexTab===`seals`)e.innerHTML=`<div class="codex-seal-grid">${ad.map(e=>{let t=n.has(e.id);return`<article class="codex-seal ${t?`collected`:``}">
          <div class="big-glyph">${t?e.glyph:`印`}</div>
          <h4>${t?e.name:`未得`}</h4>
          <p>${t?e.location:`尚在山水之间`}</p>
          ${t?``:`<span class="seal-lock">待寻</span>`}
        </article>`}).join(``)}</div>`,t.textContent=`七印 · 已得 ${n.size} / 7`;else if(this.codexTab===`notes`)e.innerHTML=`<div class="codex-notes">${od.map(e=>{let t=r.has(e.id);return`<article class="note-entry ${t?``:`locked`}">
          <div class="note-title">${t?e.title:`未读之跋`}</div>
          <div class="note-body">${t?e.poem.replace(/\n/g,` · `):`尚在${e.location}的旧案上。`}</div>
        </article>`}).join(``)}</div>`,t.textContent=`题跋 · 已读 ${r.size} / ${od.length}`;else{let i=this.game.getFormattedRuntime(),a=this.game.getUIState(),o=this.game.getMapData().landmarks[0],s=Math.hypot(a.player.x-o.x,a.player.z-o.z);e.innerHTML=`<div class="codex-journey">
        <div>
          <div class="journey-stat"><span>七印</span><b>${n.size} / 7</b></div>
          <div class="journey-stat"><span>题跋</span><b>${r.size} / ${od.length}</b></div>
          <div class="journey-stat"><span>石灯</span><b>${this.game.getLanternsLit()} / 3</b></div>
          <div class="journey-stat"><span>画中时辰</span><b>${i}</b></div>
          <div class="journey-stat"><span>行迹</span><b>${(s/100).toFixed(1)} 里</b></div>
          <div class="journey-stat"><span>天气</span><b>${sd[this.game.getCurrentWeather()].name}</b></div>
        </div>
        <div class="codex-journey-copy">
          <p>你已走过 ${this.game.getLanternsLit()>0?`有灯`:`无灯`}的山径，听过 ${this.game.getGuqinPlayed()?`一段`:`尚未`}琴声，${this.game.getChimePlayed()?`也`:`尚未`}敲响竹中风铃。</p>
          <p>印章不必按顺序收。它们只是山水留下的坐标，提醒你曾经在这里停过。</p>
          <p>${n.size>=7?`七印归一。望江台的石案已为你展开另一重视角。`:`继续走吧。最好看的那一笔，往往在下一步。`}</p>
        </div>
      </div>`,t.textContent=`行旅册 · 自动收录`}}closeCodex(){this.overlay===`codex`&&(Q(`codex-screen`).classList.add(`hidden`),this.overlay=`none`,this.game.setPaused(!1),this.game.setInputEnabled(!0),this.suppressPause=!1,this.requestLock())}openPause(){if(!this.game.started||this.overlay!==`none`||this.game.isPanoramaActive())return;this.overlay=`pause`,this.suppressUiKeyUntil=performance.now()+220,this.game.setPaused(!0),this.game.setInputEnabled(!1),this.game.exitPointerLock(),this.suppressPause=!0,this.pauseBeforeHelp=!1;let e=Q(`setting-quality`);e.value=this.game.quality,Q(`pause-screen`).classList.remove(`hidden`)}resumeFromPause(){this.overlay===`pause`&&(this.game.ensureAudio().catch(()=>void 0),Q(`pause-screen`).classList.add(`hidden`),this.overlay=`none`,this.game.setPaused(!1),this.game.setInputEnabled(!0),this.game.audio.uiTick(!1),this.suppressPause=!1,this.requestLock())}openHelp(e){this.overlay!==`help`&&(this.previousOverlay=this.overlay,this.overlay=`help`,this.suppressUiKeyUntil=performance.now()+320,this.pauseBeforeHelp=e===`pause`,e===`pause`&&Q(`pause-screen`).classList.add(`hidden`),e===`game`&&this.game.started&&(this.game.setPaused(!0),this.game.setInputEnabled(!1),this.game.exitPointerLock(),this.suppressPause=!0),Q(`help-screen`).classList.remove(`hidden`),this.game.audio.uiTick(!0))}closeHelp(){this.overlay===`help`&&(Q(`help-screen`).classList.add(`hidden`),this.pauseBeforeHelp?(this.overlay=`pause`,Q(`pause-screen`).classList.remove(`hidden`)):(this.overlay=`none`,this.game.started&&(this.game.setPaused(!1),this.game.setInputEnabled(!0),this.suppressPause=!1,this.requestLock())))}onPanoramaStart(){this.overlay=`panorama`,this.suppressPause=!0,this.hud.classList.add(`hidden`),Q(`panorama-ui`).classList.remove(`hidden`),this.game.exitPointerLock(),document.body.classList.remove(`playing`),this.game.setInputEnabled(!0),this.game.setPaused(!1)}onPanoramaEnd(){this.overlay===`panorama`&&(Q(`panorama-ui`).classList.add(`hidden`),this.hud.classList.remove(`hidden`),this.overlay=`none`,this.suppressPause=!1,document.body.classList.add(`playing`),this.requestLock())}onDocumentKeyDown=e=>{let t=e.target;t&&(t.tagName===`INPUT`||t.tagName===`SELECT`||t.tagName===`TEXTAREA`)||performance.now()<this.suppressUiKeyUntil||(this.overlay===`scroll`&&(e.code===`KeyE`||e.code===`Escape`)?(e.preventDefault(),this.closeScroll()):this.overlay===`codex`&&(e.code===`KeyJ`||e.code===`Escape`)?(e.preventDefault(),this.closeCodex()):this.overlay===`help`&&(e.code===`Escape`||e.code===`KeyH`)?(e.preventDefault(),this.closeHelp()):this.overlay===`pause`&&e.code===`Escape`?(e.preventDefault(),this.resumeFromPause()):this.overlay===`panorama`&&(e.code===`Escape`||e.code===`KeyE`)&&(e.preventDefault(),this.game.exitPanorama()))};toast(e){let t=Q(`toast-layer`),n=document.createElement(`div`);for(n.className=`toast`,n.textContent=e,t.appendChild(n);t.childElementCount>3;)t.firstElementChild?.remove();let r=window.setTimeout(()=>{n.classList.add(`out`),window.setTimeout(()=>n.remove(),550),this.toastTimers.delete(r)},4300);this.toastTimers.add(r)}showLocation(e){let t=Q(`location-card`);Q(`location-kicker`).textContent=e.kicker,Q(`location-name`).textContent=e.name,Q(`location-sub`).textContent=e.description,Q(`hud-location`).textContent=e.name,t.classList.remove(`hidden`),t.style.animation=`none`,t.offsetWidth,t.style.animation=``,window.setTimeout(()=>t.classList.add(`hidden`),5200)}takePhoto(){this.game.started&&this.game.downloadPhoto()}toggleRecording(){this.game.started&&(this.game.recorder.recording?this.game.stopRecording():this.game.startRecording())}updateRecording(e){let t=Q(`recording-pill`),n=Q(`btn-record`);e.recording?(t.classList.remove(`hidden`),n.classList.add(`recording`),Q(`recording-time`).textContent=Qu(e.elapsed),Q(`recording-limit`).textContent=`/ ${Qu(e.limit)}`):(t.classList.add(`hidden`),n.classList.remove(`recording`)),e.error&&this.toast(e.error)}applySettings(e){let t=1,n=.62;try{t=Number(localStorage.getItem(`qianli-sensitivity`))||1,n=Number(localStorage.getItem(`qianli-volume`))||.62}catch{}e.input.sensitivity=t,e.audio.setVolume(n),Q(`setting-sensitivity`).value=String(t),Q(`setting-volume`).value=String(Math.round(n*100)),Q(`sensitivity-value`).textContent=t.toFixed(2),Q(`volume-value`).textContent=String(Math.round(n*100));let r=Q(`setting-quality`);r.value=e.quality}showFatal(e){Q(`fatal-error`).classList.remove(`hidden`),Q(`fatal-message`).textContent=e}get currentHudState(){return this.uiState}},Bf=[``,`壹`,`贰`,`叁`,`肆`,`伍`,`陆`,`柒`],Vf=[`low`,`medium`,`high`];function Hf(e,t,n,r=``,i=!1){let a=location.protocol===`https:`?`wss:`:`ws:`,o=new URLSearchParams;return o.set(`room`,e),o.set(`name`,t),o.set(`role`,n),o.set(`stream`,i?`mjpeg`:`auto`),o.set(`quality`,`medium`),r&&o.set(`viewerToken`,r),`${a}//${location.host}/ws/play?${o.toString()}`}async function Uf(){let e=await fetch(`/api/rooms`,{method:`POST`,headers:{"content-type":`application/json`},body:`{}`});if(!e.ok){let t=await e.text().catch(()=>``);throw Error(t||`开房失败`)}let t=await e.json();if(!t.ok||!t.room)throw Error(t.error||`开房失败`);return t.room}async function Wf(e){let t=await fetch(`/api/rooms/${encodeURIComponent(e.toUpperCase())}`);if(!t.ok){let e=await t.json().catch(()=>({error:`房间不存在`}));throw Error(e.error||`房间不存在`)}let n=await t.json();if(!n.ok||!n.room)throw Error(n.error||`房间不存在`);return n.room}var Gf=class{room;role;name;hooks;forceMjpeg;ws=null;viewerToken=``;seatId=``;viewerId=``;stream=null;iceServers=[];pc=null;dc=null;video=document.getElementById(`cloud-video`);frameCanvas=document.getElementById(`cloud-frame`);frameCtx=this.frameCanvas.getContext(`2d`);media=document.getElementById(`cloud-media`);hud=document.getElementById(`cloud-hud`);lockCover=document.getElementById(`cloud-lock-cover`);modalLayer=document.getElementById(`cloud-scroll-layer`);staticUI=null;state=null;metrics={mode:`webrtc`,codec:`—`,width:0,height:0,fps:0,bitrateKbps:0,latencyMs:0,networkRttMs:0,inputAckMs:0,jitterMs:0,packetLoss:0,frames:0,decodeMs:0};joinedOnce=!1;streamReady=!1;leaving=!1;suppressMenu=!1;modalVisible=!1;modalClosing=!1;codexOpen=!1;helpOpen=!1;menuOpen=!1;lockRequested=!1;pointerWasLocked=!1;touchMode=!1;pendingLookX=0;pendingLookY=0;lookRaf=0;predictX=0;predictY=0;predictRaf=0;seq=0;pendingInputs=new Map;networkRtt=0;inputAckMs=0;rttTimer=0;metricsTimer=0;reconnectAttempts=0;reconnectTimer=0;lastStats=null;lastMjpegStats=null;mjpegBytes=0;mjpegFrames=0;lastFrameMeta=null;decoding=!1;pendingFrame=null;lastFrameAt=0;streamReadyAt=0;lastUiAt=0;lastToastId=0;lastLocationId=null;quality=`medium`;qualityDowngrades=0;lastQualityCheck=0;lastDot=0;panoramaMode=!1;panoramaNote;metricsDetail;touchStick;joystickPointer=null;lookPointer=null;lookPointerLast={x:0,y:0};constructor(e,t){this.room=e.room,this.role=e.role,this.name=e.name,this.forceMjpeg=!!e.forceMjpeg,this.hooks=t,this.touchMode=matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>0,this.panoramaNote=document.createElement(`div`),this.panoramaNote.className=`cloud-panorama-note hidden`,this.panoramaNote.innerHTML=`<span>七印归一</span><b>按 E 归去 · 拖动以观山河</b>`,this.hud?.appendChild(this.panoramaNote),this.metricsDetail=document.createElement(`div`),this.metricsDetail.className=`cloud-metrics-detail hidden`,this.hud?.appendChild(this.metricsDetail),this.touchStick=document.getElementById(`touch-stick`),this.bindUI(),this.buildSealPips()}start(){this.hooks.onProgress(4,`寻找一间临水的云房……`),this.openSocket()}openSocket(){this.leaving||(this.ws=new WebSocket(Hf(this.room,this.name,this.role,this.viewerToken,this.forceMjpeg)),this.ws.binaryType=`arraybuffer`,this.ws.onopen=()=>{this.reconnectAttempts=0,this.hooks.onProgress(16,`云路已接，正在唤醒画师……`),this.startHeartbeat()},this.ws.onmessage=e=>this.onSocketMessage(e),this.ws.onerror=()=>void 0,this.ws.onclose=()=>{this.stopHeartbeat(),!this.leaving&&(this.joinedOnce?this.onDisconnected():this.hooks.onError(`云路未能接通。请确认云服务已经启动（npm run dev）。`))})}onSocketMessage(e){if(typeof e.data!=`string`){e.data instanceof ArrayBuffer&&this.onMjpegFrame(e.data);return}let t;try{t=JSON.parse(e.data)}catch{return}switch(t.type){case`progress`:this.hooks.onProgress(t.pct,t.message);break;case`joined`:this.onJoined(t);break;case`ui-static`:this.staticUI=t.state,this.state&&this.updateHud(this.state);break;case`ui`:this.onUI(t.state);break;case`answer`:this.onAnswer(t.sdp).catch(e=>this.fallback(String(e)));break;case`ice`:this.onRemoteIce(t.candidate);break;case`mode`:this.switchToMjpeg(t.stream);break;case`frame-meta`:this.lastFrameMeta={seq:t.seq,ts:t.ts,width:t.width,height:t.height};break;case`pong`:t.t>0&&(this.networkRtt=Math.max(0,performance.now()-t.t));break;case`ack`:this.onInputAck(t.seq,t.clientTime,t.appliedAt);break;case`presence`:break;case`error`:this.showError(t.message),this.joinedOnce||(this.hooks.onError(t.message),this.leaving=!0,this.ws?.close());break;case`peer-closed`:break;case`kicked`:this.showError(t.reason)}}onJoined(e){let t=!this.joinedOnce;this.joinedOnce=!0,this.viewerToken=e.viewerToken,this.seatId=e.seatId,this.viewerId=e.viewerId,this.stream=e.stream,this.iceServers=e.iceServers??[],this.quality=(e.stream.mode,`medium`),this.reconnectAttempts=0,window.clearTimeout(this.reconnectTimer),t?(this.enterViewer(),this.hooks.onJoined()):(this.hideError(),this.hideMenu()),document.getElementById(`cloud-room-code`).textContent=`卷号 ${this.room}`;let n=document.getElementById(`cloud-spectator-badge`),r=document.getElementById(`cloud-player-count`);if(this.role===`spectator`?(n?.classList.remove(`hidden`),this.lockCover.classList.add(`hidden`)):(n?.classList.add(`hidden`),r?.classList.remove(`hidden`)),e.peers?.length){let t=new Set(e.peers.map(e=>e.seatId)).size;this.setPlayerCount(t)}this.stream&&this.setStreamInfo(this.stream),this.stream?.mode===`mjpeg`?this.switchToMjpeg(this.stream):this.setupWebRTC(),this.startMetrics()}enterViewer(){document.body.classList.add(`cloud-viewer`),document.body.classList.remove(`playing`),document.getElementById(`cloud-viewer`)?.classList.remove(`hidden`),this.hud.classList.add(`hidden`),this.lockCover.classList.add(`hidden`),this.media.classList.remove(`capture-frame`),this.video.classList.remove(`hidden`),this.frameCanvas.style.display=`none`,this.showWaiting(!0),window.setTimeout(()=>document.getElementById(`splash`)?.classList.add(`hidden`),50)}showWaiting(e,t=`正在接入画境`,n=`云端画师正在研墨……`){let r=this.media.querySelector(`.cloud-video-fallback`);if(!r)return;r.classList.toggle(`hidden`,!e);let i=document.getElementById(`cloud-wait-title`),a=document.getElementById(`cloud-wait-message`),o=document.getElementById(`cloud-wait-bar`);i&&(i.textContent=t),a&&(a.textContent=n),o&&(o.style.width=e?`36%`:`100%`)}setupWebRTC(){this.teardownPeer(),this.showWaiting(!0,`正在建立实时视频云路`,`WebRTC 协商中……`);try{let e=new RTCPeerConnection({iceServers:this.iceServers,bundlePolicy:`max-bundle`});this.pc=e,e.addTransceiver(`video`,{direction:`recvonly`}),e.addTransceiver(`audio`,{direction:`recvonly`});let t=e.createDataChannel(`game`,{ordered:!0});this.dc=t,this.bindDataChannel(t),this.remoteStream=new MediaStream,e.ontrack=e=>{this.remoteStream?.addTrack(e.track),this.video.srcObject=this.remoteStream,e.track.kind===`video`?(this.video.muted=!0,this.video.play().catch(()=>void 0),this.video.classList.remove(`hidden`),this.frameCanvas.style.display=`none`,this.media.classList.remove(`capture-frame`),this.markStreamReady(`WebRTC`),this.showWaiting(!1)):e.track.kind===`audio`&&(this.audioTrackReady=!0,this.pointerWasLocked&&(this.video.muted=!1))},e.onicecandidate=e=>{e.candidate&&this.sendWS({type:`ice`,candidate:e.candidate.toJSON()})},e.onconnectionstatechange=()=>{e.connectionState===`failed`&&this.fallback(`WebRTC 连接失败`),e.connectionState===`connected`&&(this.setMetricMode(`webrtc`,`WebRTC`),this.streamReady=!0)},e.createOffer().then(t=>e.setLocalDescription(t)).then(()=>this.sendWS({type:`offer`,sdp:e.localDescription?.sdp??``,wantAudio:!0})).catch(e=>this.fallback(e instanceof Error?e.message:String(e))),window.setTimeout(()=>{!this.streamReady&&this.pc===e&&this.fallback(`WebRTC 视频未在时限内抵达`)},14e3)}catch(e){this.fallback(e instanceof Error?e.message:String(e))}}audioTrackReady=!1;remoteStream=null;bindDataChannel(e){e.onopen=()=>{this.sendDC({type:`request-ui`})},e.onmessage=e=>{if(typeof e.data!=`string`)return;let t;try{t=JSON.parse(e.data)}catch{return}t.type===`ui`?this.onUI(t.state):t.type===`ack`?this.onInputAck(t.seq,t.clientTime,t.appliedAt):t.type===`bye`&&this.fallback(t.reason)},e.onclose=()=>void 0}async onAnswer(e){this.pc&&await this.pc.setRemoteDescription({type:`answer`,sdp:e})}async onRemoteIce(e){this.pc&&await this.pc.addIceCandidate(e).catch(()=>void 0)}teardownPeer(){try{this.dc?.close()}catch{}this.dc=null;try{this.pc?.close()}catch{}if(this.pc=null,this.remoteStream){for(let e of this.remoteStream.getTracks())e.stop();this.remoteStream=null}this.video.srcObject&&(this.video.srcObject=null)}async fallback(e){this.stream?.mode!==`mjpeg`&&(console.warn(`[cloud] falling back to MJPEG:`,e),this.sendWS({type:`need-fallback`,reason:e}),this.showWaiting(!0,`正在切换兼容画路`,`WebRTC 未能接通，改用 MJPEG 帧流……`),this.pc&&this.pc.close(),this.pc=null,this.dc=null,window.setTimeout(()=>{this.stream?.mode!==`mjpeg`&&!this.streamReady&&this.showError(`串流未能建立。请检查云端画师与网络后重试。`)},8e3))}switchToMjpeg(e){this.stream=e,this.setMetricMode(`mjpeg`,`MJPEG`),this.media.classList.add(`capture-frame`),this.video.pause(),this.video.classList.add(`hidden`),this.frameCanvas.style.display=`block`,this.markStreamReady(`MJPEG`),this.setStreamInfo(e)}startHeartbeat(){this.stopHeartbeat(),this.rttTimer=window.setInterval(()=>{this.ws?.readyState===WebSocket.OPEN&&this.sendWS({type:`ping`,t:performance.now()})},1800)}stopHeartbeat(){this.rttTimer&&window.clearInterval(this.rttTimer),this.rttTimer=0}startMetrics(){this.metricsTimer&&window.clearInterval(this.metricsTimer),this.metricsTimer=window.setInterval(()=>this.updateMetrics(),1e3),this.updateMetrics()}markStreamReady(e){this.streamReady||(this.streamReady=!0,this.streamReadyAt=performance.now(),this.lockCover.classList.toggle(`hidden`,this.role===`spectator`||this.touchMode),this.touchMode&&(document.getElementById(`cloud-touch`)?.classList.remove(`hidden`),this.lockCover.classList.add(`hidden`)),document.getElementById(`cloud-codec`).textContent=e),this.hud.classList.remove(`hidden`),document.getElementById(`cloud-wait-bar`).style.width=`100%`,this.showWaiting(!1),this.metrics.mode=e===`WebRTC`?`webrtc`:`mjpeg`,this.metrics.codec=e,this.role===`spectator`&&this.lockCover.classList.add(`hidden`)}async onMjpegFrame(e){this.mjpegFrames++,this.mjpegBytes+=e.byteLength,this.lastFrameAt=performance.now(),this.streamReady||this.markStreamReady(`MJPEG`);let t=new Blob([e],{type:`image/jpeg`});this.decoding?this.pendingFrame=t:await this.decodeFrame(t)}async decodeFrame(e){if(!this.frameCtx)return;this.decoding=!0;let t=performance.now();try{let n=await createImageBitmap(e),r=this.frameCanvas.clientWidth||window.innerWidth,i=this.frameCanvas.clientHeight||window.innerHeight,a=Math.min(2,window.devicePixelRatio||1),o=Math.round(r*a),s=Math.round(i*a);(this.frameCanvas.width!==o||this.frameCanvas.height!==s)&&(this.frameCanvas.width=o,this.frameCanvas.height=s);let c=this.frameCtx;c.fillStyle=`#0b110c`,c.fillRect(0,0,o,s);let l=Math.min(o/n.width,s/n.height),u=n.width*l,d=n.height*l;c.imageSmoothingEnabled=!0,c.imageSmoothingQuality=`high`,c.drawImage(n,(o-u)/2,(s-d)/2,u,d),this.metrics.width=n.width,this.metrics.height=n.height,n.close(),this.metrics.decodeMs=this.metrics.decodeMs*.8+(performance.now()-t)*.2}catch{}finally{if(this.decoding=!1,this.pendingFrame){let e=this.pendingFrame;this.pendingFrame=null,this.decodeFrame(e)}}}updateMetrics(){let e=performance.now();if(this.stream?.mode===`webrtc`||this.metrics.mode===`webrtc`)this.pc&&this.pc.connectionState===`connected`&&this.collectWebRTCStats(e);else{let t=this.lastMjpegStats??{bytes:this.mjpegBytes,frames:this.mjpegFrames,at:e-1e3},n=Math.max(.2,(e-t.at)/1e3);this.metrics.bitrateKbps=(this.mjpegBytes-t.bytes)*8/1e3/n,this.metrics.fps=(this.mjpegFrames-t.frames)/n,this.lastMjpegStats={bytes:this.mjpegBytes,frames:this.mjpegFrames,at:e},this.metrics.width=this.lastFrameMeta?.width??this.metrics.width,this.metrics.height=this.lastFrameMeta?.height??this.metrics.height,this.metrics.latencyMs=Math.max(0,this.networkRtt/2+1e3/30+this.inputAckMs*.3),this.metrics.networkRttMs=this.networkRtt}this.metrics.inputAckMs=this.inputAckMs,this.renderMetrics(),this.maybeDowngradeQuality(e)}async collectWebRTCStats(e){if(this.pc)try{let t=await this.pc.getStats(),n=0,r=0,i=0,a=0,o=this.networkRtt,s=0,c=this.metrics.width,l=this.metrics.height,u=0;t.forEach(e=>{let t=e;if(t.type===`inbound-rtp`&&t.kind===`video`){n=Number(t.bytesReceived)||0,r=Number(t.framesDecoded)||0,i=(Number(t.jitter)||0)*1e3,a=Number(t.packetsLost)||0,c=Number(t.frameWidth)||c,l=Number(t.frameHeight)||l,u=Number(t.framesPerSecond)||0;let e=Number(t.jitterBufferDelay),o=Number(t.jitterBufferEmittedCount);e&&o&&(s=e/o*1e3)}if(t.type===`candidate-pair`&&(t.state===`succeeded`||t.nominated===!0)){let e=Number(t.currentRoundTripTime);e&&(o=e*1e3)}t.type===`codec`&&t.mimeType&&(this.metrics.codec=String(t.mimeType).replace(`video/`,``).toUpperCase())});let d=this.lastStats??{bytes:n,frames:r,at:e-1e3},f=Math.max(.25,(e-d.at)/1e3),p=(n-d.bytes)*8/1e3/f,m=(r-d.frames)/f;this.lastStats={bytes:n,frames:r,at:e},this.metrics.bitrateKbps=Math.max(0,p),this.metrics.fps=u||Math.max(0,m),this.metrics.jitterMs=i,this.metrics.packetLoss=a,this.metrics.width=c||this.metrics.width,this.metrics.height=l||this.metrics.height,this.metrics.networkRttMs=o,this.metrics.latencyMs=Math.max(0,o/2+s*.35+this.inputAckMs*.25),this.metrics.frames=r}catch{}}renderMetrics(){let e=this.metrics,t=$(`metric-latency`),n=$(`metric-bitrate`),r=$(`metric-fps`),i=$(`metric-res`);t&&(t.textContent=this.streamReady?`≈${Math.round(e.latencyMs)} ms`:`连接中`),n&&(n.textContent=ed(e.bitrateKbps)),r&&(r.textContent=`${Math.round(e.fps)} fps`),i&&(i.textContent=e.width?`${e.width}×${e.height}`:`—`),this.metricsDetail&&(this.metricsDetail.innerHTML=`
        <div><span>画路</span><b>${e.codec}</b></div>
        <div><span>网络往返</span><b>${e.networkRttMs.toFixed(0)} ms</b></div>
        <div><span>输入回执</span><b>${e.inputAckMs.toFixed(0)} ms</b></div>
        <div><span>抖动</span><b>${e.jitterMs.toFixed(1)} ms</b></div>
        <div><span>帧尺寸</span><b>${e.width}×${e.height}</b></div>
        <div><span>码率</span><b>${ed(e.bitrateKbps)}</b></div>
        <div><span>丢包</span><b>${e.packetLoss}</b></div>
        <div><span>画面插值</span><b>预测视差 + 平滑</b></div>
      `);let a=document.getElementById(`cloud-menu-stats`);a&&(a.textContent=`${e.codec} · ${Math.round(e.latencyMs)}ms · ${ed(e.bitrateKbps)} · ${e.width}×${e.height} · 输入回执 ${e.inputAckMs.toFixed(0)}ms`)}maybeDowngradeQuality(e){if(!(!this.streamReady||e-this.streamReadyAt<12e3||e-this.lastQualityCheck<5e3)&&(this.lastQualityCheck=e,this.metrics.mode===`webrtc`&&this.metrics.fps>0&&this.metrics.fps<20&&this.qualityDowngrades<1)){let e=Vf.indexOf(this.quality);e>0&&(this.quality=Vf[e-1],this.qualityDowngrades++,this.sendWS({type:`quality`,level:this.quality}))}}setMetricMode(e,t){this.metrics.mode=e,this.metrics.codec=t,this.lastStats=null,this.lastMjpegStats=null}setStreamInfo(e){if(!e)return;this.metrics.mode=e.mode,this.metrics.width=e.width,this.metrics.height=e.height;let t=$(`cloud-codec`);t&&(t.textContent=e.mode===`webrtc`?`WebRTC`:`MJPEG`)}onUI(e){this.lastUiAt=performance.now(),this.state=e,this.staticUI&&this.updateHud(e),this.handleModal(e),this.handlePanorama(e),this.handleToasts(e),this.handleLocation(e),e.toast&&e.toast.id!==this.lastToastId&&(this.lastToastId=e.toast.id,this.toast(e.toast.text))}updateHud(e){let t=e.objective;if(t){$(`cloud-objective-title`).textContent=t.title,$(`cloud-objective-hint`).textContent=t.hint,$(`cloud-objective-step`).textContent=Bf[t.step]??String(t.step);let n=Math.hypot(t.target.x-e.player.x,t.target.z-e.player.z);$(`cloud-objective-dist`).textContent=$u(n)}$(`cloud-weather-label`).textContent=e.weatherLabel;let n=$(`cloud-weather`);n&&(n.textContent=e.weatherLabel);let r=new Set(e.collected);for(let t of ad){let n=document.querySelector(`#cloud-seal-row [data-seal="${t.id}"]`);n&&(n.classList.toggle(`collected`,r.has(t.id)),n.classList.toggle(`next`,e.objective?.sealId===t.id&&!r.has(t.id)))}let i=$(`cloud-seal-count`);i&&(i.textContent=String(r.size));let a=e.prompt,o=$(`cloud-interact`);a&&!this.modalVisible&&!this.codexOpen&&!this.menuOpen?(o.classList.remove(`hidden`),$(`cloud-interact-title`).textContent=a.title,$(`cloud-interact-sub`).textContent=a.sub,document.querySelector(`.cloud-reticle`)?.classList.add(`hot`)):(o.classList.add(`hidden`),document.querySelector(`.cloud-reticle`)?.classList.remove(`hot`)),$(`cloud-mode-label`).textContent=e.mode===`boat`?`乘舟`:e.mode===`panorama`?`观山`:`步行`,$(`cloud-compass`).textContent=`北 · ${Math.round(e.player.z)}`;let s=$(`cloud-player-count`);s&&(s.innerHTML=`同游者 <b>${e.participants}</b> 人`,s.classList.toggle(`hidden`,e.participants<=1||this.role===`spectator`)),this.updateMinimap(e),this.renderMetrics()}updateMinimap(e){if(!this.staticUI)return;let t=document.getElementById(`cloud-minimap`);t&&If(t,this.staticUI.map,{x:e.player.x,z:e.player.z,yaw:e.player.yaw},this.staticUI.map.seals,new Set(e.collected),e.target,`cloud`)}buildSealPips(){let e=document.getElementById(`cloud-seal-row`);e&&(e.innerHTML=ad.map(e=>`<span class="seal-pip" data-seal="${e.id}" title="${e.name}">${e.glyph}</span>`).join(``))}handleModal(e){this.role===`spectator`?e.modal?(this.renderModal(e.modal,!0),this.modalLayer.classList.remove(`hidden`)):this.modalLayer.classList.add(`hidden`):e.modal?!this.modalVisible&&!this.modalClosing&&this.openModal(e.modal):this.modalVisible&&this.closeModalLocal(!1)}openModal(e){this.helpOpen||this.codexOpen||(this.modalVisible=!0,this.modalClosing=!1,this.suppressMenu=!0,document.pointerLockElement&&document.exitPointerLock(),this.renderModal(e,!1),this.modalLayer.classList.remove(`hidden`),this.hud.classList.add(`modal-open`))}renderModal(e,t){let n=$(`cloud-scroll-kicker`),r=$(`cloud-scroll-title`),i=$(`cloud-scroll-index`),a=$(`cloud-scroll-content`),o=$(`cloud-scroll-seal`),s=document.getElementById(`cloud-scroll-close`);if(s.style.display=t?`none`:``,e.kind===`seal`){let t=ld(e.sealId);n.textContent=`${t.chapter} · 得印`,r.textContent=`${t.glyph} · ${t.name}`,i.textContent=t.location,o.textContent=t.glyph,a.innerHTML=`<div class="poem-block">${t.poem.replace(/\n/g,`<br>`)}</div>${t.body.map(e=>`<p>${e}</p>`).join(``)}<div class="lore-grid">${t.lore.map(e=>`<div class="lore-item"><b>${e.title}</b>${e.text}</div>`).join(``)}</div>`}else if(e.kind===`scroll`){let t=ud(e.scrollId);n.textContent=t.kicker,r.textContent=t.title,i.textContent=t.location,o.textContent=t.sealGlyph,a.innerHTML=`<div class="poem-block">${t.poem.replace(/\n/g,`<br>`)}</div>${t.body.map(e=>`<p>${e}</p>`).join(``)}`}else n.textContent=e.kicker,r.textContent=e.title,i.textContent=`卷中偶记`,o.textContent=e.sealGlyph,a.innerHTML=`<p>${e.body}</p>`}closeRemoteModal(){this.modalVisible&&(this.sendEvent({kind:`action`,action:`close-modal`}),this.closeModalLocal(!0))}closeModalLocal(e){this.modalVisible=!1,this.modalClosing=!0,this.modalLayer.classList.add(`hidden`),this.hud.classList.remove(`modal-open`),this.suppressMenu=!1,window.setTimeout(()=>{this.modalClosing=!1},1500),e&&this.requestLockSoon()}handlePanorama(e){let t=e.mode===`panorama`;t!==this.panoramaMode&&(this.panoramaMode=t,this.panoramaNote.classList.toggle(`hidden`,!t),this.hud.classList.toggle(`panorama-mode`,t),this.role===`spectator`&&(this.panoramaNote.innerHTML=`<span>旁观 · 山河入卷</span><b>同游者正在仰望千里</b>`))}handleToasts(e){e.toast&&e.toast.id!==this.lastToastId&&(this.lastToastId=e.toast.id,this.toast(e.toast.text))}handleLocation(e){if(!e.location||this.lastLocationId===e.location.id)return;this.lastLocationId=e.location.id;let t=$(`cloud-location`);t.innerHTML=`<span>${e.location.kicker}</span><h3>${e.location.name}</h3><p>${e.location.description}</p>`,t.classList.remove(`hidden`),t.style.animation=`none`,t.offsetWidth,t.style.animation=``,window.setTimeout(()=>t.classList.add(`hidden`),5e3)}toast(e){let t=document.getElementById(`cloud-toast-layer`);if(!t)return;let n=document.createElement(`div`);for(n.className=`toast`,n.textContent=e,t.appendChild(n);t.childElementCount>3;)t.firstElementChild?.remove();window.setTimeout(()=>{n.classList.add(`out`),window.setTimeout(()=>n.remove(),500)},4e3)}bindUI(){$(`cloud-enter`)?.addEventListener(`click`,()=>void this.enterCloud()),this.media.addEventListener(`click`,()=>{!this.streamReady||this.role!==`player`||this.modalVisible||this.codexOpen||this.helpOpen||this.menuOpen||document.pointerLockElement||this.enterCloud()}),$(`cloud-fullscreen`)?.addEventListener(`click`,()=>{document.fullscreenElement?document.exitFullscreen?.().catch(()=>void 0):document.documentElement.requestFullscreen?.().catch(()=>void 0)}),$(`cloud-weather`)?.addEventListener(`click`,()=>{if(!this.state||this.role===`spectator`)return;let e=[`clear`,`mist`,`dusk`],t=e[(e.indexOf(this.state.weather)+1)%e.length];this.sendKeyTap(t===`clear`?`Digit1`:t===`mist`?`Digit2`:`Digit3`),this.toast(`画境将换 · ${sd[t].name}`)}),$(`cloud-help-button`)?.addEventListener(`click`,()=>this.openHelp()),$(`cloud-menu-open`)?.addEventListener(`click`,()=>this.openMenu()),$(`cloud-audio`)?.addEventListener(`click`,()=>{this.video.muted=!this.video.muted;let e=$(`cloud-audio`);e.textContent=this.video.muted?`静`:`声`,this.toast(this.video.muted?`云境声音已静`:`云境声音已开`)}),$(`cloud-help-close`)?.addEventListener(`click`,()=>this.closeHelp()),$(`cloud-help-ok`)?.addEventListener(`click`,()=>this.closeHelp()),$(`cloud-help`)?.addEventListener(`click`,e=>{e.target===$(`cloud-help`)&&this.closeHelp()}),$(`cloud-scroll-close`)?.addEventListener(`click`,()=>{this.codexOpen?this.closeCodex():this.closeRemoteModal()}),$(`cloud-scroll-layer`)?.addEventListener(`click`,e=>{e.target===$(`cloud-scroll-layer`)&&this.role!==`spectator`&&(this.codexOpen?this.closeCodex():this.closeRemoteModal())}),$(`cloud-menu-resume`)?.addEventListener(`click`,()=>void this.resumeCloud()),$(`cloud-menu-help`)?.addEventListener(`click`,()=>{this.hideMenu(),this.openHelp()}),$(`cloud-menu-reconnect`)?.addEventListener(`click`,()=>{this.hideMenu(),this.forceReconnect()}),$(`cloud-menu-leave`)?.addEventListener(`click`,()=>this.leave()),$(`cloud-retry`)?.addEventListener(`click`,()=>this.forceReconnect()),$(`cloud-exit`)?.addEventListener(`click`,()=>this.leave()),$(`cloud-metrics-toggle`)?.addEventListener(`click`,()=>{this.metricsDetail.classList.toggle(`hidden`)}),document.getElementById(`cloud-minimap`)?.addEventListener(`click`,()=>{this.metricsDetail.classList.toggle(`hidden`)}),document.addEventListener(`pointerlockchange`,()=>this.onLockChange()),document.addEventListener(`mousemove`,e=>{!this.pointerWasLocked||!this.streamReady||this.modalVisible||this.menuOpen||this.codexOpen||this.helpOpen||this.role!==`spectator`&&(this.pendingLookX+=e.movementX,this.pendingLookY+=e.movementY,this.applyPrediction(-e.movementX*.16,e.movementY*.12),this.flushLookSoon())}),document.addEventListener(`keydown`,e=>this.onKeyDown(e),{capture:!0}),document.addEventListener(`keyup`,e=>this.onKeyUp(e),{capture:!0}),window.addEventListener(`blur`,()=>{this.pendingLookX=0,this.pendingLookY=0,this.sendEvent({kind:`joystick`,x:0,y:0})}),this.bindTouch(),this.bindHelpButtons()}bindHelpButtons(){$(`cloud-help`)}async enterCloud(){if(this.role===`spectator`||this.touchMode){this.lockCover.classList.add(`hidden`);return}await this.requestLock(),this.video?.srcObject&&(this.video.muted=!1);let e=document.getElementById(`cloud-audio`);e&&(e.textContent=`声`)}async requestLock(){if(this.role===`spectator`||this.touchMode)return this.lockCover.classList.add(`hidden`),!0;this.lockRequested=!0,this.suppressMenu=!0;try{await this.media.requestPointerLock()}catch{return this.lockRequested=!1,this.suppressMenu=!1,!1}return!0}requestLockSoon(){window.setTimeout(()=>{!document.pointerLockElement&&this.streamReady&&!this.modalVisible&&!this.menuOpen&&this.requestLock()},50)}onLockChange(){let e=document.pointerLockElement===this.media;this.pointerWasLocked=e,document.body.classList.toggle(`cloud-locked`,e),e?(this.lockCover.classList.add(`hidden`),this.hideMenu(),this.suppressMenu=!1,this.lockRequested=!1):this.suppressMenu||this.leaving||!this.streamReady||this.role!==`player`||this.modalVisible||this.codexOpen||this.helpOpen||this.menuOpen||window.setTimeout(()=>this.openMenu(),40)}openMenu(){this.menuOpen||this.modalVisible||this.codexOpen||this.helpOpen||(this.menuOpen=!0,this.suppressMenu=!0,this.pendingLookX=0,this.pendingLookY=0,this.sendEvent({kind:`joystick`,x:0,y:0}),$(`cloud-menu`).classList.remove(`hidden`))}hideMenu(){this.menuOpen=!1,this.suppressMenu=!1,$(`cloud-menu`).classList.add(`hidden`)}resumeCloud(){this.hideMenu(),this.requestLockSoon()}onKeyDown(e){let t=e.target;t&&[`INPUT`,`TEXTAREA`,`SELECT`].includes(t.tagName)||(this.modalVisible?(e.code===`Escape`||e.code===`KeyE`)&&(e.preventDefault(),e.stopPropagation(),this.closeRemoteModal()):this.codexOpen?(e.code===`Escape`||e.code===`KeyJ`)&&(e.preventDefault(),this.closeCodex()):this.helpOpen?(e.code===`Escape`||e.code===`KeyH`)&&(e.preventDefault(),this.closeHelp()):this.menuOpen?e.code===`Escape`&&(e.preventDefault(),this.resumeCloud()):this.role!==`spectator`&&(this.panoramaMode&&e.code===`KeyE`?(e.preventDefault(),this.sendEvent({kind:`action`,action:`panorama-exit`})):(this.pointerWasLocked||this.touchMode)&&(e.code===`KeyJ`?(e.preventDefault(),this.openCodex()):e.code===`KeyH`?(e.preventDefault(),this.openHelp()):e.code===`KeyP`?(e.preventDefault(),this.downloadFrame()):e.code===`KeyR`?(e.preventDefault(),this.toast(`云游画面由服务端推流；请使用本地模式录制。`)):([`Space`,`ShiftLeft`,`ShiftRight`,`Digit1`,`Digit2`,`Digit3`,`KeyW`,`KeyA`,`KeyS`,`KeyD`,`KeyE`].includes(e.code)&&e.preventDefault(),!e.repeat&&this.sendEvent({kind:`key`,code:e.code,down:!0})))))}onKeyUp(e){this.role!==`spectator`&&(this.modalVisible||this.codexOpen||this.helpOpen||this.menuOpen||(this.pointerWasLocked||this.touchMode)&&this.sendEvent({kind:`key`,code:e.code,down:!1}))}sendKeyTap(e){this.sendEvent({kind:`key`,code:e,down:!0}),window.setTimeout(()=>this.sendEvent({kind:`key`,code:e,down:!1}),34)}openHelp(){this.helpOpen||(this.helpOpen=!0,this.suppressMenu=!0,document.pointerLockElement&&document.exitPointerLock(),$(`cloud-help`).classList.remove(`hidden`))}closeHelp(){this.helpOpen&&(this.helpOpen=!1,$(`cloud-help`).classList.add(`hidden`),this.suppressMenu=!1,this.requestLockSoon())}openCodex(){!this.codexOpen&&this.state&&(this.codexOpen=!0,this.suppressMenu=!0,document.pointerLockElement&&document.exitPointerLock(),this.renderCodex(),this.modalLayer.classList.remove(`hidden`),$(`cloud-scroll-kicker`).textContent=`随身云册`,$(`cloud-scroll-title`).textContent=`行旅册`,$(`cloud-scroll-index`).textContent=`已得 ${this.state.collected.length} / 7 印`,$(`cloud-scroll-seal`).textContent=`游`,$(`cloud-scroll-close`).style.display=``,this.hud.classList.add(`modal-open`))}renderCodex(){if(!this.state)return;let e=new Set(this.state.collected),t=new Set(this.state.readScrolls),n=$(`cloud-scroll-content`);n.innerHTML=`<div class="codex-seal-grid">${ad.map(t=>{let n=e.has(t.id);return`<article class="codex-seal ${n?`collected`:``}"><div class="big-glyph">${n?t.glyph:`印`}</div><h4>${n?t.name:`未得`}</h4><p>${n?t.location:`尚在山水之间`}</p></article>`}).join(``)}</div>
    <div class="codex-notes" style="margin-top:20px">${od.map(e=>{let n=t.has(e.id);return`<article class="note-entry ${n?``:`locked`}"><div class="note-title">${n?e.title:`未读之跋`}</div><div class="note-body">${n?e.poem.replace(/\n/g,` · `):`尚在${e.location}。`}</div></article>`}).join(``)}</div>`}closeCodex(){this.codexOpen&&(this.codexOpen=!1,this.modalLayer.classList.add(`hidden`),this.hud.classList.remove(`modal-open`),this.suppressMenu=!1,this.requestLockSoon())}downloadFrame(){try{let e=document.createElement(`canvas`);this.stream?.mode===`mjpeg`||this.metrics.mode===`mjpeg`?(e.width=this.frameCanvas.width,e.height=this.frameCanvas.height,e.getContext(`2d`)?.drawImage(this.frameCanvas,0,0)):(e.width=this.video.videoWidth,e.height=this.video.videoHeight,e.getContext(`2d`)?.drawImage(this.video,0,0));let t=document.createElement(`a`);t.href=e.toDataURL(`image/png`),t.download=`千里江山-云游-${Date.now()}.png`,t.click(),this.toast(`已留一段云中影`)}catch{this.toast(`此画暂不可截取`)}}sendWS(e){if(this.ws?.readyState===WebSocket.OPEN)try{this.ws.send(JSON.stringify(e))}catch{}}sendDC(e){if(this.dc?.readyState===`open`)try{this.dc.send(JSON.stringify(e))}catch{}}sendEvent(e){if(!this.joinedOnce||this.leaving||this.role!==`player`)return;let t=++this.seq;for(this.pendingInputs.set(t,{seq:t,at:performance.now(),event:e,via:`ws`});this.pendingInputs.size>80;){let e=this.pendingInputs.keys().next().value;if(e===void 0)break;this.pendingInputs.delete(e)}if(this.pc&&this.dc?.readyState===`open`&&this.metrics.mode===`webrtc`){let n={type:`input`,seq:t,event:e,clientTime:performance.now()};try{this.dc.send(JSON.stringify(n));let e=this.pendingInputs.get(t);e&&(e.via=`dc`);return}catch{}}let n={seq:t,event:e,clientTime:performance.now()};this.sendWS({type:`input`,input:n})}onInputAck(e,t,n){let r=this.pendingInputs.get(e);if(!r)return;this.pendingInputs.delete(e);let i=Math.max(0,performance.now()-r.at);this.inputAckMs=this.inputAckMs===0?i:this.inputAckMs*.82+i*.18,this.suppressMenu===!1&&r.event.kind===`look`&&this.decayPrediction()}flushLookSoon(){this.lookRaf||=requestAnimationFrame(()=>{if(this.lookRaf=0,Math.abs(this.pendingLookX)+Math.abs(this.pendingLookY)<.4)return;let e=this.pendingLookX,t=this.pendingLookY;this.pendingLookX=0,this.pendingLookY=0,this.sendEvent({kind:`look`,dx:e,dy:t})})}applyPrediction(e,t){this.predictX=Math.max(-14,Math.min(14,this.predictX+e)),this.predictY=Math.max(-10,Math.min(10,this.predictY+t));let n=`translate3d(${this.predictX.toFixed(2)}px, ${this.predictY.toFixed(2)}px, 0) scale(1.012)`;if(this.video.style.transform=n,this.frameCanvas.style.transform=n,!this.predictRaf){let e=performance.now(),t=()=>{let n=performance.now()-e;this.predictX*=Math.exp(-n/90),this.predictY*=Math.exp(-n/90),this.video.style.transform=`translate3d(${this.predictX.toFixed(2)}px, ${this.predictY.toFixed(2)}px, 0)`,this.frameCanvas.style.transform=`translate3d(${this.predictX.toFixed(2)}px, ${this.predictY.toFixed(2)}px, 0)`,Math.abs(this.predictX)+Math.abs(this.predictY)>.1?this.predictRaf=requestAnimationFrame(t):(this.predictRaf=0,this.video.style.transform=``,this.frameCanvas.style.transform=``)};this.predictRaf=requestAnimationFrame(t)}}decayPrediction(){}bindTouch(){let e=this.touchStick;if(!e)return;let t=t=>{let n=e.getBoundingClientRect(),r=n.left+n.width/2,i=n.top+n.height/2,a=Math.max(-1,Math.min(1,(t.clientX-r)/(n.width*.42))),o=Math.max(-1,Math.min(1,(t.clientY-i)/(n.height*.42))),s=e.querySelector(`span`);s&&(s.style.transform=`translate(calc(-50% + ${a*28}px), calc(-50% + ${o*28}px))`),this.sendEvent({kind:`joystick`,x:a,y:o})};e.addEventListener(`pointerdown`,n=>{this.joystickPointer=n.pointerId,e.setPointerCapture(n.pointerId),t(n),n.preventDefault()}),e.addEventListener(`pointermove`,e=>{this.joystickPointer===e.pointerId&&t(e)});let n=t=>{if(this.joystickPointer!==t.pointerId)return;this.joystickPointer=null;let n=e.querySelector(`span`);n&&(n.style.transform=`translate(-50%, -50%)`),this.sendEvent({kind:`joystick`,x:0,y:0})};e.addEventListener(`pointerup`,n),e.addEventListener(`pointercancel`,n),document.querySelectorAll(`[data-touch-action]`).forEach(e=>{e.addEventListener(`pointerdown`,t=>{t.preventDefault();let n=e.dataset.touchAction;n===`KeyJ`?this.openCodex():(this.sendEvent({kind:`key`,code:n,down:!0}),window.setTimeout(()=>this.sendEvent({kind:`key`,code:n,down:!1}),100))})}),this.media.addEventListener(`pointerdown`,e=>{this.touchMode&&e.pointerType!==`mouse`&&this.role!==`spectator`&&(e.target.closest(`.cloud-touch`)||(this.lookPointer=e.pointerId,this.lookPointerLast={x:e.clientX,y:e.clientY},this.media.setPointerCapture?.(e.pointerId)))}),this.media.addEventListener(`pointermove`,e=>{if(this.lookPointer!==e.pointerId)return;let t=e.clientX-this.lookPointerLast.x,n=e.clientY-this.lookPointerLast.y;this.lookPointerLast={x:e.clientX,y:e.clientY},this.pendingLookX+=t*1.6,this.pendingLookY+=n*1.6,this.applyPrediction(-t*.2,n*.14),this.flushLookSoon(),e.preventDefault()});let r=e=>{this.lookPointer===e.pointerId&&(this.lookPointer=null)};this.media.addEventListener(`pointerup`,r),this.media.addEventListener(`pointercancel`,r)}setPlayerCount(e){let t=$(`cloud-player-count`);t&&(t.innerHTML=`同游者 <b>${e}</b> 人`,t.classList.toggle(`hidden`,e<=1||this.role===`spectator`))}showError(e){$(`cloud-error-title`).textContent=`云径暂断`,$(`cloud-error-message`).textContent=e,$(`cloud-error`).classList.remove(`hidden`),this.lockCover.classList.add(`hidden`)}hideError(){$(`cloud-error`).classList.add(`hidden`)}onDisconnected(){if(this.teardownPeer(),this.streamReady=!1,this.lockCover.classList.add(`hidden`),this.showError(`正在尝试接回画境……`),this.reconnectAttempts>=4){$(`cloud-error-message`).textContent=`多次重连未果。请检查网络，或返回卷首。`;return}this.reconnectAttempts++;let e=Math.min(6e3,900*this.reconnectAttempts);window.clearTimeout(this.reconnectTimer),this.reconnectTimer=window.setTimeout(()=>{this.openSocket()},e)}forceReconnect(){this.reconnectAttempts=0,this.leaving=!1;try{this.ws?.close(1e3,`manual reconnect`)}catch{}this.ws=null,this.teardownPeer(),this.streamReady=!1,this.hideError(),this.showWaiting(!0,`正在接回画境`,`云路重新铺设中……`),this.openSocket()}leave(){this.leaving=!0,window.clearTimeout(this.reconnectTimer),window.clearInterval(this.metricsTimer),this.stopHeartbeat(),this.teardownPeer();try{this.ws?.close(1e3,`leave`)}catch{}this.ws=null,location.reload()}abort(){this.leaving=!0,window.clearTimeout(this.reconnectTimer),window.clearInterval(this.metricsTimer),this.stopHeartbeat(),this.teardownPeer();try{this.ws?.close(1e3,`aborted launching`)}catch{}this.ws=null,this.streamReady=!1}get roomCode(){return this.room}get viewerMode(){return this.metrics.mode}get isReady(){return this.streamReady}get currentMap(){return this.staticUI?.map??null}get currentState(){return this.state}};function $(e){let t=document.getElementById(e);if(!t)throw Error(`Missing cloud UI element #${e}`);return t}var Kf=class{game;token;seatId;room;name;socket=null;iceServers=[];peers=new Map;capture=null;audioStream=null;preparePromise=null;remoteAvatars=new Map;uiTimer=0;presenceTimer=0;staticSent=!1;reconnectAttempts=0;disposed=!1;startedAt=Date.now();lastUI=null;incomingCandidates=new Map;ownQuality=`medium`;avatarTexture=kd(0);avatarTexture2=kd(1);glowMap=Od(`rgba(232,244,221,.85)`,`rgba(176,211,181,0)`);constructor(e,t){this.game=e,this.token=t.token,this.seatId=t.seatId,this.room=t.room,this.name=t.name,this.iceServers=t.iceServers,this.game.setParticipants(1),this.preparePromise=this.prepareCapture().catch(e=>{console.warn(`[seat] capture failed`,e)}),this.connect(),this.startTimers()}async prepareCapture(){await this.game.ensureAudio().catch(()=>void 0);let e=this.game.canvas;typeof e.captureStream==`function`&&(this.capture=e.captureStream(30)),this.audioStream=this.game.getAudioStream()}connect(){if(this.disposed)return;let e=`${location.protocol===`https:`?`wss:`:`ws:`}//${location.host}/ws/seat?token=${encodeURIComponent(this.token)}`,t=new WebSocket(e);this.socket=t,t.onopen=()=>{this.reconnectAttempts=0,this.sendReady(),this.sendStatic(),this.lastUI&&this.sendWS({type:`ui`,state:this.lastUI})},t.onmessage=e=>{if(typeof e.data!=`string`)return;let t;try{t=JSON.parse(e.data)}catch{return}this.onServerMessage(t)},t.onerror=()=>void 0,t.onclose=()=>{this.socket=null,!this.disposed&&this.reconnectAttempts<6&&(this.reconnectAttempts++,window.setTimeout(()=>this.connect(),Math.min(8e3,1e3*this.reconnectAttempts)))}}sendStatic(){this.staticSent||(this.staticSent=!0,this.sendWS({type:`ui-static`,state:this.game.getStaticUI()}))}readySent=!1;sendReady(){if(this.readySent)return;this.readySent=!0;let e=this.game.canvas,t=typeof RTCPeerConnection<`u`&&typeof e.captureStream==`function`;console.log(`[seat] ready canvas=${e.width}x${e.height} viewport=${window.innerWidth}x${window.innerHeight} dpr=${window.devicePixelRatio} capture=${this.capture?.getVideoTracks()[0]?.getSettings?.().width??`?`}`),this.sendWS({type:`seat-ready`,width:e.width,height:e.height,webrtc:t,audio:!!(this.audioStream&&this.audioStream.getAudioTracks().length),name:this.name})}startTimers(){window.clearInterval(this.uiTimer),window.clearInterval(this.presenceTimer),this.uiTimer=window.setInterval(()=>{if(!this.game.started)return;let e=this.game.getUIState();this.lastUI=e,this.sendWS({type:`ui`,state:e});for(let t of this.peers.values())t.channel?.readyState===`open`&&this.sendDC(t,{type:`ui`,state:e})},120),this.presenceTimer=window.setInterval(()=>{if(!this.game.started)return;let e=this.game.getUIState();this.sendWS({type:`presence`,state:{seatId:this.seatId,name:this.name,x:e.player.x,y:e.player.y,z:e.player.z,yaw:e.player.yaw,mode:e.mode,seals:e.collected.length,updatedAt:Date.now()}}),this.updateAvatars(performance.now())},160)}onServerMessage(e){switch(e.type){case`seat-init`:e.iceServers?.length&&(this.iceServers=e.iceServers),this.ownQuality=e.quality,this.sendReady();break;case`offer`:this.handleOffer(e.viewerId,e.sdp,e.role).catch(e=>{console.error(`[seat] offer failed`,e),this.sendWS({type:`webrtc-failed`,reason:e instanceof Error?e.message:String(e)})});break;case`ice`:this.handleRemoteIce(e.viewerId,e.candidate);break;case`input`:this.applyInput(e.input.seq,e.input.event,e.input.clientTime,e.viewerId,`ws`);break;case`peer-close`:this.closePeer(e.viewerId);break;case`quality`:this.ownQuality=e.level,this.setPeerQuality(e.level,e.bitrate,e.fps);break;case`presence`:this.updatePresence(e.players);break;case`viewer-count`:break;case`force-mjpeg`:for(let e of this.peers.keys())this.closePeer(e);break;case`dispose`:this.dispose()}}async handleOffer(e,t,n){if(typeof RTCPeerConnection>`u`){this.sendWS({type:`webrtc-failed`,reason:`RTCPeerConnection unavailable in server page`});return}this.preparePromise&&await this.preparePromise,this.capture&&this.capture.getVideoTracks().length!==0||(this.preparePromise=this.prepareCapture(),await this.preparePromise),this.peers.get(e)&&this.closePeer(e);let r=new RTCPeerConnection({iceServers:this.iceServers,bundlePolicy:`max-bundle`,rtcpMuxPolicy:`require`}),i={viewerId:e,role:n,pc:r,channel:null,pendingIce:[],quality:this.ownQuality,connectedAt:Date.now()};if(this.peers.set(e,i),this.capture)for(let e of this.capture.getTracks())r.addTrack(e,this.capture);if(this.audioStream)for(let e of this.audioStream.getAudioTracks())this.capture?.getTracks().some(t=>t.id===e.id)||r.addTrack(e,this.audioStream);r.onicecandidate=t=>{t.candidate&&this.sendWS({type:`ice`,viewerId:e,candidate:t.candidate.toJSON()})},r.ondatachannel=e=>{let t=e.channel;i.channel=t,t.onopen=()=>{this.sendStaticToChannel(i),this.lastUI&&this.sendDC(i,{type:`ui`,state:this.lastUI})},t.onmessage=e=>this.onDataChannelMessage(i,e.data)},r.onconnectionstatechange=()=>{r.connectionState===`failed`&&this.sendWS({type:`webrtc-failed`,reason:`peer connection failed`})},r.oniceconnectionstatechange=()=>{r.iceConnectionState===`failed`&&this.sendWS({type:`webrtc-failed`,reason:`ICE failed`})};try{await r.setRemoteDescription({type:`offer`,sdp:t});let n=this.incomingCandidates.get(e)??[];this.incomingCandidates.delete(e);for(let e of n)await r.addIceCandidate(e).catch(()=>void 0);let a=await r.createAnswer();await r.setLocalDescription(a),this.notifyLocalDescription?this.notifyLocalDescription(e,a.sdp??``):this.sendWS({type:`answer`,viewerId:e,sdp:a.sdp??``}),this.applySenderParameters(i)}catch(t){throw this.closePeer(e),t}}notifyLocalDescription=null;handleRemoteIce(e,t){let n=this.peers.get(e);if(n)n.pc.remoteDescription?n.pc.addIceCandidate(t).catch(()=>void 0):(n.pendingIce.push(t),n.pc.addEventListener(`signalingstatechange`,()=>{if(n.pc.remoteDescription)for(let e of n.pendingIce.splice(0))n.pc.addIceCandidate(e).catch(()=>void 0)},{once:!1}));else{let n=this.incomingCandidates.get(e)??[];n.push(t),this.incomingCandidates.set(e,n)}}onDataChannelMessage(e,t){if(typeof t!=`string`)return;let n;try{n=JSON.parse(t)}catch{return}n.type===`input`?this.applyInput(n.seq,n.event,n.clientTime,e.viewerId,`dc`,e):n.type===`request-ui`?(this.lastUI&&this.sendDC(e,{type:`ui`,state:this.lastUI}),this.sendStaticToChannel(e)):n.type===`ping`&&this.sendDC(e,{type:`ack`,seq:0,clientTime:n.t,appliedAt:performance.now(),serverTime:Date.now()})}applyInput(e,t,n,r,i,a){if(a?.role===`spectator`)return;let o=i===`ws`?`player`:a?.role;if(i!==`ws`||o===`player`){switch(t.kind){case`look`:this.game.remoteLook(t.dx,t.dy);break;case`key`:this.game.remoteKey(t.code,t.down);break;case`joystick`:this.game.remoteJoystick(t.x,t.y);break;case`wheel`:this.game.remoteWheel(t.dy);break;case`action`:this.game.remoteTouchAction(t.action);break;case`pointer`:t.buttons&&this.game.remoteLook(t.dx,t.dy)}requestAnimationFrame(()=>{let t=performance.now();i===`ws`?this.sendWS({type:`ack`,viewerId:r,seq:e,clientTime:n,appliedAt:t}):a?.channel?.readyState===`open`&&this.sendDC(a,{type:`ack`,seq:e,appliedAt:t,clientTime:n})})}}setPeerQuality(e,t,n){for(let r of this.peers.values())r.quality=e,this.applySenderParameters(r,t,n)}applySenderParameters(e,t,n){let r=t!==void 0||n!==void 0,i=t??(e.quality===`high`?6e6:e.quality===`medium`?35e5:15e5),a=n??(e.quality===`high`?60:e.quality===`medium`?30:24),o=r&&e.quality===`low`?1.5:1;for(let t of e.pc.getSenders())if(t.track?.kind===`video`)try{let e=t.getParameters();e.encodings&&e.encodings.length!==0||(e.encodings=[{}]),e.encodings[0].maxBitrate=r?i:6e6,e.encodings[0].maxFramerate=Math.max(a,24),e.encodings[0].scaleResolutionDownBy=o,e.degradationPreference=`maintain-resolution`,t.setParameters(e).catch(e=>{console.warn(`[seat] setParameters failed`,e)})}catch{}}closePeer(e){let t=this.peers.get(e);if(t){this.peers.delete(e);try{t.channel?.close()}catch{}try{t.pc.close()}catch{}}}updatePresence(e){let t=new Set;for(let n of e){if(n.seatId===this.seatId)continue;t.add(n.seatId);let e=this.remoteAvatars.get(n.seatId);e||(e=this.createAvatar(n),this.remoteAvatars.set(n.seatId,e)),e.target.set(n.x,n.y+1.85,n.z),e.lastSeen=performance.now(),e.name=n.name}for(let[e,n]of this.remoteAvatars)t.has(e)||(n.sprite.parent?.remove(n.sprite),n.label.parent?.remove(n.label),n.ring.parent?.remove(n.ring),this.remoteAvatars.delete(e));this.game.setParticipants(Math.max(1,e.length))}createAvatar(e){let t=new Pr(new br({map:this.remoteAvatars.size%2==0?this.avatarTexture:this.avatarTexture2,color:e.seatId.charCodeAt(0)%2?`#c6d8c4`:`#d5cfba`,transparent:!0,opacity:.74,depthWrite:!1,fog:!0}));t.scale.set(2.1,4.2,1),t.position.set(e.x,e.y+1.85,e.z),this.game.scene.add(t);let n=new Pr(new br({map:xd(e.name||`同游`,{width:320,height:96,fontSize:28,color:`rgba(243,234,214,.9)`,background:`rgba(25,38,28,.44)`,letterSpacing:2}),transparent:!0,depthWrite:!1,fog:!1}));n.scale.set(1.8,.54,1),n.position.set(e.x,e.y+4.25,e.z),this.game.scene.add(n);let r=new Pr(new br({map:this.glowMap,color:`#b9d4b5`,transparent:!0,opacity:.26,depthWrite:!1}));return r.scale.set(2.8,.9,1),r.position.set(e.x,e.y+.18,e.z),this.game.scene.add(r),{sprite:t,label:n,ring:r,target:new U(e.x,e.y+1.85,e.z),current:new U(e.x,e.y+1.85,e.z),lastSeen:performance.now(),name:e.name}}updateAvatars(e){for(let t of this.remoteAvatars.values()){t.current.lerp(t.target,.22),t.sprite.position.copy(t.current),t.label.position.set(t.current.x,t.current.y+2.4,t.current.z),t.ring.position.set(t.current.x,t.current.y-1.68,t.current.z);let n=t.sprite.material;n.opacity=t.lastSeen&&e-t.lastSeen>2200?.2:.72}}sendStaticToChannel(e){this.sendDC(e,{type:`ui`,state:this.lastUI??this.game.getUIState()})}sendWS(e){if(this.socket&&this.socket.readyState===WebSocket.OPEN)try{this.socket.send(JSON.stringify(e))}catch{}}sendDC(e,t){if(e.channel?.readyState===`open`)try{e.channel.send(JSON.stringify(t))}catch{}}get isConnected(){return this.socket?.readyState===WebSocket.OPEN}get connectedPeerCount(){return Array.from(this.peers.values()).filter(e=>e.pc.connectionState===`connected`).length}get uptime(){return Date.now()-this.startedAt}get lastUIState(){return this.lastUI}get staticState(){return this.game.getStaticUI()}dispose(){if(!this.disposed){this.disposed=!0,window.clearInterval(this.uiTimer),window.clearInterval(this.presenceTimer);for(let e of this.peers.keys())this.closePeer(e);this.socket?.close(1e3,`dispose`),this.capture?.getTracks().forEach(e=>e.stop()),this.capture=null}}};function qf(e,t){let n=document.getElementById(`loading-progress-bar`),r=document.getElementById(`loading-message`),i=document.getElementById(`loading-percent`);n&&(n.style.width=`${Math.max(4,Math.min(100,e))}%`),r&&(r.textContent=t),i&&(i.textContent=`${Math.round(e)}%`)}function Jf(e){let t=document.getElementById(`fatal-error`),n=document.getElementById(`fatal-message`);t&&t.classList.remove(`hidden`),n&&(n.textContent=e),console.error(`[Qianli]`,e)}async function Yf(){let e=new Promise(e=>window.setTimeout(e,7e3)),t=(async()=>{try{await Promise.all([document.fonts.load(`400 64px "Ma Shan Zheng"`,`千里江山青绿`),document.fonts.load(`400 16px "Noto Serif SC"`,`千里江山青绿`),document.fonts.load(`600 16px "Noto Serif SC"`,`千里江山青绿`)]),await document.fonts.ready}catch{}})();await Promise.race([t,e])}function Xf(){return new Promise(e=>requestAnimationFrame(()=>e()))}function Zf(){let e=new URLSearchParams(location.search).get(`quality`);return e===`low`||e===`medium`||e===`high`?e:`high`}function Qf(){try{let e=localStorage.getItem(`qianli-player-name`);if(e)return e;let t=`青绿客${String(Math.floor(Math.random()*90)+10)}`;return localStorage.setItem(`qianli-player-name`,t),t}catch{return`青绿客`}}var $f=null;async function ep(){qf(2,`研墨铺绢……`),await Xf(),await Yf(),qf(8,`铺开千里长卷……`),await Xf();let e=document.getElementById(`scene`);if(!e)throw Error(`找不到画布 #scene`);if(!window.WebGL2RenderingContext)throw Error(`此浏览器未启用 WebGL2，无法实时渲染青绿山水。请使用最新版 Chrome / Edge。`);let t=new Nf({canvas:e,quality:Zf(),cloud:!1}),n=new zf(t);await t.init((e,t)=>n.setLoading(e,t)),n.showReady(),n.setLoading(100,`长卷已就`);let r=new URLSearchParams(location.search).get(`cloudFallback`)===`1`,i=async(e,i)=>{$f&&=($f.abort(),null);let a=new Gf({room:e,role:i,name:Qf(),forceMjpeg:r},{onProgress:(e,t)=>n.setCloudProgress(e,t),onError:e=>{n.cloudError(e),$f=null},onJoined:()=>{n.hideCloudLaunch(),t.pauseRendering(),t.audio.setMuted(!0),t.exitPointerLock()}});$f=a,window.__QIANLI__.cloud=a,a.start()};if(n.setCloudHandlers({create:()=>{(async()=>{try{n.showCloudLaunch(`正在寻找一间临水的房间……`);let e=await Uf();await i(e.code,`player`)}catch(e){n.showCloudLaunch(`云路未能铺设`),n.cloudError(e instanceof Error?e.message:String(e))}})()},join:(e,t)=>{(async()=>{try{n.showCloudLaunch(`正在辨认房间码……`);let r=await Wf(e);await i(r.code,t?`spectator`:`player`)}catch(e){n.showCloudLaunch(`云路未能接通`),n.cloudError(e instanceof Error?e.message:String(e))}})()},cancel:()=>{$f?.abort(),$f=null,n.hideCloudLaunch()}}),window.__QIANLI__={game:t,ui:n,mode:`local`},new URLSearchParams(location.search).get(`autostart`)===`1`){let e=document.getElementById(`btn-local`);window.setTimeout(()=>e?.click(),120)}window.addEventListener(`error`,e=>{console.error(`[Qianli] uncaught`,e.error??e.message)}),window.addEventListener(`unhandledrejection`,e=>{console.error(`[Qianli] rejection`,e.reason)})}async function tp(){let e=new URLSearchParams(location.search),t=e.get(`token`)||``,n=e.get(`seatId`)||``,r=e.get(`room`)||``,i=e.get(`name`)||`云中客`;if(!t||!n||!r)throw Error(`云游画席凭证缺失`);document.body.classList.add(`cloud-seat`),document.title=`千里江山 · 云端画席`;let a=document.getElementById(`scene`);if(!a)throw Error(`找不到云端画布`);await Yf();let o=new Nf({canvas:a,quality:Zf(),cloud:!0});await o.init(),o.start({auto:!0});let s=new Kf(o,{token:t,seatId:n,room:r,name:i,iceServers:[]});window.__QIANLI__={game:o,seat:s,mode:`seat`},window.__CLOUD_SEAT__=s,console.log(`[seat] ready`,{room:r,seatId:n})}new URLSearchParams(location.search).get(`seat`)===`1`?tp().catch(e=>{let t=e instanceof Error?e.message:String(e);console.error(`[Qianli seat]`,e),Jf(`云席未能展开：${t}`)}):ep().catch(e=>{Jf(`画绢未能展开：${e instanceof Error?e.message:String(e)}`)});