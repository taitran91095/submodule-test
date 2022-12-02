import { TestBed } from '@angular/core/testing';

import { SubTestService } from './sub-test.service';

describe('SubTestService', () => {
  let service: SubTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
