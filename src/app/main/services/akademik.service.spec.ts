import { TestBed } from '@angular/core/testing';

import { AkademikService } from './akademik.service';

describe('AkademikService', () => {
  let service: AkademikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AkademikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
