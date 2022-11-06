import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { listData } from 'src/app/shared/list';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  list = listData.reverse();
  
  searchText = '';
  toggleSearch: boolean = false;
  @ViewChild('searchbar')
  searchbar!: ElementRef;

  isGenCertBtnClicked: boolean = false;

  studentDetails: any;

  selectedOption: string | undefined;

  constructor() {}

  ngOnInit(): void {
    
  }

  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }

  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }

  gotoStudentDetails(details: any) {
    this.isGenCertBtnClicked = true;
    this.studentDetails = details;
  }

}
