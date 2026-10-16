// Galaxy IT audit capture — roda no GitHub Actions contra a produção
const { chromium } = require('playwright');
const fs = require('fs');
const axeSrc = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const BASE = process.env.BASE || 'https://masshvac.net';
const SHARD = +process.env.SHARD, TOTAL = +process.env.TOTAL;
const urls = JSON.parse(fs.readFileSync(__dirname + '/urls.json')).filter((_, i) => i % TOTAL === SHARD);
const OUT = process.env.OUT || 'out';
fs.mkdirSync(`${OUT}/desktop`, { recursive: true }); fs.mkdirSync(`${OUT}/mobile`, { recursive: true });
const VPS = { desktop: { viewport: { width: 1440, height: 900 } }, mobile: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1' } };
async function one(ctx, path, vp) {
  const page = await ctx.newPage(); const errors = []; const failed = [];
  page.on('pageerror', e => errors.push(e.message.slice(0, 200)));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text().slice(0, 200)); });
  page.on('requestfailed', r => failed.push(r.url().slice(0, 120) + ' ' + (r.failure() || {}).errorText));
  page.on('response', r => { if (r.status() >= 400) failed.push(r.status() + ' ' + r.url().slice(0, 120)); });
  const t0 = Date.now();
  const res = await page.goto(BASE + path, { waitUntil: 'load', timeout: 60000 });
  const loadMs = Date.now() - t0;
  await page.waitForTimeout(2500);
  await page.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += 300) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } window.scrollTo(0, 0); });
  await page.waitForTimeout(2000);
  const m = await page.evaluate(() => {
    const vw = innerWidth, vis = e => { const s = getComputedStyle(e), b = e.getBoundingClientRect(); return s.display !== 'none' && s.visibility !== 'hidden' && b.width > 0 && b.height > 0; };
    const taps = [...document.querySelectorAll('a[href],button,input,select,textarea,[role=button]')].filter(vis);
    const hs = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(h => +h.tagName[1]);
    return {
      scrollWidth: document.documentElement.scrollWidth, vw, height: document.documentElement.scrollHeight,
      tapTotal: taps.length, tapUnder24: taps.filter(e => { const b = e.getBoundingClientRect(); return b.width < 24 || b.height < 24; }).length,
      tapUnder44: taps.filter(e => { const b = e.getBoundingClientRect(); return b.width < 44 || b.height < 44; }).length,
      headingSkips: hs.filter((h, i) => i > 0 && h - hs[i - 1] > 1).length,
      hiddenReveal: [...document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale')].filter(e => getComputedStyle(e).opacity === '0').length,
      brokenHash: [...new Set([...document.querySelectorAll('a[href*="#"]')].map(a => a.getAttribute('href')).filter(h => { const [p, id] = h.split('#'); if (!id || (p && p !== location.pathname)) return false; const t = document.getElementById(id); return !t || getComputedStyle(t).display === 'none'; }))],
      imgs: [...document.images].map(i => ({ src: i.currentSrc.slice(0, 140), alt: i.getAttribute('alt'), nw: i.naturalWidth, nh: i.naturalHeight, w: Math.round(i.getBoundingClientRect().width), h: Math.round(i.getBoundingClientRect().height), loading: i.loading })),
      iframes: [...document.querySelectorAll('iframe')].map(f => ({ src: (f.src || '').slice(0, 90), visible: vis(f), w: Math.round(f.getBoundingClientRect().width), h: Math.round(f.getBoundingClientRect().height) })),
      ctaAboveFold: [...document.querySelectorAll('a,button')].filter(e => vis(e) && e.getBoundingClientRect().top < innerHeight && e.getBoundingClientRect().bottom > 0 && /call|quote|estimate|\(508\)/i.test(e.innerText)).map(e => e.innerText.trim().slice(0, 40)),
      fixed: [...document.querySelectorAll('body *')].filter(e => ['fixed', 'sticky'].includes(getComputedStyle(e).position) && vis(e)).map(e => { const b = e.getBoundingClientRect(); return { pos: getComputedStyle(e).position, tag: e.tagName, id: e.id, cls: String(e.className).slice(0, 60), x: Math.round(b.x), y: Math.round(b.y), w: Math.round(b.width), h: Math.round(b.height), z: getComputedStyle(e).zIndex }; }),
      domNodes: document.querySelectorAll('*').length,
    };
  });
  await page.addScriptTag({ content: axeSrc });
  m.axe = await page.evaluate(async () => (await axe.run(document, { resultTypes: ['violations'] })).violations.map(v => ({ id: v.id, impact: v.impact, help: v.help, n: v.nodes.length, targets: v.nodes.slice(0, 5).map(n => n.target.join(' ')) })));
  m.status = res.status(); m.loadMs = loadMs; m.errors = errors.slice(0, 20); m.failed = [...new Set(failed)].slice(0, 30);
  const name = path === '/' ? 'home' : path.slice(1).replace(/\//g, '__');
  await page.screenshot({ path: `${OUT}/${vp}/${name}.jpg`, fullPage: true, type: 'jpeg', quality: 58 });
  if (vp === 'desktop') await page.screenshot({ path: `${OUT}/${vp}/${name}__fold.jpg`, type: 'jpeg', quality: 70 });
  else await page.screenshot({ path: `${OUT}/${vp}/${name}__fold.jpg`, type: 'jpeg', quality: 70 });
  await page.close(); return m;
}
(async () => {
  const browser = await chromium.launch();
  const results = {};
  for (const vp of Object.keys(VPS)) {
    const ctx = await browser.newContext(VPS[vp]);
    const q = [...urls];
    await Promise.all(Array.from({ length: 3 }, async () => { while (q.length) { const p = q.shift(); try { results[vp + ' ' + p] = await one(ctx, p, vp); } catch (e) { results[vp + ' ' + p] = { fail: String(e).slice(0, 300) }; } } }));
    await ctx.close();
  }
  fs.writeFileSync(`${OUT}/sweep_${SHARD}.json`, JSON.stringify(results));
  // menu mobile aberto + teste dos CTAs (só no shard 0)
  if (SHARD === 0) {
    const ctx = await browser.newContext(VPS.mobile); const p = await ctx.newPage();
    await p.goto(BASE + '/cities/milford', { waitUntil: 'load' }); await p.waitForTimeout(2500);
    await p.click('button[aria-label="Toggle menu"]'); await p.waitForTimeout(900);
    await p.screenshot({ path: `${OUT}/mobile/_menu_aberto.jpg`, type: 'jpeg', quality: 75 });
    await p.click('button[aria-label="Close menu"]'); await p.waitForTimeout(700);
    const before = await p.evaluate(() => scrollY);
    await p.click('nav[aria-label="Quick contact actions"] a[href="#quote"]'); await p.waitForTimeout(1500);
    const after = await p.evaluate(() => ({ y: scrollY, hash: location.hash, quoteExists: !!document.getElementById('quote') }));
    await p.screenshot({ path: `${OUT}/mobile/_get_quote_clicado.jpg`, type: 'jpeg', quality: 75 });
    fs.writeFileSync(`${OUT}/cta_test.json`, JSON.stringify({ before, after }));
    await p.goto(BASE + '/services', { waitUntil: 'load' }); await p.waitForTimeout(2500);
    const t = await p.$('table'); if (t) { await t.scrollIntoViewIfNeeded(); await p.waitForTimeout(800); await p.screenshot({ path: `${OUT}/mobile/_tabela_services.jpg`, type: 'jpeg', quality: 75 }); }
    // desktop: Free Estimate do header numa página interna
    const d = await (await browser.newContext(VPS.desktop)).newPage();
    await d.goto(BASE + '/cities/milford', { waitUntil: 'load' }); await d.waitForTimeout(2500);
    await d.click('header a[href="/#quote"]'); await d.waitForTimeout(3000);
    await d.screenshot({ path: `${OUT}/desktop/_free_estimate_clicado.jpg`, type: 'jpeg', quality: 75 });
    // chat widget aberto após 8s
    const c = await (await browser.newContext(VPS.mobile)).newPage();
    await c.goto(BASE + '/', { waitUntil: 'load' }); await c.mouse.wheel(0, 400); await c.waitForTimeout(9000);
    await c.screenshot({ path: `${OUT}/mobile/_chat_widget.jpg`, type: 'jpeg', quality: 75 });
  }
  await browser.close();
})();
