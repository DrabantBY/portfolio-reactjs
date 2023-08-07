import { createPortal } from 'react-dom';
import { useContext } from 'react';
import MenuBurgerContext from '../../../context';
import './styles.scss';

const Overlay = (): JSX.Element | null => {
  const { isActive } = useContext(MenuBurgerContext);

  if (!isActive) {
    return null;
  }
  return createPortal(<div className='overlay' />, document.body);
};

export default Overlay;
