import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { config } from '../data/config/config.component';
//import { config } from '../data/config/Config';//
import { LoginDto } from '../data/LoginDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    
  constructor(private http: HttpClient) { }

  public login(credentials:LoginDto) : Observable<Boolean> {
    return this.http.post<Boolean>(config.baseUrl + "login", credentials).pipe(
      tap((response: Boolean) => {
        if (response)
          sessionStorage.setItem("user", "silben");
      })
    );
  }

  public logout() {
    sessionStorage.removeItem("user");
  }

  public isUserLogged():boolean {
    return sessionStorage.getItem("user") !== null;
  }
}
