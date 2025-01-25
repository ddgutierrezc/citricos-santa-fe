import { Component } from '@angular/core';
import { LinksRedesSocialesEnum } from 'src/app/common/enums/links-redes-sociales.enum';
import { TextosAlternativosEnum } from 'src/app/common/enums/textos-alternativos.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  /**
   * Obtiene el enumerado de los textos alternativos de las imágenes.
   *
   * @returns {TextosAlternativosEnum} Enumerado de los textos alternativos de las imágenes.
   * @author dgutierrez
   * @version 1.0
   * @since 27/06/2023
   */
  get textosAlternativosEnum(): typeof TextosAlternativosEnum {
    return TextosAlternativosEnum;
  }

  /**
   * Obtiene el enumerado con los links de las redes sociales.
   * @returns {LinksRedesSocialesEnum} Enumerado con los links de las redes sociales.
   * @author dgutierrez
   * @version 1.0
   * @since 27/06/2023
   */
  get redesSocialesEnum(): typeof LinksRedesSocialesEnum {
    return LinksRedesSocialesEnum;
  }
}
