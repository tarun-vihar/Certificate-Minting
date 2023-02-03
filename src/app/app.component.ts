import { Component } from '@angular/core';
import {Web3Service} from './services/web3.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minting';


  constructor(private w3service:Web3Service){


  }

 


  addNewUniversity(){

    this.w3service.addNewUniversity()
  }

  getAllUniversities(){

    this.w3service.getAllCertificates()
  }

  addCertificate(){
    this.w3service.mintCertificate()
  }

  getMyCertificate(){
    this.w3service.getMYCertificate()
  }
}


