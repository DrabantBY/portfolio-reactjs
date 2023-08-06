import Section from '../Section';
import Image from '../../components/UI/Image';
import shuffleGalleryItems from '../../utils/shuffleGalleryItems';
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

const Gallery = () => {
  const galleryList = shuffleGalleryItems(GALLERY);

  return (
    <Section sectionId='gallery'>
      <h2 className='section-title section-gallery__title'>art gallery</h2>
      <div className='gallery-wrapper section-gallery__gallery-wrapper'>
        <ul className='gallery-list section-gallery__gallery-list'>
          {galleryList.map((item) => (
            <Image key={item} item={item} />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Gallery;
