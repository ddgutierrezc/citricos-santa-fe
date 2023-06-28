import { Component } from '@angular/core';
import { LoadingMensajesEnum } from 'src/app/common/enums/loading-mensajes.enum';

@Component({
  selector: 'app-modal-loading',
  templateUrl: './modal-loading.component.html',
  styleUrls: ['./modal-loading.component.scss'],
})
export class ModalLoadingComponent {
  mensaje: string;
}
