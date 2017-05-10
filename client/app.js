var app = angular.module('ContactList', ['ngRoute', 'ngResource', 'ContactList.factories', 'ContactList.controllers']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    })
    .when('/:id', {
        
        templateUrl: 'views/single.html',
        controller: 'SingleController'
    })
    
}]);