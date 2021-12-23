import { TestBed } from '@angular/core/testing';

import { SomeLib2Service } from './some-lib2.service';

describe('SomeLib2Service', () => {
  let service: SomeLib2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomeLib2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
