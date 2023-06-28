import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-envio-correo-exito',
  templateUrl: './modal-confirmacion-accion-exitosa.component.html',
  styleUrls: ['./modal-confirmacion-accion-exitosa.component.scss'],
})
export class ModalConfirmacionAccionExitosaComponent {
  titulo: string;

  constructor(private readonly activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.close();
  }
}
