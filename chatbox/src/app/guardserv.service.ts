import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardservService {

  constructor() {}


  islogin=false;
  get login(){
    return this.islogin;
  }
  set login(value:boolean){
    this.islogin=value;
  }



}
