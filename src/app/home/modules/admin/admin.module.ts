import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UniversitySignupRequestsComponent } from './components/university-signup-requests/university-signup-requests.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    UniversitySignupRequestsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
