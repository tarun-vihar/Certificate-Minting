import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private w3service:Web3Service) { }

  ngOnInit(): void {
  }


  
  loginContract(){
    
    this.w3service.connectToMetaMask();
  }

}
