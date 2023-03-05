import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CertificateMintingComponent } from './components/certificate-minting/certificate-minting.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { VerifyCertificateComponent } from './components/verify-certificate/verify-certificate.component';


@NgModule({
  declarations: [
    HomeComponent,
    CertificateMintingComponent,
    StudentRegistrationComponent,
    VerifyCertificateComponent
  ],
  imports: [
    CommonModule,
    UniversityRoutingModule
  ]
})
export class UniversityModule { }
