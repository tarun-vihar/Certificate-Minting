import { TestBed } from '@angular/core/testing';

import { UnivesityService } from './univesity.service';

describe('UnivesityService', () => {
  let service: UnivesityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnivesityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
