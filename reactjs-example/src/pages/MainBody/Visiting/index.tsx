import Section from '../Section';
import Card from './Card';
import TITLES from '@/data/titles';
import './styles.scss';

const Visiting = (): JSX.Element => {
  return (
    <Section sectionId='visiting' title='virtual tour'>
      <ul className='cards section-visiting__cards'>
        {TITLES.map((title, index) => {
          return <Card key={title} title={title} index={index} />;
        })}
      </ul>
    </Section>
  );
};

export default Visiting;
