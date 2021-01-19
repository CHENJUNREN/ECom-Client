import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ShippingAddressService } from "../shipping-address.service";
import { Location } from "@angular/common";

@Component({
    selector: 'app-ship-to',
    templateUrl: './ship-to.component.html',
    styleUrls: ['./ship-to.component.css']
})
export class ShipToComponent implements OnInit {

    form;
    storedAddr;

    constructor(private fb: FormBuilder, private sas: ShippingAddressService, private loc: Location) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            street1: ['', Validators.required],
            street2: [''],
            city: ['', Validators.required],
            country: ['', Validators.required],
            province: ['', Validators.required],
            postalCode: ['', [Validators.required,
            Validators.pattern(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i)]],
            instructions: ['']
        });
        if (this.sas.getAddr()) {
            this.storedAddr = JSON.parse(this.sas.getAddr());
            this.form.patchValue({
                firstName: this.storedAddr.firstName,
                lastName: this.storedAddr.lastName,
                street1: this.storedAddr.street1,
                street2: this.storedAddr.street2,
                city: this.storedAddr.city,
                country: this.storedAddr.country,
                province: this.storedAddr.province,
                postalCode: this.storedAddr.postalCode,
                instructions: this.storedAddr.instructions
            });
        }
    }

    get postalCode() {
        return this.form.controls['postalCode'];
    }

    onSubmit() {
        if (this.form.valid) {
            this.sas.setAddr(JSON.stringify(this.form.value));
            this.loc.back();
        }
    }
}
