

const cacheName = 'restaurant-v1';
const cacheAssets = [
    '/',
    '/index.html',
    '/restaurant.html',
    'css/stylesRestaurant.css',
    'css/stylesMain.css',
    'css/stylesRestaurantDetail.css',
    'css/mediaQueries.css',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js',
    'img/*'


];

//Listen for the instalation event fired when service worker is registered. then add the cache assets
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(cacheAssets);
        })
    );

});


//Remove old cache 
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName.startsWith('restaurant-v1') && staticCacheName != cacheName) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

//See if the fetch url is already cached, if yes, return it. If not, fetch it and add it to the cache
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            else {
                return fetch(event.request).then(function (response) {
                    const clonedResponse=response.clone();
                    caches.open('restaurant-v1').then(function(cache){
                        cache.put(event.request, clonedResponse);
                    })
                    return response;
                })
         
            }
        })
    );
});