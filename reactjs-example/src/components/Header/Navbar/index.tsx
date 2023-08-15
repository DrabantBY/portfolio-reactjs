import { useState, useEffect } from 'react';
import Overlay from '../../UI/Overlay';
import MenuButton from '../MenuButton';
import Logo from '../../UI/Logo';
import Menu from '../../UI/Menu';

const Navbar = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isActive]);

  return (
    <nav className='navigation header__navigation'>
      {isActive && (
        <Overlay>
          <Menu position='header' isBurger onActive={setIsActive} />
        </Overlay>
      )}

      <Logo position='header' onActive={setIsActive} />
      <Menu position='header' isBurger={false} onActive={null} />
      <MenuButton isActive={isActive} onActive={setIsActive} />
    </nav>
  );
};

export default Navbar;
