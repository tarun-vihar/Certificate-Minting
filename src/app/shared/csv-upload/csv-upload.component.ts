import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WorkBook } from '../../models/WorkSheets';
import * as XLSX from 'xlsx';
import { AgGridModule } from 'ag-grid-angular';
import {
  ColDef,
  DomLayoutType,
  FirstDataRenderedEvent,
} from 'ag-grid-community';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css'],
})
export class CsvUploadComponent implements OnInit {
  rowData: any = [];
  selectedFile: File | null = null;
  columnDefs: any[] = [];
  showTable = false;
  public domLayout: DomLayoutType = 'autoHeight';
  public defaultColDef: ColDef = {};
  @Output() submitFile = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.sizeColumnsToFit();
  }
  async onFileChange(event: any) {
    this.showTable = false;
    const input = event.target;
    this.selectedFile = event?.target?.files?.[0];
    const data = await this.selectedFile?.arrayBuffer();
    const workbook: XLSX.WorkBook = XLSX.read(data);
    this.prepareRowData(workbook);
  }

  prepareRowData(workbook: XLSX.WorkBook) {
    const convertedJson = this.convertWorkBookToJson(workbook);
    if (convertedJson) {
      this.prepareColumnDefs(convertedJson);
    }
    this.rowData = convertedJson;
    this.showTable = true;
  }

  prepareColumnDefs(json: any[]) {
    if (json?.length) {
      const firstRow = json[0];
      const columnDefs: any[] = [];
      Object.keys(firstRow).forEach((key) => {
        columnDefs.push({
          field: key,
          editable: true,
        });
      });
      this.columnDefs = columnDefs;
    }
  }

  convertWorkBookToJson(workbook: XLSX.WorkBook) {
    const result: any = [];
    workbook.SheetNames.forEach((sheetName: string) => {
      const roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      if (roa.length) result.push(...roa);
    });
    return result;
  }
  saveForm() {
    console.log(this.rowData, 'row data edited');
    this.submitFile.emit(this.rowData);
    // call the api here when the data is ready
  }
}
