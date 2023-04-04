import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { CertificateMintingComponent } from './components/certificate-minting/certificate-minting.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { VerifyCertificateComponent } from './components/verify-certificate/verify-certificate.component';
import { UniversityComponent } from './university.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BulkUploadComponent } from './components/bulk-upload/bulk-upload.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    CertificateMintingComponent,
    StudentRegistrationComponent,
    VerifyCertificateComponent,
    UniversityComponent,
    BulkUploadComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    UniversityRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    AgGridModule
  ]
})
export class UniversityModule { }
