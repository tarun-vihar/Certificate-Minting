import { Component, OnInit } from '@angular/core';
import { MOCK_CERTIFICATES } from 'src/app/constants/proj.cnst';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.css']
})
export class CertificateListComponent implements OnInit {

  certificatesList = MOCK_CERTIFICATES;

  constructor() { }

  ngOnInit(): void {
  }

}
