import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UnivesityService } from '../../service/univesity.service';
import {MatDialog} from '@angular/material/dialog';
import { BulkUploadComponent } from '../bulk-upload/bulk-upload.component';
import { ColDef, DomLayoutType, FirstDataRenderedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-certificate-minting',
  templateUrl: './certificate-minting.component.html',
  styleUrls: ['./certificate-minting.component.css']
})
export class CertificateMintingComponent implements OnInit {
  universityId: string = '';
  responseData: any[] = [];


  columnDefs: any[] = [];
  rowData: any = [];
  public domLayout: DomLayoutType = 'autoHeight';
  public defaultColDef: ColDef = {};
  showTable: boolean = false

  enableUpload: boolean = false

  constructor(
    private universityService: UnivesityService,
    private storageService: StorageService,
    public dialog: MatDialog
  ) { }

  selectedOption: string | undefined;

  ngOnInit(): void {
    const userData = this.storageService.getCookie('USER_DATA');
    this.universityId = userData?.id;
  }

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.sizeColumnsToFit();
  }

  bulkUpload() {
    const dialogRef = this.dialog.open(BulkUploadComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.showTable = true
        this.rowData = result.fileData;
        this.prepareColumnDefs(result.fileData);
      }
    });
  }

  prepareColumnDefs(json: any[]) {
    if (json?.length) {
      console.log("json:: ", json);
      const firstRow = json[0];
      const columnDefs: any[] = [];
      [...Object.keys(firstRow), 'remarks'].forEach((key) => {
        columnDefs.push({
          field: key,
          editable: true,
        });
      });
      this.columnDefs = columnDefs;
    }
  }

  headersList: string[]  = ['studentId', 'cgpa', 'tenure', 'graduationDate', 'issueDate', 'remarks', 'certificate_uri', 'program'];
  fileName = 'Certificate_Template.xlsx';
  onSubmit(event: any) {
    this.universityService.performCertificateMinting(this.universityId, event).subscribe({
      next: (data: any) => {
        this.responseData = data;
      }
    })
  }


  onSave() {
    this.universityService.performCertificateMinting(this.universityId, this.rowData).subscribe({
      next: (data: any) => {
        this.rowData = data;
        this.checkAndEnableUpload()
      }
    })
  }

  checkAndEnableUpload() {
    this.enableUpload = this.rowData.filter((row: any) => row.remarks !== '').length === 0;
  }

  backToStudentForm() {
    this.showTable = false
    this.rowData = []
    this.enableUpload = false;
    this.columnDefs = []
  }

  onUpload() {
    //TODO: BLOCK CHAIN CALL
    console.log('upload')
  }

}
