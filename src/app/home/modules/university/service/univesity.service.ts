import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UnivesityService {
  constructor(private http: HttpClient) {}

  performCertificateMinting(university_id: any = 1, value: any) {
    return this.http.post(
      `${environment.baseUrl}/certificates?university_id=${university_id}`,
      {
        certificates: value,
      }
    );
  }
  performStudentRegister(university_id: any, value: any) {
    return this.http.post(
      `${environment.baseUrl}/register-students?university_id=${university_id}`,value);
  }
}
