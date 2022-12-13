import { Injectable } from '@angular/core';
import {  Userdata } from 'src/app/models/userData';
import { cart } from '../models/cart';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  userdata!: Userdata;
  total=0
  cartProduct! :cart
  orderContents: Userdata = new Userdata;
  constructor() {}
 
  getOrder(): Userdata {
    return this.orderContents;
  }
  addOrder( order:Userdata ): void {
    this.orderContents = order;
  }
  clearOrder(): void {
    this.orderContents = new Userdata;
}
}