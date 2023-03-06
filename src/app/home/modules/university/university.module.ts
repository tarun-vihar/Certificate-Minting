import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { CertificateMintingComponent } from './components/certificate-minting/certificate-minting.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { VerifyCertificateComponent } from './components/verify-certificate/verify-certificate.component';
import { UniversityComponent } from './university.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CertificateMintingComponent,
    StudentRegistrationComponent,
    VerifyCertificateComponent,
    UniversityComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    UniversityRoutingModule
  ]
})
export class UniversityModule { }
