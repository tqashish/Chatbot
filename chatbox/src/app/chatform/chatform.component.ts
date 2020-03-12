import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatform',
  templateUrl: './chatform.component.html',
  styleUrls: ['./chatform.component.css']
})
export class ChatformComponent implements OnInit {
data:any={};
deletearr:any[]=[];
  constructor(private r:Router) { }

  arr:any[]=[];

add()
{
   let ChattingData=JSON.parse(localStorage.getItem("conversation"));

   if(ChattingData==null)
   {
    ChattingData=[];
   }
   this.data.uname=JSON.parse(localStorage.getItem("loginKey"));

   this.data.currdate=new Date();
   
   ChattingData.push(this.data);

   localStorage.setItem("conversation",JSON.stringify(ChattingData));

   
   this.arr=JSON.parse(localStorage.getItem("conversation"));
   
   this.data={};

}
display(){

  this.arr=JSON.parse(localStorage.getItem("conversation"));

}

logout(){
  this.r.navigate(['/login'])
}

delete(value){
  this.deletearr=JSON.parse(localStorage.getItem("conversation"));

  for(var i=0;i<this.deletearr.length;i++){
        
    if(value==this.deletearr[i].msg){
    
    this.deletearr.splice(i,1);

   localStorage.setItem("conversation",JSON.stringify(this.deletearr));
    
   this.display();
    
  }  
  }}

  ngOnInit() {
    this.display();
  }

}
