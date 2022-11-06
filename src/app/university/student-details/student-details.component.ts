import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input("studentItemDetails") studentDetails: any;

  isSubmitBtnClicked: boolean = false;
  constructor(private fb:FormBuilder) { }

  profileForm: any;

  ngOnInit(): void {
  

  this.profileForm = this.fb.group({
    id: [this.studentDetails.id, Validators.required],
    name:[this.studentDetails.name, Validators.required],
    dateOfBirth:['',Validators.required],
    dateOfGraduation: [this.studentDetails.date_of_graduation,Validators.required], 
    course:['', Validators.required],
    gender:[''],
    cgpa:['', Validators.required],
    departmentName:['',Validators.required],
    address: ['']
  });
}


  onSubmit() {
    this.isSubmitBtnClicked = true;
    console.warn(this.profileForm.value);

  }
  

}
