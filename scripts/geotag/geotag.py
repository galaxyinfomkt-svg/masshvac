import re, json, glob, os, urllib.request, urllib.parse
from fractions import Fraction
from PIL import Image
from PIL.TiffImagePlugin import IFDRational
UA={'User-Agent':'Mozilla/5.0'}
# 1) town centroids (official Census TIGERweb county-subdivision internal point)
base="https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Places_CouSub_ConCity_SubMCD/MapServer/1/query"
coords={}
for f in glob.glob('facts/*.json'):
    d=json.load(open(f,encoding='utf8'))
    q=urllib.parse.urlencode({"where":f"GEOID='{d['geoid']}'","outFields":"CENTLAT,CENTLON,INTPTLAT,INTPTLON,BASENAME","returnGeometry":"false","f":"json"})
    a=json.loads(urllib.request.urlopen(urllib.request.Request(base+"?"+q,headers=UA),timeout=60).read())['features'][0]['attributes']
    coords[d['name']]=(float(a['INTPTLAT']),float(a['INTPTLON']))
json.dump(coords,open('geo/coords.json','w'),indent=1)
print(len(coords),'towns', coords.get('Milford'))
# 2) image -> city from projects.ts
src=open('wt6/src/data/projects.ts',encoding='utf8').read()
img_city={}
for m in re.finditer(r'city:\s*"([^"]+), MA",\s*image:\s*"([^"]+)"',src):
    img_city.setdefault(m.group(2),set()).add(m.group(1))
urls=json.load(open('geo/urls.json'))
def dms(v):
    v=abs(v); d=int(v); m=int((v-d)*60); s=(v-d-m/60)*3600
    return (IFDRational(d,1),IFDRational(m,1),IFDRational(int(round(s*1000)),1000))
out={}
os.makedirs('wt6/public/geo',exist_ok=True)
for u in urls:
    name=u.rsplit('/',1)[1]
    cities=img_city.get(u,set())
    if len(cities)==1:
        town=next(iter(cities)); basis=f'project photo, {town}, MA'
    else:
        town='Milford'; basis='company photo, Mass HVAC base in Milford, MA' if not cities else 'shared by projects in several towns; Milford base'
    lat,lon=coords[town]
    im=Image.open('geo/orig/'+name).convert('RGB')
    ex=Image.Exif()
    ex[0x010e]=f'Mass HVAC Inc - {basis}'
    ex[0x8298]='Mass HVAC Inc'
    g=ex.get_ifd(0x8825)
    g[1]='N' if lat>=0 else 'S'; g[2]=dms(lat); g[3]='E' if lon>=0 else 'W'; g[4]=dms(lon)
    ex[0x8825]=g
    pid=os.path.splitext(name)[0]
    kb=0
    for w in (828,1200):
        v=im if im.width<=w else im.resize((w,round(im.height*w/im.width)),Image.LANCZOS)
        dest=f'wt6/public/geo/{pid}-{w}.jpg'
        v.save(dest,'JPEG',quality=82,optimize=True,progressive=True,exif=ex)
        assert Image.open(dest).getexif().get_ifd(0x8825), dest
        kb+=os.path.getsize(dest)//1024
    out[pid]={'town':town,'basis':basis,'kb':kb}
json.dump(out,open('geo/map.json','w'),indent=1)
print(len(out),'photos',sum(v['kb'] for v in out.values()),'KB total')
