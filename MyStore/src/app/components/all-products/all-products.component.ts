import { Component , OnInit} from '@angular/core';
import { cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  data:any={}
  products:Product[]=[]
  cartProduct:cart[]= []
  constructor(private service:ProductsService){}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.service.getAllProducts().subscribe((res:any) =>{
      this.products=res
    })
    
  }
 
  public addToCart(event:cart){
    
    if("cart" in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProduct.find(item=>item.item.id==event.item.id)
    
      if(exist){
        alert("The Product already exist .")
      }else{
        this.cartProduct.push(event)
        localStorage.setItem("cart",JSON.stringify(this.cartProduct))
        alert( "You Add the Product Succesfully")
      }
    }else{
      this.cartProduct.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProduct)) 
        alert( "You Add the Product Succesfully")
     
     }
    
  
    
  
  }}
