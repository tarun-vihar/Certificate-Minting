import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { CertificateListComponent } from './components/certificate-list/certificate-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CertificateListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
