import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import jwt from "jwt-decode";
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdmService implements CanActivate{
  constructor(private router: Router, private notifier:NotificationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let token = localStorage.getItem('token') || '' 
    if(token == ''){
      this.router.navigate(['login'])
    }

     let user:any = jwt(token)

    if(user.authorities[0].indexOf("ADMIN") == -1){      
      this.notifier.showError("Precisa ser Administrador.")

      return false;
    }
    return true
  }
}
