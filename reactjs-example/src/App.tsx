import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Template from './pages/Template';
import Visiting from './pages/Visiting';
import Explore from './pages/Explore';
import Gallery from './pages/Gallery';

const Tour = lazy(() => import('./pages/Tour'));

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
            <Visiting />
            <Explore />
            <Gallery />
            {/* <Tickets />
            <Parallax />
            <Contacts /> */}
          </>
        ),
      },
      {
        path: '/tours/:name',
        element: (
          <Suspense fallback='Loading......'>
            <Tour />
          </Suspense>
        ),
      },
    ],
  },
  // {
  //   path: '/booking',
  //   element: <Booking />,
  // },
]);

const App = () => <RouterProvider router={router} />;

export default App;
