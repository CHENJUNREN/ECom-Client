import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ShipToComponent } from './ship-to/ship-to.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BackButtonComponent } from './back-button/back-button.component';

const appRoutes: Routes = [
	{ path: 'catalog', component: CatalogComponent },
	{ path: 'category', component: CategoryComponent },
	{ path: 'product', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'shipTo', component: ShipToComponent },
	{ path: 'checkout', component: CheckoutComponent },
	{
		path: '',
		redirectTo: '/catalog',
		pathMatch: 'full'
	},
];

@NgModule({
	declarations: [
		AppComponent,
		CatalogComponent,
		CategoryComponent,
		ProductComponent,
		CartComponent,
		ShipToComponent,
		CheckoutComponent,
		BackButtonComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true }
		),
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
