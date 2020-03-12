import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { GuardservService } from './guardserv.service';
@Injectable({
  providedIn: 'root'
})
export class FirstGuard implements CanActivate {
  
  constructor(private service:GuardservService,private r:Router){

  }

 
    // next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      canActivate():boolean {
      return this.service.login
  }}

