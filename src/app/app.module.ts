import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityComponent } from './university/university.component';
import { StudentComponent } from './student/student.component';
import { FilterPipe } from './shared/filter.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SearchBarComponent } from './university/search-bar/search-bar.component';
import { FileUploadComponent } from './university/file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './university/student-details/student-details.component';
import { CertificateComponent } from './university/student-details/certificate/certificate.component';
import { LoginComponent } from './login/login.component';


import { CookieService } from 'ngx-cookie-service';
import { SignupComponent } from './signup/signup.component';
// import { AgGridModule } from 'ag-grid-angular';
import { HomeModule } from './home/home.module';
import { VerifyComponent } from './verify/verify.component';


@NgModule({
  declarations: [
    AppComponent,
    UniversityComponent,
    StudentComponent,
    FilterPipe,
    SearchBarComponent,
    FileUploadComponent,
    StudentDetailsComponent,
    CertificateComponent,
    SignupComponent,
    VerifyComponent,
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule ,
    BrowserAnimationsModule,
    HttpClientModule,
    // AgGridModule, 
    HomeModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  exports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule ,
    BrowserAnimationsModule,
    HttpClientModule,
    // AgGridModule, 
    HomeModule
]
})
export class AppModule {}
