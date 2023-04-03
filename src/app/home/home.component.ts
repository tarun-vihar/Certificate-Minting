import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_COOKIE_KEY, NAVIGATION } from '../constants/proj.cnst';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ROLE_URLS: any = {
    university: 'home/university',
    student: 'home/student'
  }
  loggedInuserInfo: any = null;
  navigation: any[] = []

  constructor(
    private storageService: StorageService, 
    private router: Router,
    private authSrv: AuthService
  ) { }

  ngOnInit(): void {
    // this.handleRedirect();
    this.loadUserInfo()
  }

  loadUserInfo() {
    this.loggedInuserInfo = this.authSrv.getLoggedInUserInfo()
    console.log("loggedInuserInfo:: ", this.loggedInuserInfo);
    // Render navigations links as per the logged in user role.
    this.navigation = NAVIGATION.filter(link => link.show.indexOf(this.loggedInuserInfo.role) !== -1);
  }

  logout() {
    console.log("logging out");
    this.storageService.removeCookie(AUTH_COOKIE_KEY);
    this.router.navigate(['', 'auth', 'login']);
  }


  handleRedirect() {
    const userData = this.storageService.getCookie('USER_DATA');

    console.log(userData);
    if(!userData) {
    }
    else if (this.ROLE_URLS[userData.role]) {
      this.router.navigateByUrl(this.ROLE_URLS[userData.role])
    } 
  }
  // TODO: WRITE REDIRECT LOGIC

}
