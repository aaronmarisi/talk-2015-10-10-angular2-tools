/// <reference path='../typings/tsd.d.ts'/>

// to emit systemjs module dependencies
import 'angular';
import './AppModule';
import './AvengersService';

import * as angular from 'angular'
import AvengersService from './AvengersService';

class AvengerDetails {

    name: string;
    alias: string;

    static $inject = ['AvengersService','$routeParams'];
    constructor(avengersService: AvengersService, $routeParams) {

        var avenger = avengersService.get($routeParams.uri);

        this.alias = avenger.alias;
        this.name = avenger.name;

    }
}

angular.module('app')
    .controller('AvengerDetails', AvengerDetails);