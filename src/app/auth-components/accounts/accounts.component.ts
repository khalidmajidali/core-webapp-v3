import { Component } from '@angular/core';

@Component({
	selector: 'app-accounts',
	templateUrl: './accounts.component.html',
	styleUrl: './accounts.component.scss',
})
export class AccountsComponent {
	products = [
		{
			id: '1',
			code: 'f230fh0g3',
			name: 'Aamboo Watch',
			description: 'Product Description',
			image: 'bamboo-watch.jpg',
			price: 65,
			category: 'Accessories',
			quantity: 21,
			inventoryStatus: 'INSTOCK',
			rating: 5,
		},
		{
			id: '2',
			code: 'f230fh0g3',
			name: 'Bamboo Watch',
			description: 'Product Description',
			image: 'bamboo-watch.jpg',
			price: 65,
			category: 'Accessories',
			quantity: 22,
			inventoryStatus: 'INSTOCK',
			rating: 5,
		},
		{
			id: '3',
			code: 'f230fh0g3',
			name: 'Camboo Watch',
			description: 'Product Description',
			image: 'bamboo-watch.jpg',
			price: 65,
			category: 'Accessories',
			quantity: 23,
			inventoryStatus: 'INSTOCK',
			rating: 5,
		},
	];
}
