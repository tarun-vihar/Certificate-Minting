import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AUTH_COOKIE_KEY, MOCK_ADMIN_LOGIN_RESPONSE, MOCK_STAFF_LOGIN_RESPONSE, MOCK_STUDENT_LOGIN_RESPONSE, MOCK_UNIVERSITY_LOGIN_RESPONSE } from '../constants/proj.cnst';
import { StorageService } from './storage.service';
import { WalletService } from './wallet.service';
import { Web3Service } from './web3.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private w3Service: Web3Service,
    private http: HttpClient,
    private storageService: StorageService,
    private walletSrv: WalletService
  ) { }

  getLoggedInUserInfo() {
    let cookieValue = this.storageService.getCookie(AUTH_COOKIE_KEY)
    if (!cookieValue) return null
    return cookieValue
  }

  isLoggedIn(): boolean {
    const cookieValue = this.storageService.getCookie(AUTH_COOKIE_KEY)
    return !!cookieValue
  }

  async adminLogin(creds: any) {
    // creds will contain username and password entered
    // {username: '<>', password: '<>'}

    // Get address.
    const address = await this.walletSrv.getWalletId();

    return new Promise((resolve, reject) => {
      // Integrate API Call
      const userInfo = MOCK_ADMIN_LOGIN_RESPONSE;

      // Store the logged in user info in cookie.
      this.storageService.setCookie(AUTH_COOKIE_KEY, { ...userInfo, address });

      // return response.
      resolve(userInfo)
    })
  }

  // MOCK Service
  async universityLogin() {
    // Get address.
    const address = await this.walletSrv.getWalletId();

    console.log(address);


    return new Promise((resolve, reject) => {

      // Integrate API Call
      const userInfo = MOCK_UNIVERSITY_LOGIN_RESPONSE;

      // Store the logged in user info in cookie.
      this.storageService.setCookie(AUTH_COOKIE_KEY, { ...userInfo, address });

      // return response.
      resolve(userInfo)

      return

      this.http
        .post(`${environment.baseUrl}/university/authenticate`, {
          universityWalletAddress: address,
        })
        .subscribe({
          next: (data) => {
            // connecting service
            const userData: any = data;

            console.log(userData);
            if (!!userData) {
              userData.role = 'university';
              this.storageService.setCookie(AUTH_COOKIE_KEY, userData);
            }

            resolve(data)
          },
          error: (error) => {
            reject(error)
          },
        });




      // Add error handling also along with api integration.
    })



  }


  async studentLogin() {
    // Get address.
    const address = await this.walletSrv.getWalletId();

    return new Promise((resolve, reject) => {
      // Integrate API Call
      const userInfo = MOCK_STUDENT_LOGIN_RESPONSE;

      // Store the logged in user info in cookie.
      this.storageService.setCookie(AUTH_COOKIE_KEY, { ...userInfo, address });

      // return response.
      resolve(userInfo)

      // Add error handling also along with api integration.
    })
  }

  async staffLogin() {
    // Get address.
    const address = await this.walletSrv.getWalletId();
    console.log(address);
    return new Promise((resolve, reject) => {
      // Integrate API Call
      const userInfo = MOCK_STAFF_LOGIN_RESPONSE;

      // Store the logged in user info in cookie.
      this.storageService.setCookie(AUTH_COOKIE_KEY, { ...userInfo, address });

      // return response.
      resolve(userInfo)

      // Add error handling also along with api integration.
    })
  }

  // async univeristyLogin() {
  //    const accountAddress = await this.w3Service.connectToMetaMask();
  //   return new Promise((resolve, reject) => {



  //     this.http
  //       .post(`${environment.baseUrl}/university/authenticate`, {
  //         accountAddress: accountAddress,
  //       })
  //       .subscribe({
  //         next: (data) => {
  //           // connecting service
  //           const userData: any = data;

  //           console.log(userData);
  //           if(!!userData) {
  //             userData.role = 'university';
  //             this.storageService.setCookie('USER_DATA', userData);
  //           }

  //           resolve(data)
  //         },
  //         error: (error) => {
  //           reject(error)
  //         },
  //       });
  //   });
  // }


}
