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
  constructor(
    private fb: FormBuilder,
    private fileUploadService: FileUploadService
  ) {}

  profileForm: any;

  files: File | undefined;

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
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

  setFormControlValue(controlName: string, value: string) {
    console.log("** contains id test: ", this.profileForm.contains("id"));
    if (this.profileForm.contains(controlName)) {
      this.profileForm.controls[controlName].setValue(value);
    } else {
      const formControl = new FormControl(value);
      this.profileForm.setControl(controlName, formControl);
    }
  }

  onSubmit() {
    this.isSubmitBtnClicked = true;
    console.log(this.files);
    this.fileUploadService.upload(this.files).subscribe((CID: string) => {
      if (!!CID) {
        console.log("shortlink: ", CID);
        this.setFormControlValue("certificateUri", CID);
        console.warn(this.profileForm.value);
      }
    });
  }

  }
