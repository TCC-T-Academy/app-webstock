import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(email: string, senha: string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('webstock:WebStock123')});
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    const body = new FormData();
    body.append('grant_type', 'password');
    body.append('username', email);
    body.append('password', senha);

    return this.http.post('http://localhost:8081/oauth/token', body, {headers});
  }

}
