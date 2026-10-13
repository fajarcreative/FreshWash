import zlib
import struct
import math

def write_png(filename, width, height, pixels):
    def chunk(tag, data):
        return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)

    header = b'\x89PNG\r\n\x1a\n'
    # IHDR: width, height, bit_depth=8, color_type=6 (RGBA), compression=0, filter=0, interlace=0
    ihdr = chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0))
    
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0) # Filter type 0 (None)
        for x in range(width):
            r, g, b, a = pixels[y][x]
            raw_data.extend([r, g, b, a])
            
    idat = chunk(b'IDAT', zlib.compress(bytes(raw_data), 9))
    iend = chunk(b'IEND', b'')
    
    with open(filename, 'wb') as f:
        f.write(header + ihdr + idat + iend)

def generate_icon(size, out_path):
    pixels = [[(0, 0, 0, 0) for _ in range(size)] for _ in range(size)]
    center = size / 2
    r_corner = size * 0.22
    
    # Colors
    bg = (0, 104, 95, 255)       # #00685f
    cyan = (87, 223, 254, 255)   # #57dffe
    white = (255, 255, 255, 255) # white
    dark = (0, 48, 44, 255)      # dark teal

    for y in range(size):
        for x in range(size):
            # Check rounded box
            dx = max(0, abs(x - center) - (center - r_corner - size * 0.04))
            dy = max(0, abs(y - center) - (center - r_corner - size * 0.04))
            dist_sq = dx*dx + dy*dy
            if dist_sq <= r_corner*r_corner:
                pixels[y][x] = bg
            
            # Machine body (white box)
            if (size * 0.23 <= x <= size * 0.77) and (size * 0.22 <= y <= size * 0.78):
                pixels[y][x] = white

            # Control strip
            if (size * 0.23 <= x <= size * 0.77) and (size * 0.30 <= y <= size * 0.32):
                pixels[y][x] = (220, 230, 240, 255)

            # Circular drum
            drum_cx = size * 0.50
            drum_cy = size * 0.55
            drum_dist = math.hypot(x - drum_cx, y - drum_cy)
            
            if drum_dist <= size * 0.18:
                pixels[y][x] = cyan
            if drum_dist <= size * 0.15:
                pixels[y][x] = bg
            if drum_dist <= size * 0.11 and y >= drum_cy - size*0.02:
                pixels[y][x] = cyan
            if drum_dist <= size * 0.04:
                pixels[y][x] = white

            # Sparkle top right
            sp_dist = math.hypot(x - size * 0.76, y - size * 0.24)
            if sp_dist <= size * 0.045:
                pixels[y][x] = cyan

    write_png(out_path, size, size, pixels)
    print(f"Generated {out_path} ({size}x{size})")

SVG_CONTENT = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#008378"/>
      <stop offset="100%" stop-color="#005049"/>
    </linearGradient>
    <linearGradient id="drum" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#57dffe"/>
      <stop offset="100%" stop-color="#00687a"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Background squircle -->
  <rect x="20" y="20" width="472" height="472" rx="108" fill="url(#bg)"/>
  
  <!-- Machine Body -->
  <rect x="110" y="105" width="292" height="300" rx="36" fill="#ffffff" filter="url(#shadow)"/>
  
  <!-- Control Line -->
  <line x1="110" y1="170" x2="402" y2="170" stroke="#eaedff" stroke-width="4"/>
  
  <!-- Knobs & Buttons -->
  <circle cx="150" cy="138" r="10" fill="#57dffe"/>
  <circle cx="180" cy="138" r="8" fill="#00685f"/>
  <circle cx="360" cy="138" r="16" fill="#00685f"/>
  <circle cx="360" cy="138" r="6" fill="#ffffff"/>

  <!-- Porthole / Drum -->
  <circle cx="256" cy="285" r="95" fill="url(#drum)"/>
  <circle cx="256" cy="285" r="80" fill="#00685f"/>
  
  <!-- Water Waves -->
  <path d="M 180 295 Q 218 280 256 295 T 332 295 A 80 80 0 0 1 180 295 Z" fill="#57dffe" opacity="0.9"/>
  <circle cx="256" cy="270" r="16" fill="#ffffff" opacity="0.9"/>
  <circle cx="280" cy="250" r="8" fill="#57dffe" opacity="0.8"/>
  <circle cx="225" cy="260" r="6" fill="#ffffff" opacity="0.6"/>

  <!-- Sparkles -->
  <path d="M 410 80 L 418 100 L 438 108 L 418 116 L 410 136 L 402 116 L 382 108 L 402 100 Z" fill="#57dffe"/>
  <path d="M 100 80 L 105 92 L 117 97 L 105 102 L 100 114 L 95 102 L 83 97 L 95 92 Z" fill="#89f5e7"/>
</svg>"""

with open("assets/icon.svg", "w") as f:
    f.write(SVG_CONTENT)
print("Generated assets/icon.svg")

generate_icon(192, "assets/icon-192.png")
generate_icon(512, "assets/icon-512.png")
generate_icon(180, "assets/apple-touch-icon.png")

