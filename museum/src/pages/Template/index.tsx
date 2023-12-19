import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Template = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer isMenu />
    </>
  );
};

export default Template;
