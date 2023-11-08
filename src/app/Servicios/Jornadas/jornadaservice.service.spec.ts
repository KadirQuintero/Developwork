import { TestBed } from '@angular/core/testing';

import { JornadaserviceService } from './jornadaservice.service';

describe('JornadaserviceService', () => {
  let service: JornadaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JornadaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
