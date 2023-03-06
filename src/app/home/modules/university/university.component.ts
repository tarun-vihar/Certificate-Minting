import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  routeTo(event: string) {
    console.log("🚀 ~ file: university.component.ts:19 ~ UniversityComponent ~ routeTo ~ event:", event)
    this.router.navigateByUrl(`/home/university/${event}`)
  }

  routeToHome() {
    this.router.navigateByUrl('/home/university')
  }

}
