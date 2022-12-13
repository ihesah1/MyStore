import { Component ,Input,Output,OnInit, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

import { Product } from 'src/app/models/product';
import { cart } from 'src/app/models/cart';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  
  @Input() data:any={}
  @Output() item = new EventEmitter<cart>
  amount:number=0
  products:cart[]=[]
  constructor(private route:Router){}
  ngOnInit(): void {
    
  }
  add(){  
   this.item.emit({item:this.data, quantity:this.amount});
  }
  public showDetails(detailsProduct: Product) {
    this.route.navigateByUrl(`/details/${detailsProduct.id}`)

  }
}