import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

  constructor(private router:Router,private service:ProductService,private _snackBar: MatSnackBar){}

  ngOnInit(){
      this._snackBar.open("admin dashboard loaded")
    if(localStorage.getItem("adminlogin")){
        if(!this.service.isTokeValid(localStorage.getItem("adminlogin"))){
            this.router.navigateByUrl("/")
        }
    }
  else{
    this.router.navigateByUrl("/")
  }

  }

}
