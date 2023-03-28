import { Component, Input, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-download-template',
  templateUrl: './download-template.component.html',
  styleUrls: ['./download-template.component.css']
})
export class DownloadTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() headersList: string[] = [];
  @Input() fileName: string = '';
  @Input() compnentName: string = '';
  


  downloadHeaders() {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([this.headersList]);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, this.fileName);
  }
  
}
