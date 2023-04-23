import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-university-signup-requests',
  templateUrl: './university-signup-requests.component.html',
  styleUrls: ['./university-signup-requests.component.css']
})
export class UniversitySignupRequestsComponent implements OnInit {

  universityRequests: any[] = []

  constructor(
    private apiSrv: ApiService
  ) { }

  ngOnInit(): void {
    this.getUniversityRequests()
  }

  getUniversityRequests() {
    // API integration
    // this.apiSrv.getUniversityRequests()
    //   .subscribe((res: any) => {
    //     console.log("university requests:: ", res)
    //     this.universityRequests = res.data
    //   }, err => {
    //     this.universityRequests = []
    //   })


    this.universityRequests = [
      {
        name: 'University 1',
      },
      { name: 'University 2' },
      { name: 'University 3' },
      { name: 'University 4' }
    ]
  }

  approve() {
    // TODO: integrate approve api.
  }

  reject() {
    // TODO: integrate reject api.
  }

}
