/// <reference path="../typings/tsd.d.ts" />

import * as angular from 'angular';
import './AppModule';
import Avenger from './Avenger';

interface IAvengersService {
    get(uri: string) : Avenger;
    all(): Array<Avenger>;
}

export default class AvengersService implements IAvengersService{

    private _avengers: Array<Avenger> = [
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

    get(uri: string): Avenger {
        var matches = this._avengers.filter(element => {
            return element.uri === uri;
        });

        return matches.length > 0 ? matches[0] : null;
    }

    all(): Array<Avenger> {
        return this._avengers;
    }
}

angular.module('app')
    .service('AvengersService', AvengersService);