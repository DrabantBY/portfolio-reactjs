import { ReactComponent as NextIcon } from '../../../../assets/svg/video/next.svg';
import { ReactComponent as PrevIcon } from '../../../../assets/svg/video/prev.svg';
import './styles.scss';

const VideoControls = (): JSX.Element => {
  return (
    <div className='video-controls slider-video__slider-controls'>
      <button
        type='button'
        className='slider-btn-prev slider-video__slider-btn-prev'
      >
        <PrevIcon />
      </button>
      <div className='slider-pagination slider-video__slider-pagination' />
      <button
        type='button'
        className='slider-btn-next slider-video__slider-btn-next'
      >
        <NextIcon />
      </button>
    </div>
  );
};

export default VideoControls;
