import { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import MenuBurgerContext from '../../../context';
import Menu from '../../UI/Menu';

const MenuBurger = (): JSX.Element => {
  const { isActive, setIsActive } = useContext(MenuBurgerContext);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isActive]);

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
