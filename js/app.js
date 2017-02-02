angular.module('todoApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/landing');
    
    $stateProvider
    .state('landing', {
        url: '/landing',
        templateUrl: 'landing.html',
        controller : 'TodoLandingController'
    })

    $stateProvider
    .state('register', {
        url: '/register',
        templateUrl: 'register.html',
        controller : 'TodoRegistrationController'
    })

    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'login.html',
        controller : 'TodoLoginController'
    })

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'home.html',
        contoller: 'TodoHomeController'
    })
});