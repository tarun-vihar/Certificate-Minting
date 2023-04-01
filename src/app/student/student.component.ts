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


 ngOnInit(): void {
   
}
  
onClickOfSignUp(){
  this.isSignUpDisplayed = false;
}

}
