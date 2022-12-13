import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
const routes:Routes = [

    {path:'', component:AllProductsComponent},
    {path:"cart", component:CartComponent },
    {path:"details/:id", component:ProductDetailsComponent},
    {path:'confirmation',component:ConfirmationComponent}
]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }