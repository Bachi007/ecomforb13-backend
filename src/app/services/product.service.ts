import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getProducts(){
    return this.http.get("http://localhost:4300/products");
  }

  addProducts(obj:any){
    return this.http.post("http://localhost:4300/add",obj);
  }

  deleteProduct(pid:any){
    return this.http.delete("http://localhost:4300/delete/"+pid);
  }

  updateProduct(pid:any,obj:any){
    return this.http.patch("http://localhost:4300/updatePrice/"+pid,obj);
  }

  registerindb(user:any){
    return this.http.post("http://localhost:4300/users/registration",user);
  }

  login(user:any){
    return this.http.post("http://localhost:4300/users/login",user);
  }

  isTokeValid(token:any){
    var decoded=jwtDecode(token);
    var currentTime=Date.now()/1000;
    console.log(decoded.exp? decoded.exp+" "+currentTime:"null")
    console.log(decoded.exp ? decoded.exp<currentTime:"null")
    if(decoded.exp)
    return decoded.exp >currentTime;
    else
      return true;
  }



}
