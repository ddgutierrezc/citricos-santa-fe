import { TextosAlternativosCarouselEnum } from '../enums/textos-alternativos-carousels.enum';

export interface ICarousel {
  title: string;
  url: string;
  alt: TextosAlternativosCarouselEnum;
}
