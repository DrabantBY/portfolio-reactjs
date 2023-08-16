import { useState, useEffect, useRef } from 'react';
import './styles.scss';

const ExploreSlider = (): JSX.Element => {
  const [canMove, setCanMove] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleEventPosition = (eventPosition: number): void => {
      if (thumbRef.current === null || imageRef.current === null) return;

      const { left, width } = imageRef.current.getBoundingClientRect();
      const thumbWidth = thumbRef.current.offsetWidth;

      if (
        eventPosition >= left - thumbWidth / 2 &&
        eventPosition <= left + width - thumbWidth / 2
      ) {
        thumbRef.current.style.left = `${
          ((eventPosition - left) * 100) / width
        }%`;
        imageRef.current.style.clipPath = `inset(0 ${
          100 - ((eventPosition - left + thumbWidth / 2) / width) * 100
        }% 0 0)`;
      }
    };

    const handleOnMouseMove = (e: MouseEvent): void => {
      handleEventPosition(e.clientX);
    };

    const handleOnTouchMove = (e: TouchEvent): void => {
      handleEventPosition(e.touches[0].clientX);
    };

    const removeHandlers = () => {
      document.body.onmousemove = null;
      document.body.onmouseup = null;
      document.body.ontouchmove = null;
      document.body.ontouchend = null;
      setCanMove(false);
    };

    if (canMove) {
      document.body.onmousemove = handleOnMouseMove;
      document.body.ontouchmove = handleOnTouchMove;
      document.body.onmouseup = removeHandlers;
      document.body.ontouchend = removeHandlers;
    }

    return () => {
      document.body.onmousemove = null;
      document.body.onmouseup = null;
      document.body.ontouchmove = null;
      document.body.ontouchend = null;
    };
  }, [canMove]);

  return (
    <div className='slider-explore section-explore__slider-explore'>
      <div
        className='figure-before slider-explore__figure-before section-explore__figure-before'
        ref={imageRef}
      >
        <img
          className='image-before slider-explore__image-before section-explore__image-before'
          src='explore/before.jpg'
          alt='before'
        />
      </div>

      <button
        type='button'
        className='thumb slider-explore__thumb section-explore__thumb'
        ref={thumbRef}
        onMouseDown={() => {
          setCanMove(true);
        }}
        onTouchStart={() => {
          setCanMove(true);
        }}
      >
        <span className='thumb-ring slider-explore__thumb-ring section-explore__thumb-ring' />
      </button>

      <div className='figure-after slider-explore__figure-after section-explore__figure-after'>
        <img
          className='image-after slider-explore__image-after section-explore__image-after'
          src='explore/after.jpg'
          alt='after'
        />
      </div>
    </div>
  );
};

export default ExploreSlider;
