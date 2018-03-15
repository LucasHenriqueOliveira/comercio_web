import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
declare var $: any;

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    categories = [];
    id = '';

    constructor(private router: Router, public CategoryService: CategoryService) { }

    ngOnInit() {
        this.CategoryService.getCategories().subscribe(categories => this.categories = categories);
    }

    edit(category) {
        this.CategoryService.setCategory(category);
        this.router.navigate(['category', category.id]);
    }

    remove(category) {
        $('#remove').modal('show');
        this.id = category.id;
    }

    confirmRemove() {
        this.CategoryService.remove(this.id).subscribe(categories => {
            // add notification - remove product
            this.categories = categories;
            $('#remove').modal('hide');
        });
    }

    active(category) {
        $('#active').modal('show');
        this.id = category.id;
    }

    confirmActive() {
        this.CategoryService.active(this.id).subscribe(categories => {
            // add notification - active product
            this.categories = categories;
            $('#active').modal('hide');
        });
    }
}
