import { Component, OnInit } from '@angular/core';
import { WorkBook } from '../models/WorkSheets';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onFileChange(event:any) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = () => {
      const fileData = reader.result;
      const wb = XLSX.read(fileData, { type: 'binary' });
      const jsonData = this.toJson(wb);
      console.log(jsonData);
    };
    reader.readAsBinaryString(input.files[0]);
  }

  toJson(workbook:WorkBook) {
    const result : any= []
    workbook.SheetNames.forEach((sheetName: string ) => {
      const roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      if (roa.length)  result.push(...roa);

    });
    return result;
  }


}
