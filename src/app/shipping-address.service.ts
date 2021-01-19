import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShippingAddressService {

    shippingAddr: string;

    setAddr(addr: string) {
        this.shippingAddr = addr;
    }

    getAddr(): string {
        return this.shippingAddr;
    }

    constructor() { }
}
