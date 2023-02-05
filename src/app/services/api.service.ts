import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient ) { }

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

  studentLogin(accountAddress: string) {
    const request = this.http.post(`${environment.baseUrl}/studentProfile`, {
            account: accountAddress
    });

    return request;
  }

  studentSignUp(studentDetails: any){
    const request = this.http.post(`${environment.baseUrl}/studentSignUp`,{
      studentId: studentDetails?.id,
      studentName: studentDetails?.name,
      universityName: studentDetails?.universityName,
      account: studentDetails?.accountAddress

    });
    return request
  }

  getAllUniversities(){
    const request = this.http.get(`${environment.baseUrl}/getAllUniversities`);

    return request;
  }

  universityLogin(accountAddress: string) {
    const request = this.http.post(`${environment.baseUrl}/univeristyProfile`, {
            account: accountAddress
    })
    
    return request;
  }

  universitySignUp(universityDetails: any) {
    const request = this.http.post(`${environment.baseUrl}/universitySignUp`, {
      universityId: universityDetails?.uId,
      universityName: universityDetails?.uName,
      universityContact: universityDetails?.uContact,
      universityAddress: universityDetails?.uAddress
    })

    return request;
  }

 


}
