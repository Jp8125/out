import { TestBed } from '@angular/core/testing';

import { FdataService } from './fdata.service';

describe('FdataService', () => {
  let service: FdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
