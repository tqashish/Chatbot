import { TestBed } from '@angular/core/testing';

import { GuardservService } from './guardserv.service';

describe('GuardservService', () => {
  let service: GuardservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
