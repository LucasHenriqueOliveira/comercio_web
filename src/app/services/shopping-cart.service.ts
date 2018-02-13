import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { CartItem } from '../models/cart-item.model';

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = [];

    constructor() {}

    clear() {
        this.items = [];
    }

    addItem(item: MenuItem) {
        const foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);

        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new CartItem(item));
        }
    }

    increaseQty(item: CartItem) {
        item.quantidade = item.quantidade + 1;
    }

    decreaseQty(item: CartItem) {
        item.quantidade = item.quantidade - 1;
        if (item.quantidade === 0) {
            this.removeItem(item);
        }
    }

    minusQty(item: MenuItem) {
        const foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);

        foundItem.quantidade = foundItem.quantidade - 1;
        if (foundItem.quantidade === 0) {
            this.removeItem(foundItem);
        }
    }

    quantity(item: MenuItem) {
        const foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
        return foundItem.quantidade;
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    hasItem(item: MenuItem) {
        const foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);

        if (foundItem) {
            return true;
        } else {
            return false;
        }
    }

    total(): number {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
    }


}
