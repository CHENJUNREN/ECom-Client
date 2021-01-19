import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../../servicesConfig';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    cname: string;
    id: number;
    list = [];

    constructor(private ar: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.ar.queryParams.subscribe(params => {
            this.cname = params["name"];
            this.id = params["id"];
        });

        this.http.get(url + "/List?id=" + this.id).subscribe((data: any[]) => {
            this.list = data;
        });
    }

}
