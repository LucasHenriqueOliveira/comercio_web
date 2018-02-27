import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    products = [];

    constructor() { }

    ngOnInit() {
        this.products = [{
            id: 1,
            name: 'Dish Name Here',
            price_cost: 15,
            price_sale: 30,
            stock: 10,
            category: 1,
            active: true
        }, {
            id: 2,
            name: 'Dish Name Here',
            price_cost: 15,
            price_sale: 30,
            stock: 10,
            category: 1,
            active: true
        }, {
            id: 3,
            name: 'Dish Name Here',
            price_cost: 15,
            price_sale: 30,
            stock: 10,
            category: 1,
            active: true
        }, {
            id: 4,
            name: 'Dish Name Here',
            price_cost: 15,
            price_sale: 30,
            stock: 10,
            category: 1,
            active: true
        }, {
            id: 5,
            name: 'Dish Name Here',
            price_cost: 15,
            price_sale: 30,
            stock: 10,
            category: 1,
            active: false
        }];
    }

}
