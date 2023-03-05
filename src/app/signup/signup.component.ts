import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private storageService: StorageService
  ) {}

  universityDetailsForm: any;

  ngOnInit(): void {
    this.universityDetailsForm = this.fb.group({
      uId: ['', Validators.required],
      uName: ['', Validators.required],
      uContact: ['', Validators.required],
      uAddress: ['', Validators.required],
    });
  }

  registerUniversity(data: any) {
    data['accountAddress'] = this.storageService.getCookie('account');
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
}
