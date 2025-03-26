import { OwlOptions } from 'ngx-owl-carousel-o';

export const customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  autoplay: false,
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
