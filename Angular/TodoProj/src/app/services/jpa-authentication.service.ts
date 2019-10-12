import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { API_URL, AUTHENTICATED_USER, AUTHENTICATED_TOKEN } from '../app-constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JpaAuthenticationService {

  constructor(private http: HttpClient, private router: Router) { }

  executeJwtAuthService(username: string, password: string) {

    return this.http.post<any>(`${API_URL}/authenticate`, {
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(AUTHENTICATED_TOKEN, `Bearer ${data.token}`);
        }
      )
    )
  }
  
  getAuthenticatedUser(): string {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(): string {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(AUTHENTICATED_TOKEN);
  }

  isUserLoggedIn() {

    let username = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(username === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(AUTHENTICATED_TOKEN);
  }
}
