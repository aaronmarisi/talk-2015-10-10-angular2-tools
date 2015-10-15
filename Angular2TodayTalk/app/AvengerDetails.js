/// <reference path='../typings/tsd.d.ts'/>
System.register(['angular', './AppModule', './AvengersService'], function(exports_1) {
    var angular;
    var AvengerDetails;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            AvengerDetails = (function () {
                function AvengerDetails(avengersService, $routeParams) {
                    var avenger = avengersService.get($routeParams.uri);
                    this.alias = avenger.alias;
                    this.name = avenger.name;
                }
                AvengerDetails.$inject = ['AvengersService', '$routeParams'];
                return AvengerDetails;
            })();
            angular.module('app')
                .controller('AvengerDetails', AvengerDetails);
        }
    }
});
//# sourceMappingURL=AvengerDetails.js.map