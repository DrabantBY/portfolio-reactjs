import Visiting from './Visiting';
import Explore from './Explore';
import Video from './Video';
import Gallery from './Gallery';
import Contacts from './Contacts';
import Tickets from './Tickets';
import Parallax from '../../components/Parallax';

const MainBody = (): JSX.Element => {
  return (
    <>
      <Visiting />
      <Explore />
      <Video />
      <Gallery />
      <Tickets />
      <Parallax />
      <Contacts />
    </>
  );
};

export default MainBody;
