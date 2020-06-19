import { TestBed } from '@angular/core/testing';

import { GNDataService } from './gn-data.service';

describe('GNDataService', () => {
  let service: GNDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GNDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
