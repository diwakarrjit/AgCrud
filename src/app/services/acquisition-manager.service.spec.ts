import { TestBed, inject } from '@angular/core/testing';

import { AcquisitionManagerService } from './acquisition-manager.service';

describe('AcquisitionManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcquisitionManagerService]
    });
  });

  it('should be created', inject([AcquisitionManagerService], (service: AcquisitionManagerService) => {
    expect(service).toBeTruthy();
  }));
});
