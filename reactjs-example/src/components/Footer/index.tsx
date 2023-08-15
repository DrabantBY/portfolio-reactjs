import Logo from '../UI/Logo';
import Menu from '../UI/Menu';
import SocialNet from './SocialNet';
import { ReactComponent as RolScIcon } from '../../assets/svg/footer/rolsc.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/footer/github.svg';
import './styles.scss';

type FooterPropsType = {
  isMenu: boolean;
};

const Footer = (props: FooterPropsType): JSX.Element => {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <div className='footer__body'>
          <Logo position='footer' onActive={null} />
          {props.isMenu && (
            <Menu position='footer' isBurger={false} onActive={null} />
          )}
          <SocialNet />
        </div>
      </div>

      <hr />

      <div className='container footer__container'>
        <ul className='author footer__author'>
          <li className=' copyright footer__copyright'>©&nbsp;2023</li>
          <li className='rss footer__rss'>
            <a
              href='https://rollingscopes.com/'
              className='rss-link footer__rss-link'
              rel='noreferrer'
              target='_blank'
            >
              <RolScIcon />
            </a>
          </li>

          <li className='github footer__github'>
            <a
              href='https://github.com/DrabantBY'
              className='github-link footer__github-link'
              rel='noreferrer'
              target='_blank'
            >
              <GithubIcon />
              DrabantBY
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
