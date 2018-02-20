import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

    orders = [];
    constructor() { }

    ngOnInit() {
        this.orders = [{
            id: 2,
            products: [{
                id: 1,
                name: 'Coxinha',
                quantity: 1
            }, {
                id: 2,
                name: 'Coca-cola',
                quantity: 1
            }, {
                id: 3,
                name: 'Água sem gás',
                quantity: 1
            }],
            table: 2,
            status: 4
        }, {
            id: 3,
            products: [{
                id: 1,
                name: 'Coxinha',
                quantity: 1
            }, {
                id: 2,
                name: 'Coca-cola',
                quantity: 1
            }, {
                id: 3,
                name: 'Água sem gás',
                quantity: 1
            }],
            table: 3,
            status: 3
        }, {
            id: 4,
            products: [{
                id: 1,
                name: 'Coxinha',
                quantity: 1
            }, {
                id: 2,
                name: 'Coca-cola',
                quantity: 1
            }, {
                id: 3,
                name: 'Água sem gás',
                quantity: 1
            }],
            table: 4,
            status: 2
        }, {
            id: 5,
            products: [{
                id: 1,
                name: 'Coxinha',
                quantity: 1
            }, {
                id: 2,
                name: 'Coca-cola',
                quantity: 1
            }, {
                id: 3,
                name: 'Água sem gás',
                quantity: 1
            }],
            table: 5,
            status: 2
        }, {
            id: 6,
            products: [{
                id: 1,
                name: 'Coxinha',
                quantity: 1
            }, {
                id: 2,
                name: 'Coca-cola',
                quantity: 1
            }, {
                id: 3,
                name: 'Água sem gás',
                quantity: 1
            }],
            table: 6,
            status: 2
        }];
    }
}
