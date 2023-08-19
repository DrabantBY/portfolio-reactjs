import { memo } from 'react';
import classnames from 'classnames';
import './styles.scss';

type MenuButtonPropsType = {
  isActive: boolean;
  onActive: (active: boolean) => void;
};

const MenuButton = memo((props: MenuButtonPropsType): JSX.Element => {
  const classMenuBtn = classnames('menu-btn', { active: props.isActive });

  return (
    <button
      type='button'
      className={classMenuBtn}
      onClick={() => {
        props.onActive(!props.isActive);
      }}
    >
      <span />
      {!props.isActive && <span />}
      <span />
    </button>
  );
});

export default MenuButton;
