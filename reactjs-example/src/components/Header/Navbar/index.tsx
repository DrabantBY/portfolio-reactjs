import { useContext } from 'react';
import { ContextMenuState } from '@/context/ContextMenuProvider';
import Logo from '@/components/UI/Logo';
import Menu from '@/components/UI/Menu';
import Overlay from '@/components/UI/Overlay';
import MenuButton from '../MenuButton';

const Navbar = (): JSX.Element => {
  const state = useContext(ContextMenuState);
  return (
    <nav className='navigation header__navigation'>
      {state && (
        <Overlay>
          <Menu position='header' isBurger />
        </Overlay>
      )}

      <Logo position='header' />
      <Menu position='header' isBurger={false} />
      <MenuButton />
    </nav>
  );
};

export default Navbar;
