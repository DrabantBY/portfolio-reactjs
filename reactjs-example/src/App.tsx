import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Template from './pages/Template';
// import Visiting from './Pages/Visiting';
import Explore from './pages/Explore';
import Gallery from './pages/Gallery';
// import VirtualTour from './Pages/VirtualTour';
// import Parallax from './Components/UI/Parallax';
// import Contacts from './Pages/Contacts';
// import Tickets from './Pages/Tickets';
// import Booking from './Pages/Booking';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        index: true,
        element: (
          <>
            {/* <Visiting /> */}
            <Explore />
            <Gallery />
            {/* <Tickets />
            <Parallax />
            <Contacts /> */}
          </>
        ),
      },
      // {
      //   path: '/tours/:name',
      //   element: <VirtualTour />,
      // },
    ],
  },
  // {
  //   path: '/booking',
  //   element: <Booking />,
  // },
]);

const App = () => <RouterProvider router={router} />;

export default App;
