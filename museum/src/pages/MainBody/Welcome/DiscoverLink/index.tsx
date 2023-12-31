import { Link } from 'react-router-dom';
import './styles.scss';

const DiscoverLink = (): JSX.Element => {
  return (
    <div className='discover section-welcome__discover'>
      <h2 className='discover-title section-welcome__discover-title'>
        welcome to&nbsp;the&nbsp;louvre
      </h2>
      <p className='discover-subtitle section-welcome__discover-subtitle'>
        from the castle to the museum
      </p>

      <Link
        className='discover-link section-welcome__discover-link'
        to='/tours/DiscoverTheLouvre'
      >
        Discover the Louvre
      </Link>
    </div>
  );
};

export default DiscoverLink;
