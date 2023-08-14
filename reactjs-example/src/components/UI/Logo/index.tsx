import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuBurgerContext from '../../../context';
import { ReactComponent as LogoIcon } from '../../../assets/svg/logo.svg';
import './styles.scss';

type LogoPropsType = {
  position: 'header' | 'footer';
};

const Logo = (props: LogoPropsType): JSX.Element => {
  const { setIsActive } = useContext(MenuBurgerContext);

  return (
    <Link
      className={`logo navigation__logo ${props.position}__navigation-logo`}
      to='/'
      onClick={() => {
        setIsActive(false);
      }}
    >
      <LogoIcon />
      louvre
    </Link>
  );
};

export default Logo;
