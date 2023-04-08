import { Component, OnInit } from '@angular/core';
import { UnivesityService } from '../../service/univesity.service';
import { StorageService } from 'src/app/services/storage.service';
import { AUTH_COOKIE_KEY } from 'src/app/constants/proj.cnst';

@Component({
  selector: 'app-staff-registration',
  templateUrl: './staff-registration.component.html',
  styleUrls: ['./staff-registration.component.css']
})
export class StaffRegistrationComponent implements OnInit {

  constructor( 
    private universityService: UnivesityService,
    private storageService: StorageService
    ) { }

  ngOnInit(): void {
  }

  headersList: string[]  = ['staffId','staffEmail','staffName','staffWalletAaddress' ,'universityId', 'error'];
  fileName = 'Staff_Registration_Template.xlsx';
  compnentName = 'Staff Registration';
  
  submitStaffDetails(event: any) {

    const userData = JSON.parse(this.storageService.getCookie(AUTH_COOKIE_KEY)); 
    console.log(userData, 'userData')
    const university_id = userData.id;
    this.universityService.performStaffRegister(university_id, event).subscribe({
      next: (data) => {
        console.log(data, 'data here')
      }
    })
  }

}
