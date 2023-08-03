import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useSlider } from '../../../hooks/useSlider';
import { BASE_DOMAIN } from '../../../utilities/Definds';

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import './mainSlider.css';
import SliderCaption from './sliderCaption';

function MainSlider() {
  const { data: sliders } = useSlider();
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      nextIcon={<BsFillArrowRightCircleFill />}
      prevIcon={<BsFillArrowLeftCircleFill />}
      activeIndex={index}
      onSelect={handleSelect}
      className="sliderBox"
      fade
    >
      {sliders?.data.map(item => (
        <Carousel.Item
          key={item.id}
          className="img-background"
          style={{
            backgroundImage: `url(${
              BASE_DOMAIN + '/storage/images/sliders/' + item.photo
            })`,
          }}
        >
          <SliderCaption
            id={item.id}
            title={item.title}
            imdbRate={item.imdbRate}
            shortStory={item.shortStory}
            yearCreate={item.yearCreate}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MainSlider;
