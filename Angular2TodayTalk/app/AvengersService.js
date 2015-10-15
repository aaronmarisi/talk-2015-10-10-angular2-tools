/// <reference path="../typings/tsd.d.ts" />
System.register(['angular', './AppModule'], function(exports_1) {
    var angular;
    var AvengersService;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {}],
        execute: function() {
            AvengersService = (function () {
                function AvengersService() {
                    this._avengers = [
                        {
                            'uri': 'captain-america',
                            'alias': 'Captain America',
                            'name': 'Steve Rogers'
                        },
                        {
                            'uri': 'iron-man',
                            'alias': 'Iron Man',
                            'name': 'Tony Stark'
                        },
                        {
                            'uri': 'hulk',
                            'alias': 'Hulk',
                            'name': 'Bruce Banner'
                        }
                    ];
                }
                AvengersService.prototype.get = function (uri) {
                    var matches = this._avengers.filter(function (element) {
                        return element.uri === uri;
                    });
                    return matches.length > 0 ? matches[0] : null;
                };
                AvengersService.prototype.all = function () {
                    return this._avengers;
                };
                return AvengersService;
            })();
            exports_1("default", AvengersService);
            angular.module('app')
                .service('AvengersService', AvengersService);
        }
    }
});
//# sourceMappingURL=AvengersService.js.map