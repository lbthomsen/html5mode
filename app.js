/*
 * app.js
 */

var appName = 'app';

var app = angular.module(appName, [
        'ngRoute'
]);

app.config(['$locationProvider', '$routeProvider', 
    function ($locationProvider, $routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'templates/problem.html'
            })
            .when('/solution', {
                templateUrl: 'templates/solution.html'
            })
            .when('/about', {
                templateUrl: 'templates/about.html'
            });

        // None of that hash bang crap
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }

]);

/*
 * vim: ts=4 et nowrap autoindent
 */
