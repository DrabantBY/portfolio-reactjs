import Visiting from './Visiting';
import Explore from './Explore';
import Gallery from './Gallery';
import Contacts from './Contacts';
import Tickets from './Tickets';
import Parallax from '../../components/Parallax';

const MainBody = (): JSX.Element => {
  return (
    <>
      <Visiting />
      <Explore />
      <Gallery />
      <Tickets />
      <Parallax />
      <Contacts />
    </>
  );
};

export default MainBody;
