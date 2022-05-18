import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
import { tap } from 'rxjs/operators';
import { config } from '../data/config/config.component';
import { LoginDto } from '../data/LoginDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
url="http://localhost/8080";
currentUserSubject: BehaviorSubject<any> | undefined;
  constructor(private http: HttpClient) {
    console.log("El Servicio de autenticación está corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
   }

  public login(credentials:LoginDto) : Observable<Boolean> {
    return this.http.post<Boolean>(config.baseUrl + "login", credentials).pipe(
      tap((response: Boolean) => {
        if (response)
          sessionStorage.setItem("email", "silvina.benjamin@yahoo.com.ar");
      })
    );
  }

  public logout() {
    sessionStorage.removeItem("email");
  }

  public isUserLogged():boolean {
    return sessionStorage.getItem("email") !== null;
  }
}
