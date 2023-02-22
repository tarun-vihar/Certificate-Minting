import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Web3Service } from '../services/web3.service';
import { isEmpty } from 'lodash';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  studentId: string = '';
  token: string = '';
  errorMessage ='';

  constructor(private w3service:Web3Service,private route: ActivatedRoute, 
    private apiService:ApiService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.studentId = params['studentId'];
      this.token = params['token'];
    });

    this.loginContract();
  }


  
  async loginContract(){
    
    const address = await this.w3service.connectToMetaMask();
    this.apiService.studentLogin(address, this.studentId,this.token)
     .subscribe({
      next: data => {
        console.log(data);
        // if data ={} display no data found error along with signup button
        if(isEmpty(data)){
          this.errorMessage = 'No matched data found.'
         

        }
    
      }, 
      error: error => {
        console.log("api failed: ", error);
        this.errorMessage = error?.message;
        // comment the below one - after api integration
       
      },
      complete: () => {
        console.log("student login call completed");
      }
    }
    );
  }

}
