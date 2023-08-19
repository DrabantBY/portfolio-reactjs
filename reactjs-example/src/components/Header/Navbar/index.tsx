import { useState } from 'react';
import Logo from '@/components/UI/Logo';
import Menu from '@/components/UI/Menu';
import Overlay from '@/components/UI/Overlay';
import MenuButton from '../MenuButton';

const Navbar = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

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
