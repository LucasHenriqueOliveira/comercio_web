import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class ProductService {

    constructor(private http: Http) { }

    setProduct(product) {
        localStorage.setItem('product', JSON.stringify(product));
    }

    getProduct() {
        return JSON.parse(localStorage.getItem('product'));
    }

    getProducts(): Observable<any> {
        return this.http.get(`${API}/product`)
          .map(response => response.json())
          .catch(ErrorHandler.handleError);
    }

    addProduct(product: any): Observable<any> {
        return this.http.post(`${API}/product`, product)
          .catch(ErrorHandler.handleError);
    }

    editProduct(product: any): Observable<any> {
        return this.http.put(`${API}/product/${product.id}`, product)
          .catch(ErrorHandler.handleError);
    }

}
