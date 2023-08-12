import Section from '../Section';
import VideoSlider from './VideoSlider';
import './styles.scss';

const Video = (): JSX.Element => {
  return (
    <Section sectionId='video' title='video journey'>
      <VideoSlider />
    </Section>
  );
};

export default Video;
