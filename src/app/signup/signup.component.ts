import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private storageService: StorageService,
    private router: Router,
    private web3Service: Web3Service
  ) {}

  universityDetailsForm: any;

  ngOnInit(): void {
    this.universityDetailsForm = this.fb.group({
      uId: ['', Validators.required],
      uName: ['', Validators.required],
      uContact: ['', Validators.required],
      uAddress: ['', Validators.required],
      uEmail: ['', [Validators.required,Validators.email]],
    });

    this.web3Service.connectToMetaMask()
  }

  registerUniversity(data: any) {
  
    data['accountAddress'] = this.storageService.getCookie('ACCOUNT_ADDRESS');
    this.apiService.universitySignUp(data).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log('api failed: ', error);
      },
      complete: () => {
        console.log('university signup call completed');
      },
    });
  }

  redirectToLogin() {
    this.router.navigateByUrl('/auth/login')
  }
}
