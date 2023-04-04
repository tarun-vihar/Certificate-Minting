import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.css']
})
export class BulkUploadComponent implements OnInit {

  @ViewChild('file') fileRef: ElementRef<HTMLInputElement>;
  selectedFile: File | null = null;
  fileData: any = null;
  validForm: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<BulkUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  chooseFile() {
    this.fileRef.nativeElement.click()
  }

  async onFileChange(event: any) {
    const input = event.target;
    this.selectedFile = input?.files?.[0];

    const data = await this.selectedFile?.arrayBuffer();
    const workbook: XLSX.WorkBook = XLSX.read(data);
    this.fileData = this.convertWorkBookToJson(workbook);
    this.validForm = this.fileData.length > 0;
  }


  convertWorkBookToJson(workbook: XLSX.WorkBook) {
    const result: any = [];
    const options = {
      raw:false,
      dateNF: 'yyyy-mm-dd'
    };

    workbook.SheetNames.forEach((sheetName: string) => {
      const roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], options);
      if (roa.length) result.push(...roa);
    });
    return result;
  }

  upload() {
    this.dialogRef.close({
      file: this.selectedFile,
      fileData: this.fileData
    })
  }

  downloadTemplate() {
    
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([this.data.headers]);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, this.data.fileName);
  }

}
