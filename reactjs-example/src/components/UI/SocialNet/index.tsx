import { ReactComponent as YoutubeIcon } from '../../../assets/youtube.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/twitter.svg';
import { ReactComponent as PinterestIcon } from '../../../assets/pinterest.svg';
import './styles.scss';

const SocialNet = (): JSX.Element => {
  return (
    <ul className='social-list footer__social-list'>
      <li className='social-item footer__social-item'>
        <a
          href='https://www.youtube.com/@MuseeLouvre'
          className='social-link footer__social-link'
          rel='noreferrer'
          target='_blank'
        >
          <YoutubeIcon />
        </a>
      </li>
      <li className='social-item footer__social-item'>
        <a
          href='https://www.instagram.com/museelouvre/'
          className='social-link footer__social-link'
          rel='noreferrer'
          target='_blank'
        >
          <InstagramIcon />
        </a>
      </li>
      <li className='social-item footer__social-item'>
        <a
          href='https://www.facebook.com/museedulouvre/'
          className='social-link footer__social-link'
          rel='noreferrer'
          target='_blank'
        >
          <FacebookIcon />
        </a>
      </li>
      <li className='social-item footer__social-item'>
        <a
          href='https://twitter.com/MuseeLouvre'
          className='social-link footer__social-link'
          rel='noreferrer'
          target='_blank'
        >
          <TwitterIcon />
        </a>
      </li>
      <li className='social-item footer__social-item'>
        <a
          href='https://www.pinterest.com/adriennelods/paris-louvre/'
          className='social-link footer__social-link'
          rel='noreferrer'
          target='_blank'
        >
          <PinterestIcon />
        </a>
      </li>
    </ul>
  );
};

export default SocialNet;
