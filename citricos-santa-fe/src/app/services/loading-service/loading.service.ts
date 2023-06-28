import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalLoadingComponent } from 'src/app/components/modals/modal-loading/modal-loading.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private readonly modalService: NgbModal) {}

  /**
   *  Muestra un modal de carga.
   *
   * @returns {NgbModalRef} - Una referencia al modal de carga.
   * @author dgutierrez
   * @version 1.0
   * @since 27/06/2023
   */
  showLoading(): NgbModalRef {
    const loadingRef: NgbModalRef = this.modalService.open(
      ModalLoadingComponent,
      {
        centered: true,
        size: 'md',
        backdrop: 'static',
      }
    );

    return loadingRef;
  }

  closeModal(loadingRef: NgbModalRef): void {
    loadingRef.close();
  }
}
