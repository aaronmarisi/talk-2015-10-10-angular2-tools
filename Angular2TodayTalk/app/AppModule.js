/// <reference path="../typings/tsd.d.ts" />
System.register(['angular', 'angular-route'], function(exports_1) {
    var angular;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {}],
        execute: function() {
            angular.module('app', ['ngRoute']);
        }
    }
});
//# sourceMappingURL=AppModule.js.map