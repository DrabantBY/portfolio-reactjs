import { createContext } from 'react';

type MenuBurgerType = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuBurgerContext = createContext<MenuBurgerType>({
  isActive: false,
  setIsActive: () => {
    return false;
  },
});

export default MenuBurgerContext;
