import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'university',
    loadChildren: () => import('./modules/university/university.module').then( m => m.UniversityModule) 
  },
  {
    path: 'student',
    loadChildren: () => import('./modules/student/student.module').then( m => m.StudentModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
