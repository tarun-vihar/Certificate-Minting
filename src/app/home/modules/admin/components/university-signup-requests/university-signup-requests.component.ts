import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Web3Service } from 'src/app/services/web3.service';

@Component({
  selector: 'app-university-signup-requests',
  templateUrl: './university-signup-requests.component.html',
  styleUrls: ['./university-signup-requests.component.css']
})
export class UniversitySignupRequestsComponent implements OnInit {

  universityRequests: any[] = []

  constructor(
    private apiSrv: ApiService,
    private web3Service: Web3Service
  ) { }

  ngOnInit(): void {
    this.getUniversityRequests()
  }

  getUniversityRequests() {
    //API integration
    this.apiSrv.getAllUnapprovedUniversities()
      .subscribe((res: any) => {
        console.log("university requests:: ", res)
        this.universityRequests = res
      }, err => {
        this.universityRequests = []
      })


   
  }

  approve(univeristy: any) {
    console.log("approve: ", univeristy)
    this.apiSrv.validateUniversity(univeristy.id, "approve").subscribe({
      next: (data:any) => {  
        console.log("api success: ", data);
        this.web3Service.addNewUniversity(univeristy.universityName, univeristy.id)
   
      },
      error: (error) => {
       console.log("api error: ", error);

      },
      complete: () => {
        console.log("university signup call completed");
      },
    });
  }


  reject(univeristy: any) {
    this.apiSrv.validateUniversity(univeristy.id, "reject").subscribe({
      next: (data:any) => {  
        console.log("api success: ", data);
        this.web3Service.addNewUniversity(univeristy.universityName, univeristy.id)
   
      },
      error: (error) => {
       console.log("api error: ", error);

      },
      complete: () => {
        console.log("university signup call completed");
      },
    });
    // TODO: integrate reject api.
  }

}
