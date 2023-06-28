import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { TextosAlternativosEnum } from 'src/app/common/enums/textos-alternativos.enum';
import { EmailService } from 'src/app/services/email/email.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmailJsParamsEnum } from 'src/app/common/enums/emailjs-params.enum';
import { IFormularioContacto } from 'src/app/common/interface/formulario-contacto.interface';
import { ICarousel } from 'src/app/common/interface/carousel.interface';
import { TextosAlternativosCarouselEnum } from 'src/app/common/enums/textos-alternativos-carousels.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private readonly emailService: EmailService) {}

  formContacto: FormGroup;

  images: ICarousel[] = [
    {
      title: 'Image 1',
      url: 'assets/imgs/arboles-de-naranja.jpg',
      alt: TextosAlternativosCarouselEnum.ARBOLES_DE_NARANJA,
    },
    {
      title: 'Image 1',
      url: 'assets/imgs/naranja-cortada-a-la-mitad.jpg',
      alt: TextosAlternativosCarouselEnum.NARANJA_CORTADA_A_LA_MITAD,
    },
    {
      title: 'Image 1',
      url: 'assets/imgs/persona-sirviendo-un-vaso-de-jugo.jpg',
      alt: TextosAlternativosCarouselEnum.PERSONA_SIRVIENDO_UN_VASO_DE_JUGO,
    },
  ];

  parrafos: string[] = [
    'En octubre de 1994, dimos inicio a nuestra historia como una pequeña empresa familiar con una visión clara: llevar a cabo la compra y venta de cítricos para abastecer tanto supermercados locales como aquellos ubicados fuera del área metropolitana. Nuestro objetivo era ofrecer productos frescos y de calidad a nuestros clientes.',
    'Fue en el año 2001 cuando decidimos dar un paso importante hacia adelante al iniciar la producción de cítricos en la prometedora zona de Acosta y Upala. Esta estrategia nos permitió no solo mejorar la calidad de nuestros productos, sino también controlar los precios, brindando así una oferta más competitiva en el mercado.',
    'Gracias a nuestro enfoque como productores y vendedores directos, logramos establecernos con éxito en la industria. Este enfoque nos brindó la ventaja de ofrecer mejores precios a nuestros clientes, a la vez que mantuvimos altos estándares de calidad y un servicio excepcional.',
    'Hoy en día, nos enorgullece decir que nuestros productos se comercializan en todos los mercados nacionales, así como en diversas cadenas de supermercados. A pesar de nuestro crecimiento, hemos mantenido nuestra esencia como una pequeña empresa familiar, lo que nos permite mantener un trato cercano y personalizado con nuestros clientes.',
  ];

  ngOnInit(): void {
    this.crearFormularioContacto();
  }

  get textosAlternativosEnum(): typeof TextosAlternativosEnum {
    return TextosAlternativosEnum;
  }

  private crearFormularioContacto() {
    this.formContacto = new FormBuilder().group({
      from_name: ['', Validators.required],
      to_name: [EmailJsParamsEnum.TO_NAME, Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', Validators.required],
    });
  }

  async submitForm() {
    if (this.formContacto.invalid) {
      console.debug('Formulario inválido');
      return;
    }

    const formularioContacto: IFormularioContacto = this.formContacto
      .value as IFormularioContacto;
    const responseEmailSended = await this.emailService.sendEmail(
      formularioContacto
    );

    if (responseEmailSended) {
      this.formContacto.reset();
    }
  }
}
