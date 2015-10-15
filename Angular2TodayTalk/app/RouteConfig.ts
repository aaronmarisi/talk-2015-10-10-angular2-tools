/// <reference path='../typings/tsd.d.ts'/>

import * as angular from 'angular';
import 'angular-route';
import './AppModule';
import './Main';
import './AvengerDetails';

angular.module('app')
    .config(['$routeProvider', '$locationProvider',

    function ($routeProvider: angular.route.IRouteProvider,
        $locationProvider: angular.ILocationProvider) {

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