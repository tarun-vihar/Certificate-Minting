import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate-card',
  templateUrl: './certificate-card.component.html',
  styleUrls: ['./certificate-card.component.css'],
})
export class CertificateCardComponent implements OnInit {
  @Input() certificateDetails: any | null = null;
  constructor() {}

  ngOnInit(): void {}
}
