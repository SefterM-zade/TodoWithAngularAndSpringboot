import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { JpaAuthenticationService } from '../jpa-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private jpaAuthService: JpaAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let basicAuthHeaderString = this.jpaAuthService.getAuthenticatedToken();
    let username = this.jpaAuthService.getAuthenticatedUser();

    if(username && basicAuthHeaderString) {

      req = req.clone(
        {
          setHeaders: { Authorization: basicAuthHeaderString }
        }
      )
    }
    
    
    return next.handle(req);
  }
}
