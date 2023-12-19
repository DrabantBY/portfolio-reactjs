import { useContext } from 'react';
import { ContextFractionState } from '@/context/ContextSliderProvider';
import './styles.scss';

const DiscoverFraction = () => {
  const fraction = useContext(ContextFractionState);

  return (
    <div className='slider-fraction section-welcome__slider-fraction'>
      <span>
        {fraction.current < 10 ? `0${fraction.current}` : fraction.current}
      </span>
      <span>|</span>
      <span>{fraction.total < 10 ? `0${fraction.total}` : fraction.total}</span>
    </div>
  );
};

export default DiscoverFraction;
