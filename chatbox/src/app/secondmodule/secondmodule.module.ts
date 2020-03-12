import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatformComponent } from '../chatform/chatform.component';
import { LogoutComponent } from '../logout/logout.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [  
    ChatformComponent,
    LogoutComponent,

  ],
  imports: [
    CommonModule
  ]
  
})
export class SecondmoduleModule { }
