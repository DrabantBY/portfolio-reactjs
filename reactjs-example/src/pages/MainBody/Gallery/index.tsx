import Section from '../Section';
import Image from './Image';
import shuffleGalleryItems from '../../../utils/shuffleGalleryItems';
import GALLERY from '../../../data/gallery';
import './styles.scss';

const Gallery = (): JSX.Element => {
  const galleryList = shuffleGalleryItems(GALLERY);

  return (
    <Section sectionId='gallery' title='art gallery'>
      <ul className='gallery-list section-gallery__gallery-list'>
        {galleryList.map((item) => {
          return <Image key={item} item={item} />;
        })}
      </ul>
    </Section>
  );
};

export default Gallery;
