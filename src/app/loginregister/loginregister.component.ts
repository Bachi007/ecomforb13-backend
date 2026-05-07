import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrl: './loginregister.component.css'
})
export class LoginregisterComponent {

  username:any;password:any;

  registerForm:FormGroup=new FormGroup({})
  constructor(private fb:FormBuilder,private service:ProductService,private router:Router){
    this.registerForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      role:['user',Validators.required]
    })
  }
  result:any
registernow(){       
  this.service.registerindb(this.registerForm.value).subscribe((res)=>{
    this.result=res;
    alert(this.result.status)
    this.registerForm.reset()
  })
}

loginnow(){
  this.service.login({username:this.username,password:this.password}).subscribe((res)=>{
    this.result=res;
    alert(this.result.status)
    if(this.result.role=="admin"){
      this.router.navigateByUrl("/admin/view")
      localStorage.setItem("adminlogin",this.result.token)
      localStorage.setItem("uid",this.result.userId);
      //redirect to admindash
      //and store result.token in localStorage with adminlogin as key
      //store userid in localStorage with userid as key
    }
    else{
      if(this.result.role=="user"){
        //redirect to userdashboard
        //and store result.token in localStorage with userlogin as key
        //store userid in localStorage with userid as key
      }
    }
  })
}


}
