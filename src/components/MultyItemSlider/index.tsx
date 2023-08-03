import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { ReactNode } from 'react';
import style from './MultyItemSlider.module.css';

interface Props {
  children: ReactNode;
}

function MultyItemSlider({ children }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 8000,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 2800,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={style.container}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default MultyItemSlider;
