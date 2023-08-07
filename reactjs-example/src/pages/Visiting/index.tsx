import Section from '../Section';
import Card from '../../components/UI/Card';
import './styles.scss';

const TITLES = [
  'royal palace',
  'denon wing',
  'colonnade perrault',
  'greek hall',
  'mona lisa',
  'night palace',
];

const Visiting = (): JSX.Element => {
  return (
    <Section sectionId='visiting'>
      <h2 className='section-title section-visiting__title'>virtual tour</h2>
      <ul className='cards section-visiting__cards'>
        {TITLES.map((title, index) => (
          <Card key={title} title={title} index={index} />
        ))}
      </ul>
    </Section>
  );
};

export default Visiting;
