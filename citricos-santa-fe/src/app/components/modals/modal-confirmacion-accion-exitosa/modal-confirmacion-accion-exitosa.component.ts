import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTypes } from 'src/app/common/enums/modal-types.enum';

@Component({
    selector: 'app-modal-envio-correo-exito',
    templateUrl: './modal-confirmacion-accion-exitosa.component.html',
    styleUrls: ['./modal-confirmacion-accion-exitosa.component.scss'],
    imports: [CommonModule]
})
export class ModalConfirmacionAccionExitosaComponent {
  titulo: string;
  mensaje: string;
  tipo: string;

  constructor(private readonly activeModal: NgbActiveModal) {}

  get modalTypes(): typeof ModalTypes {
    return ModalTypes;
  }

  closeModal() {
    this.activeModal.close();
  }
}
