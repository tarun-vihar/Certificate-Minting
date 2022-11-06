import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  isCreateTokenBtnClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  search(value: any){
    console.log(value);
  }

  genToken() {
    this.isCreateTokenBtnClicked = true;
  }
}
