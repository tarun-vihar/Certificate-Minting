import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthereumNotFoundComponent } from './ethereum-not-found.component';

describe('EthereumNotFoundComponent', () => {
  let component: EthereumNotFoundComponent;
  let fixture: ComponentFixture<EthereumNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthereumNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthereumNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
