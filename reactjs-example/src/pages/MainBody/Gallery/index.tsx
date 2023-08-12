import Section from '../Section';
import Image from './Image';
import shuffleGalleryItems from '../../../utils/shuffleGalleryItems';
import './styles.scss';

const GALLERY = [
  'gallery/gallery1.jpg',
  'gallery/gallery2.jpg',
  'gallery/gallery3.jpg',
  'gallery/gallery4.jpg',
  'gallery/gallery5.jpg',
  'gallery/gallery6.jpg',
  'gallery/gallery7.jpg',
  'gallery/gallery8.jpg',
  'gallery/gallery9.jpg',
  'gallery/gallery10.jpg',
  'gallery/gallery11.jpg',
  'gallery/gallery12.jpg',
  'gallery/gallery13.jpg',
  'gallery/gallery14.jpg',
  'gallery/gallery15.jpg',
];

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
