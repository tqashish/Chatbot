import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardservService } from '../guardserv.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any={};

  constructor(private r:Router,private service:GuardservService) { }
  
  ngOnInit(){

  }
onsubmit()
{
if(this.model.uname==="sankalp" && this.model.pass === "1234")
{
localStorage.setItem("loginKey",JSON.stringify(this.model.uname));
Swal.fire(
  'Sankalp Login'
)
this.service.login=true; 
this.r.navigate(['/chatform'])
}
else if(this.model.uname === "ashish" && this.model.pass === "1234")
{
localStorage.setItem("loginKey",JSON.stringify(this.model.uname));
this.service.login=true; 

Swal.fire(
  'Ashish Login'
)

this.r.navigate(['/chatform'])


}
else {
  Swal.fire(
    'Please Enter Valid Username and Password'
  )
}
}
}

