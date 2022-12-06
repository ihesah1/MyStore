import { Component , OnInit ,Input ,Output,EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  data:any = { }
  id:any;
  amount:number=0
  
  @Output() item = new EventEmitter

  constructor(private route:ActivatedRoute , private service:ProductsService){
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id);
    
  }
  ngOnInit(): void {
    this.getProduct()
  }
  
  getProduct(){
    this.service.getProductById(this.id).subscribe(res=>{
      this.data = res 
    })
  }
  onAddToCart(data:any){
    this.item.emit({item:this.data, quantity:this.amount});
   }
}
