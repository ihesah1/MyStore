import { isNgTemplate } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
   cartProduct : any[]=[]
   total=0

  constructor(){}
  ngOnInit(): void {
    this.getProductsCart()
   
  }//هذي الفنكشن المفروض تكون بالسيرفس
  getProductsCart(){
    if("cart" in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
  } this.getTotalCart()
console.log(this.cartProduct);
  } 
  getTotalCart(){
    this.total=0
    for(let i in this.cartProduct){
      this.total+=  this.cartProduct[i].item.price * this.cartProduct[i].quantity
    }
  }


  addAmount(index:number){
    this.cartProduct[index].quantity++;
    this.getTotalCart()
    localStorage.setItem("cart",JSON.stringify(this.cartProduct))

  }
  minsAmount(index:number){
     this.cartProduct[index].quantity--;
     this.getTotalCart()
     localStorage.setItem("cart",JSON.stringify(this.cartProduct))

  }

}
