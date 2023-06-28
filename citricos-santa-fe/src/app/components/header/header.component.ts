import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextosAlternativosEnum } from 'src/app/common/enums/textos-alternativos.enum';
import { LinksRedesSocialesEnum } from 'src/app/common/enums/links-redes-sociales.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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
