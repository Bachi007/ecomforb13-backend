import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

const routes: Routes = [
  {path:'',component:LoginregisterComponent},
  {path:'admin',component:AdmindashboardComponent,
    children:[
       {path:'view',component:ProductsComponent},
  {path:'add',component:AddproductsComponent},
  {path:'manage',component:ManageproductsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
