import { TestBed } from '@angular/core/testing';

import { SpringRequestService } from './spring-request.service';

describe('SpringRequestService', () => {
  let service: SpringRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
