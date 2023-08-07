import classnames from 'classnames';
import { memo } from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as ArrowIcon } from '../../../assets/arrow.svg';
import './styles.scss';

const MENU = ['visiting', 'explore', 'video', 'gallery', 'tickets', 'contacts'];

type MenuPropsType = {
  position: 'header' | 'footer';
  isBurger: boolean;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>> | null;
};

const Menu = memo(
  ({
    position,
    isBurger,
    isActive,
    setIsActive,
  }: MenuPropsType): JSX.Element => {
    const burger = isBurger ? 'menu-burger' : 'menu';

    const classMenu = classnames(
      burger,
      `navigation__${burger}`,
      `${position}__${burger}`,
      {
        active: isActive,
      }
    );

    const classItem = classnames(
      `${burger}-item`,
      `navigation__${burger}-item`,
      `${position}__${burger}-item`
    );

    const classLink = classnames(
      `${burger}-link`,
      `navigation__${burger}-link`,
      `${position}__${burger}-link`
    );

    return (
      <ul
        className={classMenu}
        onClick={(e) => e.preventDefault()}
        aria-hidden='true'
      >
        {MENU.map((link) => (
          <li key={link} className={classItem}>
            <Link
              activeClass='active'
              spy
              smooth
              hashSpy
              isDynamic
              className={classLink}
              to={link}
              onClick={() => setIsActive && setIsActive(false)}
            >
              {link}
              {isBurger && <ArrowIcon />}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
);

export default Menu;
