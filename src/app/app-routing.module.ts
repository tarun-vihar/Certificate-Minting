import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { SearchBarComponent } from './university/search-bar/search-bar.component';
import { StudentDetailsComponent } from './university/student-details/student-details.component';
import { UniversityComponent } from './university/university.component';

const routes: Routes = [
  {
    path:'university',
    component: UniversityComponent,
    children:[
      {
        path:'search',
        component: SearchBarComponent
      },   
    ]
  },
  {
    path: 'student',
    component: StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
