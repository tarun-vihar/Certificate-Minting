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
    this.cookieService.set(key, value ); // To Set Cookie
  }

  getCookie(){

    return this.cookieService.get('name');
  }

}
