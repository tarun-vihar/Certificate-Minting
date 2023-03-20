import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { Web3Service } from './web3.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private w3Service: Web3Service, private http: HttpClient, private storageService: StorageService) {}

  studentLogin() {
    //TODO: API CALL
    // SET RESPONE IN COOKIE
  }

  async univeristyLogin() {
     const accountAddress = await this.w3Service.connectToMetaMask();
    return new Promise((resolve, reject) => {
      
      

      this.http
        .post(`${environment.baseUrl}/university/authenticate`, {
          accountAddress: accountAddress,
        })
        .subscribe({
          next: (data) => {
            // connecting service
            const userData: any = data;
          
            console.log(userData);
            if(!!userData) {
              userData.role = 'university';
              this.storageService.setCookie('USER_DATA', userData);
            }
           
            resolve(data)
          },
          error: (error) => {
            reject(error)
          },
        });
    });
  }


}
