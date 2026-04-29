const CACHE_NAME = 'agenda-v1.1.2';
const ASSETS = [
  './',
  './index.html',
  'https://cdn-icons-png.flaticon.com/512/8740/8740776.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
