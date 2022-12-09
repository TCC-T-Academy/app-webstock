import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPrevisaoComponent } from './nova-previsao.component';

describe('NovaPrevisaoComponent', () => {
  let component: NovaPrevisaoComponent;
  let fixture: ComponentFixture<NovaPrevisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaPrevisaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaPrevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
