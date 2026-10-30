# -*- coding: utf-8 -*-
"""《千里江山 · 合卷》本机预览：http://127.0.0.1:8910/"""
import http.server
import os
import socketserver
import webbrowser

PORT = 8910
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # 网站根目录（上一层）


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def log_message(self, *args):
        pass


def main():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.ThreadingTCPServer(("127.0.0.1", PORT), Handler) as httpd:
        print(f"合卷已在本地展开：http://127.0.0.1:{PORT}/")
        print("按 Ctrl+C 收卷。")
        try:
            webbrowser.open(f"http://127.0.0.1:{PORT}/")
        except Exception:
            pass
        httpd.serve_forever()


if __name__ == "__main__":
    main()