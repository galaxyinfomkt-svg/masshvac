"""Process Drive photos: strip nothing else, write GPS (Mass HVAC base, Milford) + description, save 828/1200 px."""
import json, os
from PIL import Image, ImageOps
from PIL.TiffImagePlugin import IFDRational
NEW = "003 008 009 010 012 017 022 023 027 029 031 032 035 036 037 038 039 052 055 060 063 064 065 071".split()
lat, lon = json.load(open('geo/coords.json'))['Milford']
def dms(v):
    v = abs(v); d = int(v); m = int((v - d) * 60); s = (v - d - m / 60) * 3600
    return (IFDRational(d, 1), IFDRational(m, 1), IFDRational(int(round(s * 1000)), 1000))
os.makedirs('wt7/public/geo', exist_ok=True)
for n in NEW:
    im = ImageOps.exif_transpose(Image.open(f'drive/img/{n}.jpg')).convert('RGB')
    ex = Image.Exif()
    ex[0x010e] = 'Mass HVAC Inc - installation photo (location: Mass HVAC base, Milford, MA)'
    ex[0x8298] = 'Mass HVAC Inc'
    g = ex.get_ifd(0x8825)
    g[1] = 'N'; g[2] = dms(lat); g[3] = 'W'; g[4] = dms(lon)
    ex[0x8825] = g
    for w in (828, 1200):
        v = im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        dest = f'wt7/public/geo/d{n}-{w}.jpg'
        v.save(dest, 'JPEG', quality=82, optimize=True, progressive=True, exif=ex)
        assert Image.open(dest).getexif().get_ifd(0x8825), dest
print(len(NEW), 'photos', sum(os.path.getsize(f'wt7/public/geo/{f}') for f in os.listdir('wt7/public/geo') if f.startswith('d')) // 1024, 'KB')
print({n: Image.open(f'wt7/public/geo/d{n}-1200.jpg').size for n in NEW})
