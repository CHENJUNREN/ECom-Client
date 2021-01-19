import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { url } from "../../servicesConfig";
import { ShippingAddressService } from "../shipping-address.service";

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    shippingAddr;
    cart = [];
    total: string;

    constructor(private http: HttpClient, private sas: ShippingAddressService) { }

    ngOnInit() {
        if (this.sas.getAddr()) {
            this.shippingAddr = JSON.parse(this.sas.getAddr());
        }
        this.http.get(url + "/Cart", {
            withCredentials: true
        }).subscribe((data: any[]) => {
            this.cart = data;
            this.total = this.getTotal();
        });
    }

    getTotal(): string {
        let total = 0;
        for (let i of this.cart) {
            total += (i.qty * i.price);
        }
        return total.toFixed(2);
    }

}
