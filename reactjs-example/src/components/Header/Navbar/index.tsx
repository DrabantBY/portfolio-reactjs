import { useState, useMemo } from 'react';
import MenuBurgerContext from '../../../context';
import MenuBurger from '../MenuBurger';
import MenuButton from '../MenuButton';
import Overlay from '../Overlay';
import Logo from '../../UI/Logo';
import Menu from '../../UI/Menu';

const Navbar = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  const providerValue = useMemo(() => {
    return { isActive, setIsActive };
  }, [isActive]);

  return (
    <MenuBurgerContext.Provider value={providerValue}>
      <Overlay />
      <nav className='navigation header__navigation'>
        <Logo position='header' />
        <Menu
          position='header'
          isBurger={false}
          isActive={false}
          setIsActive={null}
        />
        <MenuBurger />
        <MenuButton />
      </nav>
    </MenuBurgerContext.Provider>
  );
};

export default Navbar;
