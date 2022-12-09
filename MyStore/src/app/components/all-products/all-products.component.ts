import { Component , OnInit} from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
 
  products:Product[]=[]
  cartProduct:any[]= []
  
  constructor(private service:ProductsService){}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.service.getAllProducts().subscribe((res:any) =>{console.log(res);
      this.products=res
    
      
    })
  }
  public addToCart(event:any){
    if("cart" in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProduct.find(item=>item.item.id==event.item.id)
      if(exist){
        swal("The Product already exist .")
      }else{
        this.cartProduct.push(event)
        localStorage.setItem("cart",JSON.stringify(this.cartProduct))
      }
    }else{
      this.cartProduct.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProduct)) 
    }
    
  }
}
