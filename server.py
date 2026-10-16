#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys
import socket

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and PWA friendly headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Service-Worker-Allowed', '/')
        super().end_headers()

def run_server():
    port = PORT
    local_ip = get_local_ip()
    
    for _ in range(10):
        try:
            # Bind to 0.0.0.0 so all network devices (HP / tablet) can access
            with socketserver.TCPServer(("0.0.0.0", port), Handler) as httpd:
                print("=" * 60)
                print("🌟 [FreshWash Smart Laundry PWA Server] AKTIF!")
                print(f"📱 Buka di Komputer (Local):  http://localhost:{port}/")
                print(f"📲 Buka & Download di HP:      http://{local_ip}:{port}/")
                print(f"📁 Serving Directory:         {DIRECTORY}")
                print("=" * 60)
                sys.stdout.flush()
                httpd.serve_forever()
        except OSError as e:
            if e.errno == 48: # Address already in use
                port += 1
                continue
            raise

if __name__ == "__main__":
    run_server()
