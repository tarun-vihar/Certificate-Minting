import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gurads/auth.guard';
import { GuestGuard } from './gurads/guest.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './student/student.component';
import { SearchBarComponent } from './university/search-bar/search-bar.component';
import { StudentDetailsComponent } from './university/student-details/student-details.component';
import { UniversityComponent } from './university/university.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    data: {
      roles: ['university', 'student', 'admin']
    },
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'error',
    loadChildren: () => import('./errors/errors.module').then((m) => m.ErrorsModule)
  },
  {
    path: 'auth',
    canActivate: [GuestGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'sign-up',
        component: SignupComponent,
      },
    ],
  },
  // {
  //   path: 'university',
  //   component: UniversityComponent,
  //   children: [
  //     {
  //       path: 'search',
  //       component: SearchBarComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'student',
  //   component: StudentComponent,
  // },
  // {
  //   path: 'signup',
  //   component: SignupComponent,
  // },
  {
    path: 'verify',
    component: VerifyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
