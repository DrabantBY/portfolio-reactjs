import Parallax from '@/components/Parallax';
import Welcome from './Welcome';
import Visiting from './Visiting';
import Explore from './Explore';
import Video from './Video';
import Gallery from './Gallery';
import Contacts from './Contacts';
import Tickets from './Tickets';

const MainBody = (): JSX.Element => {
  return (
    <>
      <Welcome />
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
