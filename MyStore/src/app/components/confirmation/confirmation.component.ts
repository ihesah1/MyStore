import { Component, OnInit ,Input} from '@angular/core';
import { Userdata } from 'src/app/models/userData';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location } from '@angular/common';
import { OrderService } from 'src/app/services/order.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{

  order: Userdata = new Userdata;

  constructor(private orderService:OrderService,private cartService:CartService) { }

  ngOnInit(): void {
	  this.order = this.orderService.getOrder();
  }
  onClick():void {
    this.orderService.clearOrder();
    this.cartService.clearCart();
    alert('Order And Cart Cleared');
    }
  }

