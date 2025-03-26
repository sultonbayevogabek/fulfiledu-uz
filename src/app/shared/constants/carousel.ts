import { OwlOptions } from 'ngx-owl-carousel-o';

export const customOptions: OwlOptions = {
  loop: false,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  mergeFit: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  autoplay: true,
  rewind: false,
  responsive: {
    0: {
      items: 1,
      margin: 12,
    },
    500: {
      items: 2,
      margin: 12,
    },
    800: {
      items: 2,
      margin: 18,
    },
    900: {
      items: 3,
      margin: 18,
    },
    1200: {
      items: 3,
      margin: 24,
    },
    1400: {
      items: 4,
      margin: 24,
    }
  },
  nav: false
}
