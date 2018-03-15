import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    category = {};
    name = '';
    id = '';
    categoryForm: FormGroup;

    constructor(public CategoryService: CategoryService, private formBuilder: FormBuilder,
        private route: ActivatedRoute, private router: Router) {

            this.route.params.subscribe(params => {
                if (params) {
                    this.id = params.id;
                }
            });
    }

    ngOnInit() {
        if (this.id) {
            this.category = this.CategoryService.getCategory();

            this.categoryForm = this.formBuilder.group({
                name: this.formBuilder.control(this.category['name'], [Validators.required, Validators.minLength(5)]),
            });
        } else {
            this.categoryForm = this.formBuilder.group({
                name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
            });
        }
    }

    save() {
        if (this.id) {
            this.edit();
        } else {
            this.add();
        }
    }

    edit() {
        this.categoryForm.value.id = this.id;
        this.CategoryService.editCategory(this.categoryForm.value).subscribe(category => {
            // add notification - add product
            this.router.navigate(['categories']);
        });
    }

    add() {
        this.CategoryService.addCategory(this.categoryForm.value).subscribe(category => {
            // add notification - add product
            this.router.navigate(['categories']);
        });
    }
}
