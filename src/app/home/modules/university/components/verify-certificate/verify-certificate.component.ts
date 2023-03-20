import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-certificate',
  templateUrl: './verify-certificate.component.html',
  styleUrls: ['./verify-certificate.component.css']
})
export class VerifyCertificateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  verifyCertificate() {
    console.log('coming here')
  }

}
