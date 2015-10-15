/// <reference path="../typings/tsd.d.ts" />

// to emit systemjs module dependencies
import './AppModule';
import './AvengersService'; 

import * as angular from 'angular';
import AvengersService from './AvengersService';
import Avenger from './Avenger';
//import AppModule from './AppModule';

// controller definition
class Main {

    heading: string;
    avengers: Array<Avenger>;    

    // minification-ready injectibles
    static $inject = ['AvengersService'];
    constructor(avengersService: AvengersService) {

        this.heading = 'Avengers';
        this.avengers = avengersService.all();  
    }
}

// register controller with angular 'app' module
angular.module('app')
    .controller('Main', Main);