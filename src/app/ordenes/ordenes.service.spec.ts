import { TestBed } from '@angular/core/testing';

import { OrdenesService } from './ordenes.service';

describe('OrdenesService', () => {
  let service: OrdenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
