    // Service Worker - Básico
    self.addEventListener('install', (event) => {
        event.waitUntil(
          caches.open('kidabelhao-cache').then((cache) => {
            return cache.addAll([
              '/', // Página inicial
              '/index.html', // Se necessário
              '/style.css', // Se necessário
              '/rizz.js', // Se necessário
              '/img/totally-spies-clover.gif', // Se necessário
              '/img/downloading_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png', // Se necessário
              '/cocô_paranaense.html', // Se necessário
              '/xingling.html', // Se necessário
              '/filiosto.html', // Se necessário
              '/caclau shlou.html', // Se necessário
              '/hackinstoinch.html', // Se necessário
              '/hope.html', // Se necessário
              '/imo.js', // Se necessário
              '/img/Cocavspepsi.jpg', // Se necessário
              '/img/download.jpeg', // Se necessário
              '/img/download.png', // Se necessário
              '/img/images.webp', // Se necessário
              '/img/fart-farting.gif', // Se necessário
              '/img/zif.gif', // Se necessário
              '/img/gimp-icon-2048x1558-t6skr97y.png', // Se necessário
              '/img/kio.jpeg', // Se necessário
              '/img/olo.png', // Se necessário
              '/home.html', // Se necessário
              '/img/totaly-spies-clover.gif', // Se necessário
            ]);
          })
        );   
      });
      
      self.addEventListener('fetch', (event) => {
        event.respondWith(
          caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
          })
        );
      });
