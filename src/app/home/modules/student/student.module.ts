import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CertificateListComponent } from './components/certificate-list/certificate-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    CertificateListComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
