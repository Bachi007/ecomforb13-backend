import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:any;
    constructor(private service:ProductService){}

  ngOnInit(){
    this.service.getProducts().subscribe((res)=>{
      this.products=res;
    })
  }

}
