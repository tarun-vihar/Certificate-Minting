import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { CertificateMintingComponent } from './components/certificate-minting/certificate-minting.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { VerifyCertificateComponent } from './components/verify-certificate/verify-certificate.component';
import { UniversityComponent } from './university.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentDetailsComponent } from './components/certificate-minting/student-details/student-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CertificateMintingComponent,
    StudentRegistrationComponent,
    VerifyCertificateComponent,
    UniversityComponent,
    StudentDetailsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    UniversityRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UniversityModule { }
