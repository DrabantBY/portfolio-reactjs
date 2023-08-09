import Section from '../Section';
import Location from './Location';
import './styles.scss';

const Contacts = (): JSX.Element => {
  return (
    <Section sectionId='contacts'>
      <h2 className='section-title section-contacts__title'>contacts</h2>
      <div className='section-contacts__body'>
        <address className='contacts-address section-contacts__contacts-address'>
          <h3 className='section-subtitle section-contacts__subtitle'>
            Palais Royal <br /> Musee du Louvre
          </h3>
          <ul className='contacts-list section-contacts__contacts-list'>
            <li className='contacts-item section-contacts__contacts-item'>
              address: 75001 Paris, France
            </li>
            <li className='contacts-item section-contacts__contacts-item'>
              phone: <a href='tel:+33140205050'>+33 (0) 140 205 050</a>
            </li>
            <li className='contacts-item section-contacts__contacts-item'>
              mail: <a href='mailto:info@louvre.fr'>info@louvre.fr</a>
            </li>
          </ul>
        </address>
        <Location />
      </div>
    </Section>
  );
};

export default Contacts;
