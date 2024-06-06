import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(credentials: { correo: string, contrasena: string }): Observable<any> {
    return this.http.post('https://gestionhorario-api.azurewebsites.net/api/login/user', credentials, {observe: 'response'});
  }

  loginAdmin(credentials: { correo: string, contrasena: string }): Observable<any> {
    return this.http.post('https://gestionhorario-api.azurewebsites.net/api/login/admin', credentials, {observe: 'response'});
  }
}
