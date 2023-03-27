import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_COOKIE_KEY } from '../constants/proj.cnst';
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

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    // this.handleRedirect();
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
