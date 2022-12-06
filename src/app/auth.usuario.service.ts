import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import jwt from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthUsuarioService implements CanActivate{

  constructor(private router: Router) { }

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let token = localStorage.getItem('token') || '' 
    if(token == ''){
      this.router.navigate(['login'])
    }
    return true
  }
}
