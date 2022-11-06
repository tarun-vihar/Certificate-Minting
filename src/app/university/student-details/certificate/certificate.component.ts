import { Component, Input, OnChanges, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
})
export class CertificateComponent implements OnInit, OnChanges {
  @Input('data') data: any;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges() {
    const ele: HTMLElement = <HTMLElement>(
      document.querySelector('#certificate')
    );
    html2canvas(ele).then((canvas) => {
        const cvs = document.querySelector('canvas');
        const downloadBtn = <HTMLAnchorElement>(
          document.querySelector('#download-link')
        );
        downloadBtn.href = cvs ? cvs.toDataURL('image/jpeg') : '';
        downloadBtn.download = 'certificate.jpeg';
        const ele  = document.querySelector(".template");
        ele?.append(canvas)

    });
  }
}
