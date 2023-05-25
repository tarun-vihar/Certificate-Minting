import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ApiService } from "src/app/services/api.service";
import { FileUploadService } from "src/app/services/file-upload.service";
import { StorageService } from "src/app/services/storage.service";
import { Web3Service } from "src/app/services/web3.service";

@Component({
  selector: "app-student-details",
  templateUrl: "./student-details.component.html",
  styleUrls: ["./student-details.component.css"],
})
export class StudentDetailsComponent implements OnInit, OnDestroy {
  @Input("studentItemDetails") studentDetails: any;

  isSubmitBtnClicked: boolean = false;

  isStudentDetailsRetrieved: boolean = false;

  studentDetailsSubscription: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private apiService: ApiService,
    private fileUploadService: FileUploadService,
    private web3Service: Web3Service
  ) {

  }

  profileForm: any;

  files: File | undefined;

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      id: ["", Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      issueDate: ["", Validators.required],
      dateOfGraduation: ["", Validators.required],
      program: ["", Validators.required],
      gender: [""],
      cgpa: ["", Validators.required],
      tenure: ["", Validators.required],
      file: ["", Validators.required],
      remarks: [""],
    });
  }

  ngOnDestroy(): void {
      this.studentDetailsSubscription?.unsubscribe();
  }

  onFileSelected(event: any) {
    console.log("** event: ", event);
    this.files = event.target.files;
  }

  setFormControlValue(formControlKeyVal: Record<string, string>) {
    for (const key in formControlKeyVal) {
      if (this.profileForm.contains(key)) {
        this.profileForm.controls[key].setValue(formControlKeyVal[key]);
      } else {
        const formControl = new FormControl(formControlKeyVal[key]);
        this.profileForm.setControl(key, formControl);
      }
    }
  }

  studentDetailsApi(event: any) {
    console.log("blur event: ", event);
    const studentId = event.target.value;

    const userData = this.storageService.getCookie('USER_DATA');
    console.log(userData, 'userData')
    const universityId = 3

    this.studentDetailsSubscription = this.apiService.getStudentDetails(studentId, universityId).subscribe({
      next: (data: any) =>{
      this.isStudentDetailsRetrieved = true;

      const details = {
      name: data?.name || 'Tarun Vihar',
      email: data?.email || 'tarun.vihar@csun.edu.co',
    };

    this.setFormControlValue(details);
      },
      error: err =>{
        this.isStudentDetailsRetrieved = false;
      },
      complete : ()=>{
        console.log('student-details call completed!');
      }
    });
    
  }

  onSubmit() {
    this.isSubmitBtnClicked = true;
    console.log(this.files);
    this.fileUploadService.upload(this.files).subscribe((CID: string) => {
      if (!!CID) {
        console.log("shortlink: ", CID);
        this.setFormControlValue({ certificateUri: `https://${CID}.ipfs.w3s.link` });
        console.warn(this.profileForm.value);
        this.web3Service.mintCertificate();
      }
    });

  }
}
