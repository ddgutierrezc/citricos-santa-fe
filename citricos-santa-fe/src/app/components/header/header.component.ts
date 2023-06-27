import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextosAlternativosEnum } from 'src/app/common/enums/textos-alternativos.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  get textosAlternativosEnum(): typeof TextosAlternativosEnum {
    return TextosAlternativosEnum;
  }
}
