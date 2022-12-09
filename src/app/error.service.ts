import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private router: Router){}


  getClientErrorMessage(error: Error): string {
    return error.message ? 
           error.message : 
           error.toString();
  }

  getServerErrorMessage(error: HttpErrorResponse): string {   
    if(error.error.error == "unauthorized"){
      return "Não autorizado!";  
    }else if(error.error.error == "invalid_grant"){
      return "Senha incorreta!";  
    }else if(error.error.error == "access_denied"){
      return "Acesso negado!";  
    }else if(error.error.error == "invalid_token"){
      this.router.navigateByUrl("/login");
      localStorage.clear();
    }

    return navigator.onLine ?    
           error.error.message :
           'No Internet Connection';
  }  
}
