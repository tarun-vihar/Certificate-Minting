import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitySignupRequestsComponent } from './university-signup-requests.component';

describe('UniversitySignupRequestsComponent', () => {
  let component: UniversitySignupRequestsComponent;
  let fixture: ComponentFixture<UniversitySignupRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitySignupRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitySignupRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
