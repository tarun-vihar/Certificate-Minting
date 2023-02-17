import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiService: ApiService, private storageService: StorageService, private route: ActivatedRoute) { }

  studentDetailsForm: any;

  universityDetailsForm: any;

  isSubmitBtnClicked: boolean = false;

  errorMessage: string='';

  isDetailsSubmittedSuccessfully: boolean = false;

  universityList: any = [];

  isStudentLogin: boolean = false;

  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      console.log("** params: ", params);
      this.isStudentLogin = params['isStudent'] === 'true' ? true: false;
    })

    this.isSubmitBtnClicked = false;
    this.isDetailsSubmittedSuccessfully = false;
  
    if(this.isStudentLogin) {
      this.apiService.getAllUniversities()
      .subscribe({
        next: (data: any) => this.universityList = data,
        error: (error) => {
          this.errorMessage = error.message;

          // dummy university list - remove it after api integration
          this.universityList = [{id:1,name: 'University One'}, {id:2, name: 'University Two'}];
        },
        complete: ()=> console.log("getAllUniversities api call got completed")

      }); 
      
      this.studentDetailsForm = this.fb.group({
        id: ['', Validators.required],
        name:['', Validators.required],
        uId: ['', Validators.required]
      });
  } else {

    this.universityDetailsForm = this.fb.group({
      uId: ['', Validators.required],
      uName: ['', Validators.required],
      uContact: ['', Validators.required],
      uAddress: ['', Validators.required],

    })
  }
}

registerStudent(data: any) {
  this.isSubmitBtnClicked = true;
  console.log(data);
  data['accountAddress'] = this.storageService.getCookie('account');

  this.apiService.studentSignUp(data)
  .subscribe({
    next: data => {
      this.isDetailsSubmittedSuccessfully = true;
      console.log(data);
    }, 
    error: error => {
      console.log("api failed: ", error);
      this.errorMessage = error?.message || 'Error Occured While registering the student';
    },
    complete: () => {
      console.log("student signup call completed");
    }
  }
  );
}

registerUniversity(data: any) {
  this.isSubmitBtnClicked = true;
  console.log(data);
  data['accountAddress'] = this.storageService.getCookie('account');

  this.apiService.universitySignUp(data)
  .subscribe({
    next: data => {
      this.isDetailsSubmittedSuccessfully = true;
      console.log(data);
    }, 
    error: error => {
      console.log("api failed: ", error);
      this.errorMessage = error?.message || 'Error Occured While registering the university';
    },
    complete: () => {
      console.log("university signup call completed");
    }
  }
  );
}

}
