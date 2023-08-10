import Section from '../Section';
import TicketsForm from './TicketsForm';
import './styles.scss';

const Tickets = (): JSX.Element => {
  return (
    <Section sectionId='tickets'>
      <h2 className='section-title section-tickets__title'>buy tickets</h2>
      <div className='section-tickets__body'>
        <figure className='section-tickets__figure'>
          <img src='picture.jpg' alt='section figure' />
        </figure>
        <TicketsForm />
      </div>
    </Section>
  );
};

export default Tickets;
