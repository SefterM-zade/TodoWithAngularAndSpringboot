import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { JpaAuthenticationService } from './jpa-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NegativeRouteGuardService implements CanActivate {

  constructor(private jpaAuthService: JpaAuthenticationService, private router: Router) { }

  // If user not logged in then some links can activated
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    if(!this.jpaAuthService.isUserLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['login']);
    }
  }
}
