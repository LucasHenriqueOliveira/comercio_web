import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cashier',
    templateUrl: './cashier.component.html',
    styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {

    tables = [];
    orders = [];

    constructor() { }

    ngOnInit() {
        this.tables = [{
            id: 1,
            name: 'MESA 1',
            status: 1,
            gift: false,
            waiter: false
        }, {
            id: 2,
            name: 'MESA 2',
            status: 2,
            gift: true,
            waiter: true
        }, {
            id: 3,
            name: 'MESA 3',
            status: 3,
            gift: false,
            waiter: false
        }, {
            id: 4,
            name: 'MESA 4',
            status: 4,
            gift: false,
            waiter: false
        }, {
            id: 5,
            name: 'MESA 5',
            status: 5,
            gift: false,
            waiter: false
        }, {
            id: 6,
            name: 'MESA 6',
            status: 3,
            gift: false,
            waiter: false
        }, {
            id: 7,
            name: 'MESA 7',
            status: 4,
            gift: false,
            waiter: false
        }, {
            id: 8,
            name: 'MESA 8',
            status: 5,
            gift: false,
            waiter: false
        }, {
            id: 9,
            name: 'MESA 9',
            status: 4,
            gift: false,
            waiter: false
        }, {
            id: 10,
            name: 'MESA 10',
            status: 1,
            gift: false,
            waiter: false
        }, {
            id: 11,
            name: 'MESA 11',
            status: 3,
            gift: false,
            waiter: false
        }, {
            id: 12,
            name: 'MESA 12',
            status: 2,
            gift: false,
            waiter: false
        }];

        this.orders = [{
            id: 1,
            table: 'MESA 1',
            number: 31239,
            status: 1
        }, {
            id: 2,
            table: 'MESA 5',
            number: 31238,
            status: 2
        }, {
            id: 3,
            table: 'MESA 3',
            number: 31237,
            status: 2
        }, {
            id: 4,
            table: 'MESA 2',
            number: 31236,
            status: 2
        }, {
            id: 5,
            table: 'MESA 8',
            number: 31235,
            status: 2
        }, {
            id: 6,
            table: 'MESA 4',
            number: 31234,
            status: 2
        }, {
            id: 7,
            table: 'MESA 7',
            number: 31233,
            status: 2
        }, {
            id: 8,
            table: 'MESA 6',
            number: 31232,
            status: 2
        }];
    }

}
