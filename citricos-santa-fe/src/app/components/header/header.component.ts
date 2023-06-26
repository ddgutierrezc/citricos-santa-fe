import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DividerComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
