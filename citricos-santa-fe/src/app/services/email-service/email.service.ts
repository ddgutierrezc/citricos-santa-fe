import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { EmailJsParamsEnum } from 'src/app/common/enums/emailjs-params.enum';
import { IFormularioContacto } from 'src/app/common/interface/formulario-contacto.interface';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  async sendEmail(
    formularioContactoData: IFormularioContacto
  ): Promise<boolean> {
    const emailSendedResponse: EmailJSResponseStatus = await emailjs.send(
      EmailJsParamsEnum.SERVICE_ID,
      EmailJsParamsEnum.TEMPLATE_ID,
      {
        from_name: formularioContactoData.from_name,
        to_name: formularioContactoData.to_name,
        email: formularioContactoData.email,
        message: formularioContactoData.message,
      },
      EmailJsParamsEnum.PUBLIC_KEY
    );

    if (emailSendedResponse.status === 200) {
      return true;
    }

    return false;
  }
}
