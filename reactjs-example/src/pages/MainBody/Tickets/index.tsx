import Section from '../Section';
import TicketsForm from './TicketsForm';
import './styles.scss';

const Tickets = (): JSX.Element => {
  return (
    <Section sectionId='tickets'>
      <h2 className='section-title section-tickets__section-title'>
        buy tickets
      </h2>
      <div className='section-body section-tickets__section-body'>
        <TicketsForm />
        <figure className='section-figure section-tickets__section-figure'>
          <img src='picture.jpg' alt='section figure' />
        </figure>
      </div>
    </Section>
  );
};

export default Tickets;
