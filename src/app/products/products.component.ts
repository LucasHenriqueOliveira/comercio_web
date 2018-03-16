import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    products = [];
    id = '';

    constructor(private router: Router, public ProductService: ProductService, private toastr: ToastrService) { }

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
            this.toastr.success('Produto removido com sucesso!');
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
            this.toastr.success('Produto ativado com sucesso!');
            this.products = products;
            $('#active').modal('hide');
        });
    }
}
