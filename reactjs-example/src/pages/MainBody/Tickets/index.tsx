import Section from '../Section';
import TicketsForm from './TicketsForm';
import './styles.scss';

const Tickets = (): JSX.Element => {
  return (
    <Section sectionId='tickets' title='buy tickets'>
      <TicketsForm />
      <figure className='section-figure section-tickets__section-figure'>
        <img src='picture.jpg' alt='section figure' />
      </figure>
    </Section>
  );
};

export default Tickets;
