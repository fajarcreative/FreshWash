#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and disable aggressive caching for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

def run_server():
    port = PORT
    for _ in range(10):
        try:
            with socketserver.TCPServer(("", port), Handler) as httpd:
                print(f"[FreshWash Server] Running at http://localhost:{port}/")
                print(f"[FreshWash Server] Serving directory: {DIRECTORY}")
                sys.stdout.flush()
                httpd.serve_forever()
        except OSError as e:
            if e.errno == 48: # Address already in use
                port += 1
                continue
            raise

if __name__ == "__main__":
    run_server()

