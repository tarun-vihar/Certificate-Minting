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
    id: [ '', Validators.required],
    name:['', Validators.required],
    email:['',[Validators.required, Validators.email]],
    issueDate: ['', Validators.required],
    dateOfGraduation: ['',Validators.required], 
    program:['', Validators.required],
    gender:[''],
    cgpa:['', Validators.required],
    tenure:['',Validators.required],
    remarks: ['']
  });
}


  onSubmit() {
    this.isSubmitBtnClicked = true;
    console.warn(this.profileForm.value);

  }
  

}
