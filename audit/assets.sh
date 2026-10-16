#!/bin/bash
# Baixa as imagens originais da CDN e registra tamanho/dimensão; checa domínios e NAP
mkdir -p "$OUT/assets"
for u in $(grep -ho 'https://assets.cdn.filesafe.space/[^"'"'"' )]*' -r src | sort -u); do
  f=$(basename "$u"); curl -s -o "$OUT/assets/$f" "$u"
done
python3 - <<'PY'
import os,json,subprocess
out=os.environ['OUT']+'/assets';r=[]
for f in sorted(os.listdir(out)):
    p=out+'/'+f; s=os.path.getsize(p)
    try: dim=subprocess.check_output(['identify','-format','%wx%h %m',p]).decode()
    except Exception: dim='?'
    r.append({'file':f,'bytes':s,'dim':dim})
json.dump(r,open(os.environ['OUT']+'/assets_report.json','w'),indent=1)
PY
for h in http://masshvac.net http://www.masshvac.net https://www.masshvac.net https://masshvac.net/index.html https://masshvac.net/cities/Milford "https://masshvac.net/?utm_source=x" https://masshvac.net/sitemap.xml https://masshvac.net/robots.txt https://masshvac.net/nao-existe; do
  echo "== $h" >> "$OUT/http_checks.txt"; curl -s -o /dev/null -D - "$h" | grep -iE "^(HTTP|location|x-robots|cache-control|content-type|x-vercel-cache|link)" >> "$OUT/http_checks.txt"
done
curl -s https://masshvac.net/sitemap.xml -o "$OUT/sitemap_prod.xml"
