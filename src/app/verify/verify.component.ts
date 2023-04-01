import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { StorageService } from '../services/storage.service';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private storageService: StorageService,
    private router: Router,
    private web3Service: Web3Service,
    private route: ActivatedRoute
  ) { }

  isConnectionFailed: boolean = false;
  errorMessage: string = '';

   ngOnInit(): void {

  
    this.verify();
    

  }


  async verify() {

    try{
      const studentWalletAddress =  await this.web3Service.connectToMetaMask();

      this.route.queryParams.subscribe(params => {

        console.log(params);
        // access the route parameters here
        const universityId = params['universityId'];
        const studentId = params['studentId'];
        const token = params['token'];
        // do something with the route parameters
        this.apiService.authenicateStudent(studentWalletAddress, studentId, token, universityId).subscribe({
          next: (data: any) => {
            console.log(data);
            if(data?.error) {
              this.isConnectionFailed = true;
              this.errorMessage = data?.error;
            } else {

              data.role = "student"
              this.storageService.setCookie('USER_DATA', JSON.stringify(data));
              this.router.navigate(['/home']);
            }
          }
        });

       
      });

    } catch(err: any) {
      console.warn('error: ', err);
      this.isConnectionFailed = true;
      this.errorMessage = err.message;
    }

   
  }


  




}
