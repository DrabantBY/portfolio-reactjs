import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SliderControls from '../SliderControls';

import 'swiper/scss';
import './styles.scss';

export const VIDEO = [
  'https://www.youtube.com/embed/JkPcA8dngB4',
  'https://www.youtube.com/embed/mpnZuKH9OOY',
  'https://www.youtube.com/embed/s1cgV3rTEn0',
  'https://www.youtube.com/embed/aH0v4c5Z4KM',
  'https://www.youtube.com/embed/RniS4FZA50Y',
  'https://www.youtube.com/embed/9My9sw_ke_s',
  'https://www.youtube.com/embed/y_CmwHT3WAM',
  'https://www.youtube.com/embed/PI9K2AwAqHA',
  'https://www.youtube.com/embed/n8lY_lm_BmA',
  'https://www.youtube.com/embed/xAsQrZ9s-dE',
  'https://www.youtube.com/embed/QoipxxZ6fyY',
];

const VideoSlider = (): JSX.Element => {
  const pagination = {
    el: '.slider-video__slider-pagination',
    renderBullet: (_: number, className: string) => {
      return `<button type="button" class="${className}"></button>`;
    },
  };

  const navigation = {
    prevEl: '.slider-video__slider-btn-prev',
    nextEl: '.slider-video__slider-btn-next',
  };

  return (
    <>
      <Swiper
        className='slider-video'
        autoHeight
        slidesPerView={1}
        loop
        loopedSlides={2}
        navigation={navigation}
        pagination={pagination}
        modules={[Navigation, Pagination]}
        breakpoints={{
          769: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {VIDEO.map((video) => {
          return (
            <SwiperSlide
              key={video}
              className='video-slide slider-video__video-slide'
            >
              <iframe
                title={video}
                src={video}
                allowFullScreen
                loading='lazy'
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderControls />
    </>
  );
};

export default VideoSlider;
