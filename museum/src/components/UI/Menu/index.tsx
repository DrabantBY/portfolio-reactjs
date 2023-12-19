import { useContext, memo } from 'react';
import classnames from 'classnames';
import { ReactComponent as ArrowIcon } from '@svg/arrow.svg';
import { ContextMenuAction } from '@/context/ContextMenuProvider';
import './styles.scss';

const MENU = ['visiting', 'explore', 'video', 'gallery', 'tickets', 'contacts'];

type MenuPropsType = {
  position: 'header' | 'footer';
  isBurger: boolean;
};

const Menu = memo((props: MenuPropsType): JSX.Element => {
  const burger = props.isBurger ? 'menu-burger' : 'menu';
  const setState = useContext(ContextMenuAction);

  const classMenu = classnames(
    burger,
    `navigation__${burger}`,
    `${props.position}__${burger}`
  );

  const classItem = classnames(
    `${burger}-item`,
    `navigation__${burger}-item`,
    `${props.position}__${burger}-item`
  );

  const classLink = classnames(
    `${burger}-link`,
    `navigation__${burger}-link`,
    `${props.position}__${burger}-link`
  );

  return (
    <ul className={classMenu}>
      {MENU.map((link) => {
        return (
          <li key={link} className={classItem}>
            <a
              href={`#${link}`}
              className={classLink}
              onClick={() => {
                setState(false);
              }}
            >
              {link}
              {props.isBurger && <ArrowIcon />}
            </a>
          </li>
        );
      })}
    </ul>
  );
});

export default Menu;
