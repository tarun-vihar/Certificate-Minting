import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CertificateListComponent } from "./components/certificate-list/certificate-list.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'certificates',
        component: CertificateListComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'certificates'
      }
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
