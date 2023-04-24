import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET'
  });

  constructor(private http: HttpClient) { }

  // login api for student and University
  getProfileInfo(accountAddress: string, isStudent: boolean) {
    this.http.post(`${environment.baseUrl}/getProfile`, {
      isStudentLogin: isStudent,
      account: accountAddress
    })
      .subscribe({
        next: data => {
          console.log(data);

          // if data ={} display no data found error along with signup button
        },
        error: error => {
          console.log("api failed: ", error);

        },
        complete: () => {
          console.log("student login call completed");
        }
      }
      );
  }

  authenicateStudent(studentWalletAddress: string, studentId: string, token: string, universityId: number) {
    const request = this.http.post(`${environment.baseUrl}/authenticate?token=${token}`, {
      studentWalletAddress,
      studentId,
      universityId
    });

    return request;
  }

  studentSignUp(studentDetails: any) {
    const request = this.http.post(`${environment.baseUrl}/student/signup`, {
      studentId: studentDetails?.id,
      studentName: studentDetails?.name,
      universityName: studentDetails?.universityName,
      account: studentDetails?.accountAddress

    });
    return request
  }

  getAllUniversities() {
    const request = this.http.get(`${environment.baseUrl}/university/get-all`);

    return request;
  }

  universityLogin(accountAddress: string) {
    const request = this.http.post(`${environment.baseUrl}/univeristyProfile`, {
      account: accountAddress
    })

    return request;
  }

  universitySignUp(universityDetails: any) {
    const request = this.http.post(`${environment.baseUrl}/university/signup`, universityDetails);

    return request;
  }

  getStudentDetails(studentId: number, universityId: number) {
    return this.http.post(`${environment.baseUrl}/student-details`, {
      studentId: studentId,
      universityId: universityId
    })
  }

  getUniversityRequests() {
    return this.http.get(`${environment.baseUrl}/university/requests`)
  }


}
