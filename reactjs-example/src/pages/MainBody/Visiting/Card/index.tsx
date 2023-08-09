import { Link } from 'react-router-dom';
import transformTitleItems from '../../../../utils/transformTitleItems';
import './styles.scss';

type CardPropsType = {
  title: string;
  index: number;
};

const Card = ({ title, index }: CardPropsType): JSX.Element => {
  const transformedTitleItem = transformTitleItems(title);
  return (
    <li className='cards-item section-visiting__cards-item'>
      <Link
        className='cards-link section-visiting__cards-link'
        to={`/tours/${transformedTitleItem}`}
      >
        <figure>
          <img
            srcSet={`
                     visiting/visiting_280_${index + 1}.jpg 280w,
                     visiting/visiting_330_${index + 1}.jpg 330w,
                     visiting/visiting_440_${index + 1}.jpg 440w`}
            sizes='(max-width: 769px) 280px, (max-width: 1025px) 330px, 440px'
            src={`visiting/visiting_440_${index + 1}.jpg`}
            alt='tour'
          />
          <figcaption className='cards-title section-visiting__cards-title'>
            {title}
          </figcaption>
        </figure>
      </Link>
      <p className='cards-description section-visiting__cards-description'>
        360° virtual tour <span>google street panorama view</span>
      </p>
    </li>
  );
};

export default Card;
