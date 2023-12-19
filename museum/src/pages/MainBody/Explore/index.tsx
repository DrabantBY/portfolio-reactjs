import Section from '../Section';
import ExploreSlider from './ExploreSlider';
import './styles.scss';

const Explore = (): JSX.Element => {
  return (
    <Section sectionId='explore' title='picture explore'>
      <div className='section-text section-explore__section-text'>
        <p className='section-paragraph section-explore__section-paragraph'>
          Las Meninas is a 1656 painting by Diego Velázquez, the leading artist
          of the Spanish Golden Age.
        </p>
        <p className='section-paragraph section-explore__section-paragraph'>
          It was cleaned in 1984 to remove a{' '}
          <span>&quot;yellow veil&quot;</span> of dust that had gathered since
          the previous restoration in the 19th century.
        </p>
        <p className='section-paragraph section-explore__section-paragraph'>
          The cleaning provoked furious protests, not because the picture had
          been damaged in any way, but because it looked different.
        </p>
      </div>
      <ExploreSlider />
    </Section>
  );
};

export default Explore;
