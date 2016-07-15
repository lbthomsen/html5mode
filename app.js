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
                    templateUrl: 'templates/home.html'
                })
                .when('/page1', {
                    templateUrl: 'templates/page1.html'
                })
                .when('/page2', {
                    templateUrl: 'templates/page2.html'
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
