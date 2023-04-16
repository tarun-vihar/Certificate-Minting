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
import {MatButtonModule} from '@angular/material/button';
import { StaffRegistrationComponent } from './components/staff-registration/staff-registration.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


@NgModule({
  declarations: [
    CertificateMintingComponent,
    StudentRegistrationComponent,
    VerifyCertificateComponent,
    UniversityComponent,
    BulkUploadComponent,
    StaffRegistrationComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    UniversityRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    AgGridModule,
    MatButtonModule,
    NgxMatSelectSearchModule,
  ]
})
export class UniversityModule { }
