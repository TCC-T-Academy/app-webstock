import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

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
    }

    return navigator.onLine ?    
           error.error.message :
           'No Internet Connection';
  }  
}
