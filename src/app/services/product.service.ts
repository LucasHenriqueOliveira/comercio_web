import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    constructor() { }

    setProduct(product) {
        localStorage.setItem('product', JSON.stringify(product));
    }

    getProduct() {
        return localStorage.getItem('product');
    }

}
