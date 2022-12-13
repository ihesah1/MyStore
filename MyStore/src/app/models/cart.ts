import { Product } from "./product";

export class cart {
	item: Product;
	quantity: number;

	constructor() {
		this.item = {
			id: 1,
			title: '',
			price: 0,
			image: '',
			description: '',
			};
		this.quantity = 1;
	}
}