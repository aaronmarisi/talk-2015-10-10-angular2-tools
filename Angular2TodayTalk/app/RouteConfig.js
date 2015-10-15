/// <reference path='../typings/tsd.d.ts'/>
System.register(['angular', 'angular-route', './AppModule', './Main', './AvengerDetails'], function(exports_1) {
    var angular;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            angular.module('app')
                .config(['$routeProvider', '$locationProvider',
                function ($routeProvider, $locationProvider) {
                    $routeProvider.
                        when('/', {
                        templateUrl: 'app/avengers.html',
                        controller: 'Main'
                    }).
                        when('/:uri', {
                        templateUrl: 'app/details.html',
                        controller: 'AvengerDetails'
                    }).
                        otherwise({
                        redirectTo: '/'
                    });
                    $locationProvider.html5Mode(true);
                }
            ]);
        }
    }
});
//# sourceMappingURL=RouteConfig.js.map