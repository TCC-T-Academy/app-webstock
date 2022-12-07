import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NotificationService } from './notification.service';
import jwt from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGerenteService implements CanActivate{
  constructor(private router: Router, private notifier:NotificationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let token = localStorage.getItem('token') || '' 
    if(token == ''){
      this.router.navigate(['login'])
    }

     let user:any = jwt(token)

    if(user.authorities[0].indexOf("ROLE_GERENTE") == -1 && user.authorities[0].indexOf("ROLE_ADMIN") == -1){
      this.notifier.showError("Precisa ser Gerente ou Administrador.")
      console.log("ADMIN " + user.authorities[0].indexOf("ROLE_ADMIN"))
      console.log("GERENTE" + user.authorities[0].indexOf("ROLE_GERENTE"))
      console.log("USUARIO" + user.authorities[0].indexOf("ROLE_USUARIO"))
      return false;
    }
    return true
  }
}
