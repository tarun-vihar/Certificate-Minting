import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateMintingComponent } from './components/certificate-minting/certificate-minting.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { VerifyCertificateComponent } from './components/verify-certificate/verify-certificate.component';
import { UniversityComponent } from './university.component';
import { StaffRegistrationComponent } from './components/staff-registration/staff-registration.component';

const routes: Routes = [
  {
    path: '',
    component: UniversityComponent,
    children: [
      {
        path: 'certificate-minting',
        component: CertificateMintingComponent,
      },
      {
        path: 'student-registration',
        component: StudentRegistrationComponent,
      },
      {
        path: 'staff-registration',
        component: StaffRegistrationComponent,
      },
      {
        path: 'verify-certificate',
        component: VerifyCertificateComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'certificate-minting'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversityRoutingModule {}
