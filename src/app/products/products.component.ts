import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
declare var $: any;

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    products = [];
    id = '';

    constructor(private router: Router, public ProductService: ProductService) { }

    ngOnInit() {
        this.products = [{
            id: 1,
            name: 'Dish Name Here',
            price_cost: 15,
            price_sale: 30,
            stock: 10,
            active: true,
            category: 1,
            description: 'test test test test'
        }, {
            id: 2,
            name: 'Dish Name Here',
            price_cost: 15,
            price_sale: 30,
            stock: 10,
            active: true,
            category: 1,
            description: 'test test test test'
        }, {
            id: 3,
            name: 'Dish Name Here',
            price_cost: 15,
            price_sale: 30,
            stock: 10,
            active: true,
            category: 1,
            description: 'test test test test'
        }, {
            id: 4,
            name: 'Dish Name Here',
            price_cost: 15,
            price_sale: 30,
            stock: 10,
            active: true,
            category: 1,
            description: 'test test test test'
        }, {
            id: 5,
            name: 'Dish Name Here',
            price_cost: 15,
            price_sale: 30,
            stock: 10,
            active: false,
            category: 1,
            description: 'test test test test'
        }];
    }

    edit(product) {
        this.ProductService.setProduct(product);
        this.router.navigate(['product', product.id]);
    }

    remove(product) {
        $('#remove').modal('show');
        this.id = product.id;
    }

    confirmRemove() {
        $('#remove').modal('hide');
    }

    reactive(product) {
        $('#reactive').modal('show');
        this.id = product.id;
    }

    confirmReactive() {
        $('#reactive').modal('hide');
    }
}
