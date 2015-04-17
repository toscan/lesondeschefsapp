document.addEventListener('deviceready', function () {
    resize_cube();
    init_cube();
    swipe_cube();
    touch_menu_jukebox();
}, false);

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/home', { templateUrl: 'partials/jukebox.html' })
    .when('/jukebox', { templateUrl: 'partials/jukebox.html' })
    .when('/playing', { templateUrl: 'partials/playing.html' })
    .when('/account', { templateUrl: 'partials/account.html' })
    .otherwise({redirectTo:'/home'})
});