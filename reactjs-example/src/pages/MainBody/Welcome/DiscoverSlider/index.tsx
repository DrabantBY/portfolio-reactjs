import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import DiscoverControls from "../DiscoverControls";
import { ContextFractionAction } from "@/context/ContextSliderProvider";
import "swiper/scss";
import "./styles.scss";

const SLIDES = Array.from({ length: 5 }, (_, index) => {
  return index + 1;
});

const DiscoverSlider = (): JSX.Element => {
  const changeFraction = useContext(ContextFractionAction);

  const pagination = {
    el: ".slider-welcome__slider-pagination",
    clickable: true,
    renderBullet: (_: number, className: string) => {
      return `<button type="button" class="${className}"></button>`;
    },
  };

  const navigation = {
    prevEl: ".slider-welcome__slider-btn-prev",
    nextEl: ".slider-welcome__slider-btn-next",
  };

  return (
    <div className="slider-wrapper">
      <Swiper
        className="slider-welcome"
        slidesPerView={1}
        loop
        navigation={navigation}
        pagination={pagination}
        modules={[Navigation, Pagination]}
        onSlideChange={(swiper) => {
          changeFraction((state) => {
            return {
              ...state,
              total: swiper.slides.length,
              current: swiper.realIndex + 1,
            };
          });
        }}
        onAfterInit={(swiper) => {
          changeFraction((state) => {
            return {
              ...state,
              total: swiper.slides.length,
              current: swiper.realIndex + 1,
            };
          });
        }}
      >
        {SLIDES.map((slide) => {
          return (
            <SwiperSlide key={slide} className="welcome-slide slider-welcome__welcome-slide">
              <img
                className="image-slide slider-welcome__image-slide"
                src={`welcome/${slide}.jpg`}
                alt={`slide ${slide}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <DiscoverControls />
    </div>
  );
};

export default DiscoverSlider;
