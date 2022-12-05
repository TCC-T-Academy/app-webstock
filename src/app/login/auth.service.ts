import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt from "jwt-decode";

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

  getHeaderWithToken():HttpHeaders{
    let token = localStorage.getItem('token') || '';
    let t;
    if(token != ''){
      t = JSON.parse(token)
    }

    let header = new HttpHeaders({ Authorization: 'Bearer ' + t.access_token});
    return header;
  }

}
