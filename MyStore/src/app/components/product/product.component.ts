import { Component ,Input,Output,OnInit, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';

import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  
  @Input() data:any= {}
  @Output() item = new EventEmitter
  amount:number=0
  products:Product[]=[]
  constructor(private route:Router){}
  ngOnInit(): void {
    
  }
  add(){
   this.item.emit({item:this.data, quantity:this.amount});
   swal({
    title: "Good job!",
    text: "You Add the Product Succesfully",
    icon: "success",
  });

  }
  public showDetails(detailsProduct: Product) {
    this.route.navigateByUrl(`/details/${detailsProduct.id}`)

  }
}
