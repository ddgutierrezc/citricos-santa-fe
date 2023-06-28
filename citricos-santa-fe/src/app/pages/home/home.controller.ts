import { Injectable } from '@angular/core';
import { LoadingMensajesEnum } from 'src/app/common/enums/loading-mensajes.enum';
import { IFormularioContacto } from 'src/app/common/interface/formulario-contacto.interface';
import { EmailService } from 'src/app/services/email-service/email.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';

@Injectable()
export class HomeController {
  constructor(
    private readonly emailService: EmailService,
    private readonly loadingService: LoadingService
  ) {}

  async sendEmail(formulario: IFormularioContacto) {
    try {
      const loadingRef = this.loadingService.showLoading(
        LoadingMensajesEnum.ENVIANDO_CORREO
      );
      const responseEmailSended = await this.emailService.sendEmail(formulario);

      this.loadingService.closeModal(loadingRef);

      return responseEmailSended;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
