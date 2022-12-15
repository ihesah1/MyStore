import { isNgTemplate } from '@angular/compiler';
import { Component,Input,OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { Userdata } from 'src/app/models/userData';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
    
   cartProduct : cart[]=[]
    index =0
   total=0
  
 
   order: Userdata = new Userdata;
    
  constructor(private router: Router,private orderService: OrderService,private cartService:CartService){}
  ngOnInit(): void {
    this.getProductsCart()
  }
  getProductsCart(){
    if("cart" in localStorage){
      this.cartProduct= JSON.parse(localStorage.getItem("cart")!);
    } this.getTotalCart()
    console.log(this.cartProduct);
  } 
  
  getTotalCart(){
    this.total=0
    for(let i in this.cartProduct){
      this.total+=  this.cartProduct[i].item.price * this.cartProduct[i].quantity
    }
  }


  // addAmount(index:number){
  //   this.cartProduct[index].quantity++;
  //   this.getTotalCart()
  //   localStorage.setItem("cart",JSON.stringify(this.cartProduct))

  // }
  // minsAmount(index:number){
  //    this.cartProduct[index].quantity--;
  //    this.getTotalCart()
  //    localStorage.setItem("cart",JSON.stringify(this.cartProduct))

  // }

  deleteProduct(index:number){
     this.cartProduct.splice(index, 1)
     alert("The Product Deleted successfully.")
     localStorage.setItem("cart",JSON.stringify(this.cartProduct))
     this.getTotalCart()
  }
  
  onSubmit(firstname: string, address: string,creditCard:string): void {
	  this.order = {firstname: firstname, address: address,creditCard:creditCard,total:this.total };
	  this.orderService.addOrder(this.order);
	  this.router.navigate(['/confirmation']);
  }

 

  updateCart(cartItem:cart){
    this.getTotalCart()
    if (cartItem.quantity == 0 ){
      
      this.deleteProduct(this.index)
    }
  }
}