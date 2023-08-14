import Section from '../Section';
import Discover from './Discover';
import DiscoverSlider from './DiscoverSlider';
import './styles.scss';

const Welcome = (): JSX.Element => {
  return (
    <Section sectionId='welcome' title={null}>
      <Discover />
      <DiscoverSlider />
    </Section>
  );
};

export default Welcome;
