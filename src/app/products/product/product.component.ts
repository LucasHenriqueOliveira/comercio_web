import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    categories = [];
    product = {};
    name = '';
    id = '';
    productForm: FormGroup;
    numberPattern = /^[0-9]*$/;

    constructor(public CategoryService: CategoryService, public ProductService: ProductService,
        private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
        private toastr: ToastrService) {

            this.route.params.subscribe(params => {
                if (params) {
                    this.id = params.id;
                }
            });
    }

    ngOnInit() {
        this.CategoryService.getCategories().subscribe(categories => this.categories = categories);
        if (this.id) {
            this.product = this.ProductService.getProduct();

            this.productForm = this.formBuilder.group({
                name: this.formBuilder.control(this.product['name'], [Validators.required, Validators.minLength(5)]),
                category: this.formBuilder.control(this.product['category'], [Validators.required]),
                price_cost: this.formBuilder.control(this.product['price_cost'], [Validators.required]),
                price_sale: this.formBuilder.control(this.product['price_sale'], [Validators.required]),
                stock: this.formBuilder.control(this.product['stock'], [Validators.required, Validators.pattern(this.numberPattern)]),
                description: this.formBuilder.control(this.product['description']),
                image: this.formBuilder.control(this.product['image'])
            });
        } else {
            this.productForm = this.formBuilder.group({
                name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
                category: this.formBuilder.control(0, [Validators.required]),
                price_cost: this.formBuilder.control('', [Validators.required]),
                price_sale: this.formBuilder.control('', [Validators.required]),
                stock: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
                description: this.formBuilder.control(''),
                image: this.formBuilder.control('')
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
        this.productForm.value.id = this.id;
        this.ProductService.editProduct(this.productForm.value).subscribe(product => {
            this.toastr.success('Produto alterado com sucesso!');
            this.router.navigate(['products']);
        });
    }

    add() {
        this.ProductService.addProduct(this.productForm.value).subscribe(product => {
            this.toastr.success('Produto adicionado com sucesso!');
            this.router.navigate(['products']);
        });
    }
}
