import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DEFAULT_ROUTE_FOR_ROLE } from '../constants/proj.cnst';
import { AuthService } from '../services/auth.service';
import { WalletService } from '../services/wallet.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {

  constructor(
    private walletSrv: WalletService,
    private authSrv: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
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
      return true;
    }

    const loggedInUserInfo = this.authSrv.getLoggedInUserInfo()
    const loggedInUserRole = loggedInUserInfo.role || ''
    const defaultRouteForRole = (DEFAULT_ROUTE_FOR_ROLE as any)[loggedInUserRole] || ['', 'home', 'user']
    this.router.navigate(defaultRouteForRole)
    return false
  }
  
}
