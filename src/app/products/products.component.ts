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
        this.ProductService.getProducts().subscribe(products => this.products = products);
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
        this.ProductService.remove(this.id).subscribe(products => {
            // add notification - remove product
            this.products = products;
            $('#remove').modal('hide');
        });
    }

    active(product) {
        $('#active').modal('show');
        this.id = product.id;
    }

    confirmActive() {
        this.ProductService.active(this.id).subscribe(products => {
            // add notification - active product
            this.products = products;
            $('#active').modal('hide');
        });
    }
}
