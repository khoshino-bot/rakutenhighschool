// オフライン対応（Service Worker）
// 方針: ネットに繋がっていれば常に最新版を表示し、繋がらない（または3秒応答が無い）ときだけ
//       端末内に保存した版を表示する。GitHub 上で index.html を直したら次に開いた時点で反映される。
//       GitHub Pages は 10 分間ブラウザ保存を許可する応答を返すため、cache:'no-cache' で毎回サーバーに
//       更新有無を確認させる（変更が無ければ小さな応答で済む）。
const CACHE = 'mitsumori-v3';
const FILES = ['./', './index.html'];
const NETWORK_TIMEOUT_MS = 3000;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function fetchWithTimeout(request) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), NETWORK_TIMEOUT_MS);
    fetch(request, { cache: 'no-cache' }).then((res) => { clearTimeout(timer); resolve(res); }, (err) => { clearTimeout(timer); reject(err); });
  });
}

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.open(CACHE).then(async (c) => {
      try {
        const res = await fetchWithTimeout(e.request);
        if (res && res.ok) c.put(e.request, res.clone());
        return res;
      } catch (_) {
        const cached = await c.match(e.request, { ignoreSearch: true });
        return cached || Response.error();
      }
    })
  );
});
