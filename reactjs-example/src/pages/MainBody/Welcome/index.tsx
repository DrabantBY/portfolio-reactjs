import { ContextSliderProvider } from '@/context/ContextSliderProvider';
import Section from '../Section';
import DiscoverLink from './DiscoverLink';
import DiscoverSlider from './DiscoverSlider';
import './styles.scss';

const Welcome = (): JSX.Element => {
  return (
    <Section sectionId='welcome' title={null}>
      <DiscoverLink />
      <ContextSliderProvider>
        <DiscoverSlider />
      </ContextSliderProvider>
    </Section>
  );
};

export default Welcome;
