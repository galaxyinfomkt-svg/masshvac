#!/bin/bash
# Lighthouse mobile (simulado, padrão PSI) contra produção, shard do workflow
set +e
mkdir -p "$OUT/lh"
node -e "const u=require('./audit/urls.json').filter((_,i)=>i%$TOTAL===$SHARD);console.log(u.join('\n'))" | while read p; do
  n=$(echo "$p" | sed 's#^/$#home#; s#^/##; s#/#__#g')
  npx --yes lighthouse@12.2.1 "https://masshvac.net$p" --quiet --chrome-flags="--headless=new --no-sandbox" --output=json --output-path="/tmp/lh.json" --form-factor=mobile --only-categories=performance,accessibility,best-practices,seo >/dev/null 2>&1
  node -e "
  const d=require('/tmp/lh.json');const a=d.audits;const pick=k=>a[k]?{v:a[k].numericValue,s:a[k].score,d:a[k].displayValue}:null;
  const fails=Object.entries(a).filter(([k,v])=>v.score!==null&&v.score<0.9&&['binary','numeric','metricSavings'].includes(v.scoreDisplayMode)).map(([k,v])=>({id:k,t:v.title,s:v.score,d:v.displayValue||''}));
  const lcpEl=(a['largest-contentful-paint-element']&&a['largest-contentful-paint-element'].details&&JSON.stringify(a['largest-contentful-paint-element'].details).slice(0,400))||'';
  const tp=(a['third-party-summary'].details||{items:[]}).items.map(i=>({e:i.entity&&i.entity.text||i.entity,size:i.transferSize,block:i.blockingTime}));
  const res=(a['network-requests'].details||{items:[]}).items.length;
  require('fs').writeFileSync('$OUT/lh/$n.json',JSON.stringify({url:'$p',scores:Object.fromEntries(Object.entries(d.categories).map(([k,v])=>[k,v.score])),lcp:pick('largest-contentful-paint'),fcp:pick('first-contentful-paint'),tbt:pick('total-blocking-time'),cls:pick('cumulative-layout-shift'),si:pick('speed-index'),tti:pick('interactive'),ttfb:pick('server-response-time'),weight:pick('total-byte-weight'),dom:pick('dom-size'),requests:res,lcpEl,thirdParty:tp,fails}));
  " 2>/dev/null
done
