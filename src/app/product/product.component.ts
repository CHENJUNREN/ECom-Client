import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { url } from "../../servicesConfig";
import { ActivatedRoute, Router } from "@angular/router";
import { CartItemService } from "../cart-item.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    id: string;
    products = [];

    constructor(private ar: ActivatedRoute, private http: HttpClient, private cis: CartItemService, private router: Router) {
    }

    ngOnInit() {
        this.ar.queryParams.subscribe(params => {
            this.id = params["id"];
        });
        this.http.get(url + "/Quote?id=" + this.id).subscribe((data: any[]) => {
            this.products = data;
        });
    }

    addToCart() {
        let product = this.products[0];
        this.cis.setItem(product.id, product.name, product.msrp, 1);
        this.router.navigateByUrl("/cart");
    }
}
