import { ReactComponent as NextIcon } from '@svg/welcome/next.svg';
import { ReactComponent as PrevIcon } from '@svg/welcome/prev.svg';
import DiscoverFraction from '../DiscoverFraction';
import './styles.scss';

const DiscoverControls = (): JSX.Element => {
  return (
    <div className='slider-controls slider-welcome__slider-controls'>
      <DiscoverFraction />
      <div className='slider-pagination slider-welcome__slider-pagination' />
      <div className='slider-navigation slider-welcome__slider-navigation'>
        <button
          className='slider-btn-prev slider-welcome__slider-btn-prev'
          type='button'
        >
          <PrevIcon />
        </button>
        <button
          className='slider-btn-next slider-welcome__slider-btn-next'
          type='button'
        >
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

export default DiscoverControls;
