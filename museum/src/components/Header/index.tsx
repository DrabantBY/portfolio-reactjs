import Navbar from './Navbar';
import { ContextMenuProvider } from '@/context/ContextMenuProvider';
import './styles.scss';

const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <div className='container header__container'>
        <ContextMenuProvider>
          <Navbar />
        </ContextMenuProvider>
      </div>
    </header>
  );
};

export default Header;
