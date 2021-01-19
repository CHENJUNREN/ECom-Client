import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {url} from "../../servicesConfig";

@Component({
	selector: 'app-catalog',
	templateUrl: './catalog.component.html',
	styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

	list = [];

	constructor(private http: HttpClient) {
	}

	ngOnInit() {
        this.http.get(url + "/Catalog").subscribe((data: any[]) => {
			this.list = data;
		});
	}

}
