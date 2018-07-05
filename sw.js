self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('restaurant-static-v1').then(function(cache) {
            return cache.addAll([
                '/',
                'index.html',
                'restaurant.html',
                'css/styles.css',
                'js/dbhelper.js',
                'js/main.js',
                'js/regist.js',
                'js/restaurant_info.js',
                'data/restaurants.json',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event){
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if(response) return response;
            return fetch(event.request);
        })
        .catch(function(error) {
            console.log('error cannot fetch');
        })
    );
});
