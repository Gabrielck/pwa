var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
	  console.log('Registrou cache');
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
		'/world.jpg'
      ]);
    })
  )
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});
