import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmacionAccionExitosaComponent } from './modal-confirmacion-accion-exitosa.component';

describe('ModalConfirmacionAccionExitosaComponent', () => {
  let component: ModalConfirmacionAccionExitosaComponent;
  let fixture: ComponentFixture<ModalConfirmacionAccionExitosaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalConfirmacionAccionExitosaComponent],
    });
    fixture = TestBed.createComponent(ModalConfirmacionAccionExitosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
