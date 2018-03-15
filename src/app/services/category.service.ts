import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';

@Injectable()
export class CategoryService {

    constructor(private http: Http) { }

    setCategory(product) {
        localStorage.setItem('category', JSON.stringify(product));
    }

    getCategory() {
        return JSON.parse(localStorage.getItem('category'));
    }

    getCategories(): Observable<any> {
        return this.http.get(`${API}/category`)
          .map(response => response.json())
          .catch(ErrorHandler.handleError);
    }

    addCategory(category: any): Observable<any> {
        return this.http.post(`${API}/category`, category)
            .catch(ErrorHandler.handleError);
    }

    editCategory(category: any): Observable<any> {
        return this.http.put(`${API}/category/${category.id}`, category)
            .catch(ErrorHandler.handleError);
    }

    active(id: any): Observable<any> {
        return this.http.put(`${API}/category/active/${id}`, id)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    remove(id: any): Observable<any> {
        return this.http.put(`${API}/category/remove/${id}`, id)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }
}
