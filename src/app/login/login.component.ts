import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Web3Service } from '../services/web3.service';
import { isEmpty } from 'lodash';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async loginAsUniversity() {
    this.authService
      .univeristyLogin()
      .then((data) => {
        if (data) {
          this.router.navigateByUrl('/home');
        }
      })
      .catch((error) => {
        // error
        alert('login failed')
      });
    // same api call with param university
  }

  async loginAsStudent() {
    // same api call with param student
  }
}
