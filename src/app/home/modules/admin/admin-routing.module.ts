import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/gurads/auth.guard';
import { UniversitySignupRequestsComponent } from './components/university-signup-requests/university-signup-requests.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'university-requests',
    pathMatch: 'full'
  },
  {
    path: 'university-requests',
    component: UniversitySignupRequestsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
