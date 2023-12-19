import { useContext, memo } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '@svg/logo.svg';
import { ContextMenuAction } from '@/context/ContextMenuProvider';
import './styles.scss';

type LogoPropsType = {
  position: 'header' | 'footer';
};

const Logo = memo((props: LogoPropsType): JSX.Element => {
  const setState = useContext(ContextMenuAction);

  return (
    <Link
      className={`logo navigation__logo ${props.position}__navigation-logo`}
      to='/'
      onClick={() => {
        setState(false);
      }}
    >
      <LogoIcon />
      louvre
    </Link>
  );
});

export default Logo;
