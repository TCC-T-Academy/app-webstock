import { TestBed } from '@angular/core/testing';

import { GestaoUsuariosService } from './gestao-usuarios.service';

describe('GestaoUsuariosService', () => {
  let service: GestaoUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestaoUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
