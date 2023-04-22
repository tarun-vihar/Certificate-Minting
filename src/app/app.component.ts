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

   this.w3service.addNewUniversity("CSUN",5)
  }

  getAllUniversities(){

    this.w3service.addWhiteListAddressForUniversity(5,"0x608cE607FBE38053AA73f218884d6E9dA40F9a1c")
  }

  addCertificate(){
    this.w3service.mintCertificate()
  }

  getMyCertificate(){
    this.w3service.getMYCertificate()
  }

  addMultipleCertificates(){
    this.w3service.generateMultipleCertificates();
  }
}


