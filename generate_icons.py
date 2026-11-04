import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('static/icons', exist_ok=True)

def create_health_icon(size, filename):
    # Create image with RGBA
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Background circle - Teal/Emerald Green gradient representation
    # Color: #00796B (Medical teal)
    margin = size * 0.04
    draw.ellipse([margin, margin, size - margin, size - margin], fill=(0, 121, 107, 255))
    
    # Inner border
    inner_margin = size * 0.07
    draw.ellipse([inner_margin, inner_margin, size - inner_margin, size - inner_margin], 
                 outline=(255, 255, 255, 220), width=max(2, int(size * 0.02)))
    
    # Medical cross in white
    # Horizontal bar
    c_x, c_y = size / 2, size / 2
    bar_w = size * 0.52
    bar_h = size * 0.18
    r = int(size * 0.03)
    
    # Draw horizontal bar of cross
    draw.rounded_rectangle([c_x - bar_w/2, c_y - bar_h/2, c_x + bar_w/2, c_y + bar_h/2], radius=r, fill=(255, 255, 255, 255))
    # Draw vertical bar of cross
    draw.rounded_rectangle([c_x - bar_h/2, c_y - bar_w/2, c_x + bar_h/2, c_y + bar_w/2], radius=r, fill=(255, 255, 255, 255))
    
    # Inner red/coral heart or accent in the center of the cross
    accent_r = size * 0.07
    draw.ellipse([c_x - accent_r, c_y - accent_r, c_x + accent_r, c_y + accent_r], fill=(0, 150, 136, 255))
    
    # Save image
    img.save(filename, 'PNG')
    print(f"Generated {filename} ({size}x{size})")

create_health_icon(192, 'static/icons/icon-192.png')
create_health_icon(512, 'static/icons/icon-512.png')
create_health_icon(64, 'static/icons/favicon.png')

# Create favicon.ico
img_favicon = Image.open('static/icons/favicon.png')
img_favicon.save('static/icons/favicon.ico', format='ICO')
print("Generated static/icons/favicon.ico")

# Also create SVG version
svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <circle cx="256" cy="256" r="236" fill="#00796B" stroke="#ffffff" stroke-width="12"/>
  <rect x="130" y="210" width="252" height="92" rx="16" fill="#ffffff"/>
  <rect x="210" y="130" width="92" height="252" rx="16" fill="#ffffff"/>
  <circle cx="256" cy="256" r="32" fill="#009688"/>
</svg>'''
with open('static/icons/icon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)
print("Generated static/icons/icon.svg")

