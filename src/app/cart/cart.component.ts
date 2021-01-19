import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { url } from "../../servicesConfig";
import { Router } from "@angular/router";
import { CartItemService } from "../cart-item.service";
import { ShippingAddressService } from "../shipping-address.service";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    cart = [];

    constructor(private router: Router, private http: HttpClient, 
        private cis: CartItemService, private sas: ShippingAddressService) { }

    ngOnInit() {
        let temp: string = this.cis.getItem();
        if (!temp) {
            temp = "";
        }
        this.http.get(url + "/Cart?item=" + temp, {
            withCredentials: true
        }).subscribe((data: any[]) => {
            this.cart = data;
        });
    }

    updateItemInCart(cur_qty: number, pre_qty: number, id: string, name: string, price: number) {
        let qty: number = cur_qty - pre_qty;
        if (qty != 0) {
            let temp: string = JSON.stringify({
                id: id,
                name: name,
                price: price,
                qty: qty
            });
            this.http.get(url + "/Cart?item=" + temp, {
                withCredentials: true
            }).subscribe((data: any[]) => {
                this.cart = data;
            });
        }
    }

    checkout() {
        if (this.sas.getAddr()) {
            this.router.navigateByUrl("/checkout");
        } else {
            this.router.navigateByUrl("/shipTo");
        }
    }
}
