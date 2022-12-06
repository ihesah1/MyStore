import { Component ,Input,Output,OnInit, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  
  @Input() data:any= {}
  @Output() addToCartClick = new EventEmitter();
  @Output() item = new EventEmitter
  amount:number=0
  constructor(){}
  ngOnInit(): void {
    
  }
  addToCart(){
   this.item.emit({item:this.data, quantity:this.amount});
  }
}
