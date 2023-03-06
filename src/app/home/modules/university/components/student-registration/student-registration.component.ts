import { Component, OnInit } from '@angular/core';
import { UnivesityService } from '../../service/univesity.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  isBulkUpload = true;
  constructor(
    private universityService: UnivesityService
  ) { }

  ngOnInit(): void {
  }

  submitStudents(event: any) {
    this.universityService.performStudentRegister(1, event).subscribe({
      next: (data) => {
        console.log(data, 'data here')
      }
    })
  }

}
