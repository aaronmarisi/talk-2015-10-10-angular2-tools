/// <reference path="../typings/tsd.d.ts" />
System.register(['./AppModule', './AvengersService', 'angular'], function(exports_1) {
    var angular;
    var Main;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (angular_1) {
                angular = angular_1;
            }],
        execute: function() {
            //import AppModule from './AppModule';
            // controller definition
            Main = (function () {
                function Main(avengersService) {
                    this.heading = 'Avengers';
                    this.avengers = avengersService.all();
                }
                // minification-ready injectibles
                Main.$inject = ['AvengersService'];
                return Main;
            })();
            // register controller with angular 'app' module
            angular.module('app')
                .controller('Main', Main);
        }
    }
});
//# sourceMappingURL=Main.js.map