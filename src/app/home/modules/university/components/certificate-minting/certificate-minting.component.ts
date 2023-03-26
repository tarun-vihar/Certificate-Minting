import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UnivesityService } from '../../service/univesity.service';

@Component({
  selector: 'app-certificate-minting',
  templateUrl: './certificate-minting.component.html',
  styleUrls: ['./certificate-minting.component.css']
})
export class CertificateMintingComponent implements OnInit {
  universityId: string = '';
  responseData: any[] = [];
  constructor(
    private universityService: UnivesityService,
    private storageService: StorageService
  ) { }

  selectedOption: string | undefined;

  ngOnInit(): void {
    const userData = this.storageService.getCookie('USER_DATA');
    this.universityId = userData?.id;
  }


  headersList: string[]  = ['studentId', 'cgpa', 'tenure', 'graduationDate', 'issueDate', 'remarks', 'certificate_uri', 'program'];
  fileName = 'Certificate_Template.xlsx';
  onSubmit(event: any) {
    this.universityService.performCertificateMinting(this.universityId, event).subscribe({
      next: (data: any) => {
        this.responseData = data;
      }
    })
  }

}
