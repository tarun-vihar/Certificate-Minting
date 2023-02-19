import { Component, OnInit } from '@angular/core';
import { WorkBook } from '../models/WorkSheets';
import * as XLSX from 'xlsx';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent implements OnInit {

  rowData:any;
 

  columnDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Student Name', field: 'studentName' },
    { headerName: 'Student Email', field: 'studentEmail' }
  ];


  constructor() { }

  ngOnInit(): void {

   

  }
  onFileChange(event:any) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = () => {
      const fileData = reader.result;
      const wb = XLSX.read(fileData, { type: 'binary' });
      const sheetName = wb.SheetNames[0];
      const ws = wb.Sheets[sheetName];
      console.log(sheetName)
      this.rowData = this.toJson(ws);
     
    };
    reader.readAsBinaryString(input.files[0]);
  }

  toJson(ws:XLSX.WorkSheet) {
    const result : any= []

    console.log(ws)
    // workbook.SheetNames.forEach((sheetName: string ) => {
    //   const roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    //   if (roa.length)  result.push(...roa);

    // });

    const roa = XLSX.utils.sheet_to_json(ws);
    if (roa.length)  result.push(...roa);
    
    
    return result;
  }


}
