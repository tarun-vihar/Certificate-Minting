import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    // COOKIE OBJECT
    // NOT USER LOGGED IN ==> REDIRECT TO LOGIN
    // ROLE_TYPE ==== 'STUDENT' ==> STUDENT HOME PAGE /student
    // ROLE_TYPE === 'UNIVERSITY' ==> UNIVERSITY HOME PAGE /university
  }
  
}
