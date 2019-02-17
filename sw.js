

const cacheName='restaurant-v1';
const cacheAssets=[
    'index.html',
    'restaurant.html',
    '/css/main.css',
    '/css/responsive.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/img/*',
    '/js/register.js'
];

//Listen for the instalation event fired when service worker is registered
self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open('restaurant-v1').then(function(cache){
            return cache.addAll(cacheAssets);
        })
    );

});