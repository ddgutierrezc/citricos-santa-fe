import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

import { TextosAlternativosEnum } from 'src/app/common/enums/textos-alternativos.enum';
import { LinksRedesSocialesEnum } from 'src/app/common/enums/links-redes-sociales.enum';
import { IdsSeccionesHomeEnum } from 'src/app/common/enums/ids-secciones-home.enum';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private readonly viewportScroller: ViewportScroller) {}

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

  /**
   * Obtiene el enumerado con los ids de las secciones de la home.
   *
   * @returns {IdsSeccionesHomeEnum} Enumerado con los ids de las secciones de la home.
   * @author dgutierrez
   * @version 1.0
   * @since 27/06/2023
   */
  get idsSeccionesHomeEnum(): typeof IdsSeccionesHomeEnum {
    return IdsSeccionesHomeEnum;
  }

  /**
   *  Realiza el scroll hasta el elemento con el id especificado.
   *
   * @param elementId Id del elemento al que se desea hacer scroll.
   *
   * @returns {void} No retorna ningún valor.
   * @author dgutierrez
   * @version 1.0
   * @since 27/06/2023
   */
  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
