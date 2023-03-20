import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateMintingComponent } from './certificate-minting.component';

describe('CertificateMintingComponent', () => {
  let component: CertificateMintingComponent;
  let fixture: ComponentFixture<CertificateMintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateMintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateMintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
