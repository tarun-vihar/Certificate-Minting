import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../gurads/auth.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'university',
        data: {
          roles: ['university']
        },
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/university/university.module').then( m => m.UniversityModule) 
      },
      {
        path: 'student',
        data: {
          roles: ['student']
        },
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/student/student.module').then( m => m.StudentModule) 
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'univeristy'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
