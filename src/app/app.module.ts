import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddproductsComponent,
    ManageproductsComponent,
    LoginregisterComponent,
    AdmindashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
