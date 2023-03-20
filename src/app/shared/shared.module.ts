import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';
import { AgGridModule } from 'ag-grid-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { CertificateCardComponent } from './certificate-card/certificate-card.component';
import { DownloadTemplateComponent } from './download-template/download-template.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [CsvUploadComponent, CertificateCardComponent, DownloadTemplateComponent, FileUploadComponent],
  imports: [
    CommonModule,
    AgGridModule,
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
    MatSelectModule,
  ],
  exports: [
    CsvUploadComponent,
    FileUploadComponent,
    DownloadTemplateComponent,
    AgGridModule,
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
    MatSelectModule,
  ],
})
export class SharedModule {}
