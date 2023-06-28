import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalRolesEnum } from 'src/app/common/enums/modal-roles.enum';
import { ModalTypes } from 'src/app/common/enums/modal-types.enum';
import { ModalResponse } from 'src/app/common/interface/modal-response.interface';
import { ModalConfirmacionAccionExitosaComponent } from 'src/app/components/modals/modal-confirmacion-accion-exitosa/modal-confirmacion-accion-exitosa.component';

@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  constructor(private readonly modalService: NgbModal) {}

  /**
   * Muestra un modal indicando que se ha realizado una acción.
   *
   * @param {string} titulo - El mensaje a mostrar en el modal.
   * @returns {Promise<ModalResponse>} - Una promesa que se resuelve con los datos y el rol del modal.
   *
   * @author dgutierrez
   * @version 1.0
   * @since 27/06/2023
   */
  async mostrarModalResultadoAccion(
    tipo: ModalTypes,
    titulo: string,
    mensaje: string
  ): Promise<ModalResponse> {
    const modalRef: NgbModalRef = this.modalService.open(
      ModalConfirmacionAccionExitosaComponent,
      {
        centered: true,
        size: 'md',
        backdrop: 'static',
      }
    );

    modalRef.componentInstance.titulo = titulo;
    modalRef.componentInstance.mensaje = mensaje;
    modalRef.componentInstance.tipo = tipo;

    const result = await modalRef.result;
    return { data: result, role: ModalRolesEnum.CONFIRMED };
  }
}
