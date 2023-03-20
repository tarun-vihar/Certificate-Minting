import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // const userData = this.storageService.getCookie('USER_DATA');
    // if (!userData) {
    //   this.router.navigateByUrl('/auth/login');
    //   return false;
    // }
    // this.router.navigateByUrl('/home');
    return true;
    // COOKIE OBJECT
    // NOT USER LOGGED IN ==> REDIRECT TO LOGIN
    // ROLE_TYPE ==== 'STUDENT' ==> STUDENT HOME PAGE /student
    // ROLE_TYPE === 'UNIVERSITY' ==> UNIVERSITY HOME PAGE /university
  }
}
