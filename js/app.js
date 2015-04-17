document.addEventListener('deviceready', function () {
   
    resize_cube();
    swipe_cube();
    stop_animate();
    touch_menu_jukebox();
}, false);


var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.
    when('/home', { templateUrl: 'partials/home.html', controller: 'NavCtrl' })
    .when('/jukebox', { templateUrl: 'partials/jukebox.html', controller: 'NavCtrl' })
    .when('/playing', { templateUrl: 'partials/playing.html', controller: 'NavCtrl' })
    .when('/account', { templateUrl: 'partials/account.html', controller: 'NavCtrl' })
    .otherwise({ redirectTo: '/home' })

});