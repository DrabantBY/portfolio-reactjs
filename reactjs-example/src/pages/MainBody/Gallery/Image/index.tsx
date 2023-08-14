import classnames from 'classnames';
import useIntersection from '../../../../hooks/useIntersection';

import './styles.scss';

type ImagePropsType = {
  item: string;
};

const Image = (props: ImagePropsType): JSX.Element => {
  const { imageRef, isIntersection } = useIntersection();

  const classItem = classnames('gallery-item', 'section-gallery__gallery-item');
  const classImg = classnames(
    'gallery-image',
    'section-gallery__gallery-image',
    { active: isIntersection }
  );

  return (
    <li className={classItem}>
      <img
        ref={imageRef}
        className={classImg}
        src={props.item}
        alt='gallery item'
      />
    </li>
  );
};

export default Image;
