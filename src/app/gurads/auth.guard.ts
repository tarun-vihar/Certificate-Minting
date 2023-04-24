import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DEFAULT_ROUTE_FOR_ROLE } from '../constants/proj.cnst';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { WalletService } from '../services/wallet.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private walletSrv: WalletService,
    private authSrv: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    // Is ethereum installed
    if(!this.walletSrv.isMetamaskInstalled()) {
      // If not installed redirect to error page.
      this.router.navigate(['', 'error', 'ethereum-not-found'])
      return false;
    }

    // Check if user logged in or not.
    const isLoggedIn = this.authSrv.isLoggedIn()

    // If not logged in redirec to login page.
    if(!isLoggedIn) {
      this.router.navigate(['', 'auth', 'login'])
      return false;
    }

    // If logged in then check the roles
    const roles = route.data['roles'] || []

    if(!roles.length) return true;

    const loggedInUserInfo = this.authSrv.getLoggedInUserInfo()
    
    console.log(loggedInUserInfo)
    // If role is allowed to view the page then load the page.
    if(roles.indexOf(loggedInUserInfo.role) !== -1) {
      return true;
    }

    // get the default landing page for role
    const defaultRouteForRole = (DEFAULT_ROUTE_FOR_ROLE as any)[loggedInUserInfo.role] || ['', 'home', 'user']

    console.log(defaultRouteForRole)
    // redirect to default landing page for role.
    this.router.navigate(defaultRouteForRole)
    return false;
  }
}
