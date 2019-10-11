import { TestBed } from '@angular/core/testing';

import { RichiestahttpService } from './richiestahttp.service';

describe('RichiestahttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RichiestahttpService = TestBed.get(RichiestahttpService);
    expect(service).toBeTruthy();
  });
});
