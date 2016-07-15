/*
 * app.js
 */

    var appName = 'app';

    var app = angular.module(appName, [
        
    ]);

    app.config(['$locationProvider',
        function ($locationProvider) {

        // None of that hash bang crap
        $locationProvider.html5Mode({
            enabled:true,
            requireBase: false
        });
    }

]);

/*
 * vim: ts=4 et nowrap autoindent
 */
