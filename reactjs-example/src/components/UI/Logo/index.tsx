import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '@svg/logo.svg';
import './styles.scss';

type LogoPropsType = {
  position: 'header' | 'footer';
  onActive: ((active: boolean) => void) | null;
};

const Logo = memo((props: LogoPropsType): JSX.Element => {
  return (
    <Link
      className={`logo navigation__logo ${props.position}__navigation-logo`}
      to='/'
      onClick={() => {
        if (props.onActive) {
          props.onActive(false);
        }
      }}
    >
      <LogoIcon />
      louvre
    </Link>
  );
});

export default Logo;
