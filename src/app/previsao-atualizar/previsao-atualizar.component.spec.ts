import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisaoAtualizarComponent } from './previsao-atualizar.component';

describe('PrevisaoAtualizarComponent', () => {
  let component: PrevisaoAtualizarComponent;
  let fixture: ComponentFixture<PrevisaoAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevisaoAtualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevisaoAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
