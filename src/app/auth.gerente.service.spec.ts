import { TestBed } from '@angular/core/testing';

import { AuthGerenteService } from './auth.gerente.service';

describe('AuthGerenteService', () => {
  let service: AuthGerenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGerenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
