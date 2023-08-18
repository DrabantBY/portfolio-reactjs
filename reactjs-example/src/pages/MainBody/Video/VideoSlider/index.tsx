import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import VideoControls from '../VideoControls';
import VIDEO from '../../../../data/video';
import 'swiper/scss';
import './styles.scss';

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
      <VideoControls />
    </>
  );
};

export default VideoSlider;
