import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'lodash';
import { ApiService } from '../services/api.service';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  errorMessage ='';

  isSignUpDisplayed: boolean = false;

  constructor(private apiService: ApiService, private w3Service: Web3Service) {

  }

  async studentLogin() {
    try{

   
    const accountAddress = await this.w3Service.connectToMetaMask();
    console.log(accountAddress)
    if( accountAddress && accountAddress.length > 0) {
      this.apiService.studentLogin(accountAddress[0],'','')
    .subscribe({
      next: data => {
        console.log(data);
        // if data ={} display no data found error along with signup button
        if(isEmpty(data)){
          this.errorMessage = 'No matched data found.'
          this.isSignUpDisplayed = true;

        }
    
      }, 
      error: error => {
        console.log("api failed: ", error);
        this.errorMessage = error?.message;
        // comment the below one - after api integration
        this.isSignUpDisplayed = true;
      },
      complete: () => {
        console.log("student login call completed");
      }
    }
    );
    }

  } 
  catch(e){console.log(e)}
  }

 ngOnInit(): void {
   this.studentLogin();
}
  
onClickOfSignUp(){
  this.isSignUpDisplayed = false;
}

}
