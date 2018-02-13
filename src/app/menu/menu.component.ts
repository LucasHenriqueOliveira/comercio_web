import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { MenuItem } from '../models/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    cardapio = [];

    constructor(private ShoppingCartService: ShoppingCartService) { }

    ngOnInit() {
        this.clear();
        this.cardapio = [{
            nome: 'Saladas',
            opcoes: [{
                id: 1,
                nome: 'Dish Name Here',
                descricao: 'Lorem ipsum is simply dummy text of the printing and type setting industry',
                foto: 'assets/images/01.jpg',
                preco: 30.00
            }, {
                id: 2,
                nome: 'Dish Name Here',
                descricao: 'Lorem ipsum is simply dummy text of the printing and type setting industry',
                foto: 'assets/images/01.jpg',
                preco: 30.00
            }, {
                id: 3,
                nome: 'Dish Name Here',
                descricao: 'Lorem ipsum is simply dummy text of the printing and type setting industry',
                foto: 'assets/images/01.jpg',
                preco: 30.00
            }]
        }, {
            nome: 'Salgados',
            opcoes: [{
                id: 4,
                nome: 'Dish Name Here',
                descricao: 'Lorem ipsum is simply dummy text of the printing and type setting industry',
                foto: 'assets/images/01.jpg',
                preco: 5.00
            }, {
                id: 5,
                nome: 'Dish Name Here',
                descricao: 'Lorem ipsum is simply dummy text of the printing and type setting industry',
                foto: 'assets/images/01.jpg',
                preco: 4.00
            }, {
                id: 6,
                nome: 'Dish Name Here',
                descricao: 'Lorem ipsum is simply dummy text of the printing and type setting industry',
                foto: 'assets/images/01.jpg',
                preco: 4.00
            }]
        }];
    }

    hasItem(item: any) {
        return this.ShoppingCartService.hasItem(item);
    }

    minusItem(item: any) {
        this.ShoppingCartService.minusQty(item);
    }

    quantity(item: any) {
        return this.ShoppingCartService.quantity(item);
    }

    increaseQty(item: any) {
        this.ShoppingCartService.increaseQty(item);
    }

    decreaseQty(item: any) {
        this.ShoppingCartService.decreaseQty(item);
    }

    items(): any[] {
        return this.ShoppingCartService.items;
    }

    clear() {
        this.ShoppingCartService.clear();
    }

    removeItem(item: any) {
        this.ShoppingCartService.removeItem(item);
    }

    addItem(item: any) {
        this.ShoppingCartService.addItem(item);
    }

    total(): number {
        return this.ShoppingCartService.total();
    }

    sendOrder() {
        console.log(this.items());
    }

}
