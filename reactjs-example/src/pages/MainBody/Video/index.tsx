import Section from '../Section';
import VideoSlider from './VideoSlider';
import './styles.scss';

const Video = (): JSX.Element => {
  return (
    <Section sectionId='video'>
      <h2 className='section-title section-video__title'>video journey</h2>
      <div className='video-wrapper section-video__video-wrapper'>
        <VideoSlider />
      </div>
    </Section>
  );
};

export default Video;
