import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FileUploadService } from "src/app/services/file-upload.service";

@Component({
  selector: "app-student-details",
  templateUrl: "./student-details.component.html",
  styleUrls: ["./student-details.component.css"],
})
export class StudentDetailsComponent implements OnInit {
  @Input("studentItemDetails") studentDetails: any;

  isSubmitBtnClicked: boolean = false;

  isStudentDetailsRetrieved: boolean = false;

  constructor(
    private fb: FormBuilder,
    private fileUploadService: FileUploadService
  ) {}

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
    const sid = event.target.value;
    // api call request success

    this.isStudentDetailsRetrieved = true;

    const details = {
      name: 'Tarun Vihar',
      email: 'tarun.vihar@csun.edu.co',
    };

    this.setFormControlValue(details);
  }

  onSubmit() {
    this.isSubmitBtnClicked = true;
    console.log(this.files);
    this.fileUploadService.upload(this.files).subscribe((CID: string) => {
      if (!!CID) {
        console.log("shortlink: ", CID);
        this.setFormControlValue({ certificateUri: CID });
        console.warn(this.profileForm.value);
      }
    });
  }
}
