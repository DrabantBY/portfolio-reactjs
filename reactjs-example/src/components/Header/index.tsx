import Navbar from '../Navbar';

import './styles.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__container'>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
