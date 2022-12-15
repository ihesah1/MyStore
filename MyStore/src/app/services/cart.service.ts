import { Injectable } from '@angular/core';
import { cart } from '../models/cart';
import { Userdata } from '../models/userData';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProduct : cart[] =[]

myStorage = window.localStorage
 getProductsCart(){
   if("cart" in localStorage){
     this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
 } 
//  this.getTotalCart()
 console.log(this.cartProduct);
 } 
 clearCart(): void{
  this.myStorage.clear();
}

 }

////////////// ToDo :
////////////////Clear cart + README file