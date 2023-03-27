import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_ROUTE_FOR_ROLE } from '../constants/proj.cnst';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginAsUniversity() {
    this.authService
    .universityLogin()
    .then((data) => {
      if (data) {
          this.router.navigate(DEFAULT_ROUTE_FOR_ROLE.university);
        }
      })
      .catch((error) => {
        // error
        alert('login failed');
      });
  }

  async loginAsStudent() {
    // same api call with param student
    this.authService
      .studentLogin()
      .then((data) => {
          if (data) {
            this.router.navigate(DEFAULT_ROUTE_FOR_ROLE.student);
          }
        })
        .catch((error) => {
          // error
          alert('login failed');
        });
  }

  universitySignUp() {
    this.router.navigateByUrl('/auth/sign-up')
  }
}
