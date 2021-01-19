import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartItemService {

    item;

    setItem(id: string, name: string, price: number, qty: number) {
        this.item = {
            id: id,
            name: name,
            price: price,
            qty: qty
        };
        console.log(this.item);
    }

    getItem(): string {
        console.log(this.item);
        let result: string = JSON.stringify(this.item);
        this.clearItem();
        return result;
    }

    clearItem() {
        this.item = undefined;
    }

    constructor() { }
}
