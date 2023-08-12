import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/element/css/navigation';
import 'swiper/element/css/pagination';

register();

export const VIDEO = [
  'https://www.youtube.com/embed/zp1BXPX8jcU',
  'https://www.youtube.com/embed/Vi5D6FKhRmo',
  'https://www.youtube.com/embed/NOhDysLnTvY',
  'https://www.youtube.com/embed/aWmJ5DgyWPI',
  'https://www.youtube.com/embed/2OR0OCr6uRE',
];

const VideoSlider = (): JSX.Element => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(e);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view='3'
      navigation='true'
      pagination='true'
    >
      {VIDEO.map((video) => {
        return (
          <swiper-slide key={video}>
            <iframe
              width='100%'
              src={video}
              frameborder='1'
              allowfullscreen
            ></iframe>
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};

export default VideoSlider;
