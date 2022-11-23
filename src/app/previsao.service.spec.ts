import { TestBed } from '@angular/core/testing';

import { PrevisaoService } from './previsao.service';

describe('PrevisaoService', () => {
  let service: PrevisaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevisaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
