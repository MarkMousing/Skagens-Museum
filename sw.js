self.addEventListener('install', function (event) {
    console.log('SW Installed');
    event.waitUntil(
    caches.open('static')
        .then(function (cache) {
           //cache.add('/');
           //cache.add('/index.html');
           //cache.add('/src/js/app.js');
            cache.addAll([
               '/',
               '/index.html',
               '/artister.html',
               '/info.html',
               '/maps.html',
               '/udstilling.html',
               '/src/js/app.js',
               '/src/css/app.css',
               '/src/css/master.css',
               '/src/css/artists.css',
               '/src/images/pwa.jpg',
               '/manifest.json',
               '/src/js/fetch.js',
               '/src/js/artister/fetch-artits.js',
               '/src/js/artister/page.json',
               '/src/js/artister/udstilling.json',
               '/src/js/artister/udstilling-fetch.js',
               '/src/js/goback.js',
               '/src/js/loading.js',
               '/src/js/map.js',
               '/sites.json',
               '/package.json',
               '/package-lock.json',
                '/src/video/ArtMuseumofSkagen720p.mp4'
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('SW Activated');
});

