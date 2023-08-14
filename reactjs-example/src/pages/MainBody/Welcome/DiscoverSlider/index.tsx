import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import './styles.scss';

const SLIDES = [1, 2, 3, 4, 5, 6];

const DiscoverSlider = (): JSX.Element => {
  const pagination = {
    el: '.slider-welcome__slider-pagination',
    clickable: true,
    renderBullet: (_: number, className: string) => {
      return `<button type="button" class="${className}"></button>`;
    },
  };

  const navigation = {
    prevEl: '.slider-welcome__slider-btn-prev',
    nextEl: '.slider-welcome__slider-btn-next',
  };

  return (
    <>
      <Swiper
        className='slider-welcome__body'
        slidesPerView={1}
        spaceBetween={10}
        loop
        navigation={navigation}
        pagination={pagination}
        modules={[Navigation, Pagination]}
      >
        {SLIDES.map((slide) => {
          return (
            <SwiperSlide key={slide}>
              <img
                className='slider-welcome__image'
                src={`welcome/${slide}.jpg`}
                alt={`slide ${slide}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div>controls</div>
    </>
  );
};

export default DiscoverSlider;
