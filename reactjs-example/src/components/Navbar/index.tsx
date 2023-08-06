import { useState, useMemo } from 'react';
import MenuBurgerContext from '../../context';
import Logo from '../UI/Logo';
import Menu from '../UI/Menu';
import MenuBurger from '../UI/MenuBurger';
import MenuButton from '../UI/MenuButton';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const providerValue = useMemo(() => ({ isActive, setIsActive }), [isActive]);

  return (
    <MenuBurgerContext.Provider value={providerValue}>
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
