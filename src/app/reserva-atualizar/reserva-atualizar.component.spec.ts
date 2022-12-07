import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaAtualizarComponent } from './reserva-atualizar.component';

describe('ReservaAtualizarComponent', () => {
  let component: ReservaAtualizarComponent;
  let fixture: ComponentFixture<ReservaAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaAtualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
