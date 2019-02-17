

const cacheName='restaurant-v1';
const cacheAssets=[
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
   

];

//Listen for the instalation event fired when service worker is registered
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(cacheAssets);
        })
    );

});



self.addEventListener('activate', function(event){
    event.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promise.all(
                cacheNames.map(function(cacheName){
                    if(cacheName.startsWith('restaurant-v1') && staticCacheName!=cacheName){
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event){
event.respondWith(
    caches.match(e.request).then(function(response){
if(response){
    return response;
}
else{
    return fetch(event.request);
}
    })
);
});