import { ɵparseCookieValue } from '@angular/common';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  cookieService: CookieService;

  constructor(cookieService: CookieService) { 

    this.cookieService = cookieService;
  }  

  setCookie(key: string , value: any){
    console.log(value); 
    console.log(JSON.stringify(value));
    this.cookieService.set(key, JSON.stringify(value) ); // To Set Cookie
  }

  getCookie(cookieName: string){
    return this.cookieService.get(cookieName) ? JSON.parse(this.cookieService.get(cookieName)) : null;
  }

}
