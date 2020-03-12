import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ChatformComponent } from './chatform/chatform.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FirstGuard } from './first.guard';
const array: Routes = [

  { path: '',redirectTo:"login",pathMatch:"full" },
  {path: 'login', component: LoginComponent},
  { path: 'chatform', component: ChatformComponent,canActivate:[FirstGuard]},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatformComponent,
    LogoutComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, RouterModule.forRoot(
      array)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
