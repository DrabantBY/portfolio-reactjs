import { useContext } from 'react';
import classnames from 'classnames';
import {
  ContextMenuState,
  ContextMenuAction,
} from '@/context/ContextMenuProvider';
import './styles.scss';

const MenuButton = (): JSX.Element => {
  const state = useContext(ContextMenuState);
  const setState = useContext(ContextMenuAction);
  const classMenuBtn = classnames('menu-btn', { active: state });

  return (
    <button
      type='button'
      className={classMenuBtn}
      onClick={() => {
        setState(!state);
      }}
    >
      <span />
      {!state && <span />}
      <span />
    </button>
  );
};

export default MenuButton;
