import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ApiService } from "src/app/services/api.service";
import { FileUploadService } from "src/app/services/file-upload.service";
import { StorageService } from "src/app/services/storage.service";

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
    private fileUploadService: FileUploadService
  ) {

  }

  profileForm: any;

  files: File | undefined;

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      studentId: ["", Validators.required],
      studentName: [''],
      studentEmail: [''],
      issueDate: ["", Validators.required],
      dateOfGraduation: ["", Validators.required],
      program: [''],
      department: [''],
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
    const universityId = userData?.id;

    this.studentDetailsSubscription = this.apiService.getStudentDetails(studentId, universityId).subscribe({
      next: (data: any) =>{
      this.isStudentDetailsRetrieved = true;

      const {studentName, studentEmail, program, department} = data;
      const details = {
      studentName,
      studentEmail,
      program,
      department,
    };

    this.setFormControlValue(details);
      },
      error: err =>{
        this.isStudentDetailsRetrieved = false;
        console.log('student api details failed', err)
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
      }
    });
  }
}
