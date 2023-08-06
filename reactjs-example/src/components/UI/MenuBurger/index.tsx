import { useContext } from 'react';
import { createPortal } from 'react-dom';
import MenuBurgerContext from '../../../context';
import Menu from '../Menu';

const MenuBurger = () => {
  const { isActive, setIsActive } = useContext(MenuBurgerContext);
  return createPortal(
    <Menu
      position='header'
      isBurger
      isActive={isActive}
      setIsActive={setIsActive}
    />,
    document.body
  );
};

export default MenuBurger;
