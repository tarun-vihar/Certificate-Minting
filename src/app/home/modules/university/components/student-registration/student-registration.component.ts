import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UnivesityService } from '../../service/univesity.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  isBulkUpload = true;
  constructor(
    private universityService: UnivesityService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
  }



  headersList: string[]  = ['studentId','studentEmail','program','department' ,'studentName', 'studentWalletAddress', 'error'];
  fileName = 'Student_Registration_Template.xlsx';
  compnentName = 'Student Registration';
  
  submitStudents(event: any) {

    const userData = JSON.parse(this.storageService.getCookie('USER_DATA'));
    console.log(userData, 'userData')
    const university_id = userData.id;
    this.universityService.performStudentRegister(university_id, event).subscribe({
      next: (data) => {
        console.log(data, 'data here')
      }
    })
  }

}
