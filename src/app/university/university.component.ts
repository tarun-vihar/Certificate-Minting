import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'lodash';
import { ApiService } from '../services/api.service';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  isCreateTokenBtnClicked: boolean = false;

  errorMessage: string ='';

  isAddBtnDisplayed: boolean = false;

  isUniversityLoginSuccessful: boolean = false;

  constructor(private apiService: ApiService, private w3Service: Web3Service) { }

  ngOnInit(): void {
    this.universityLogin();
  }

  async universityLogin(){

    const accountAddress = await this.w3Service.connectToMetaMask();
    if(accountAddress) {
      this.apiService.universityLogin(accountAddress)
      .subscribe({
        next: data=>{
          console.log('university login data: ', data);
          if(isEmpty(data)){

            this.errorMessage = 'No matched record found';
            this.isAddBtnDisplayed = true;
            this.isUniversityLoginSuccessful = true;
          }
        },
        error: error => {
          console.log("api failed: ", error);
          this.errorMessage = error?.message;
          this.isUniversityLoginSuccessful = false;
          // remove the below flag after api integration
          this.isAddBtnDisplayed = true;
        },
        complete: ()=> console.log("university login call completed")
  
      })
    }
  }
  
  search(value: any){
    console.log(value);
  }

  genToken() {
    this.isCreateTokenBtnClicked = true;
  }

  onClickOfAddNewUniversityBtn(){
    this.isAddBtnDisplayed = false;
  }
}
