#!/bin/bash
# PageSpeed Insights (inclui CrUX/dados de campo) para páginas-chave
mkdir -p "$OUT/psi"
for p in / /cities/milford /services/heating-installation-repair /cities/framingham /blog/how-often-should-you-service-your-ac /cities/milford/heating-installation-repair; do
  n=$(echo "$p" | sed 's#^/$#home#; s#^/##; s#/#__#g')
  for s in mobile desktop; do
    curl -s "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https%3A%2F%2Fmasshvac.net$p&strategy=$s&category=performance&category=seo&category=accessibility&category=best-practices" -o "/tmp/psi.json"
    node -e "const d=require('/tmp/psi.json');if(d.error){require('fs').writeFileSync('$OUT/psi/${n}_$s.json',JSON.stringify({error:d.error.message}));process.exit()}const l=d.lighthouseResult;require('fs').writeFileSync('$OUT/psi/${n}_$s.json',JSON.stringify({field:d.loadingExperience,origin:d.originLoadingExperience,scores:Object.fromEntries(Object.entries(l.categories).map(([k,v])=>[k,v.score])),lcp:l.audits['largest-contentful-paint'].displayValue,tbt:l.audits['total-blocking-time'].displayValue,cls:l.audits['cumulative-layout-shift'].displayValue,fcp:l.audits['first-contentful-paint'].displayValue,si:l.audits['speed-index'].displayValue,shot:l.audits['final-screenshot']&&l.audits['final-screenshot'].details&&l.audits['final-screenshot'].details.data}))" 2>/dev/null
    sleep 4
  done
done
