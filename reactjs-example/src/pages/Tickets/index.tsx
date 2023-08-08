import Section from '../Section';
import TicketsForm from '../../components/TicketsForm';
import './styles.scss';

const Tickets = (): JSX.Element => {
  return (
    <Section sectionId='tickets'>
      <h2 className='section-title section-tickets__title'>buy tickets</h2>
      <TicketsForm />
    </Section>
  );
};

export default Tickets;
