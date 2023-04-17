import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UnivesityService } from '../../service/univesity.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { BulkUploadComponent } from '../bulk-upload/bulk-upload.component';
import { ColDef, DomLayoutType, FirstDataRenderedEvent } from 'ag-grid-community';
import { Web3Service } from 'src/app/services/web3.service';

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

  public tooltipShowDelay = 500;

  public defaultColDef: ColDef = {
    resizable: true,
    wrapHeaderText: true,
    autoHeaderHeight: true,
    sortable: true,
    suppressMenu: true,
    minWidth: 100 
  };
  showTable: boolean = false

  enableUpload: boolean = false

  headersList: string[]  = ['studentId', 'studentName', 'studentEmail', 'program', 'department','cgpa', 'tenure', 'graduationDate', 'issueDate', 'remarks', 'certificate_uri','error'];
  fileName = 'Certificate_Template.xlsx';
  compnentName = 'Student Certificate ';

  constructor(
    private universityService: UnivesityService,
    private storageService: StorageService,
    public dialog: MatDialog, 
    private web3Service: Web3Service
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

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      // Add your parameters here
      "headers": this.headersList,
      "fileName": this.fileName,
      "compnentName": this.compnentName,
    };

    const dialogRef = this.dialog.open(BulkUploadComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log("result:: ", result);
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
      console.log("firstRow:: ", firstRow);
      const columnDefs: any[] = [];
      this.headersList.forEach((key) => {
        columnDefs.push({
          field: key,
          editable: true,
          headerTooltip: key,
        });
      });
      this.columnDefs = columnDefs;
    }
  }

 
  onSubmit(event: any) {
    this.universityService.performCertificateMinting(this.universityId, event).subscribe({
      next: (res: any) => {
        console.log('res:: ', res);
       // this.rowData = res.data;
        
      }
    })
  }


  onSave() {
      
    console.log("save");
    this.universityService.performCertificateMinting(this.universityId, this.rowData).subscribe({
      next: (res: any) => {
        this.rowData = res.data;
      
        this.checkAndEnableUpload()
        let result = this.rowData.map((row: any) => { 
          return this.web3Service.parseCertificateRequest(row, 5)
         
         });
         console.log("rowData:: ", result);
      }
    })


  }

  checkAndEnableUpload() {
    this.enableUpload = this.rowData.filter((row: any) => row.error !== '').length === 0;
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
