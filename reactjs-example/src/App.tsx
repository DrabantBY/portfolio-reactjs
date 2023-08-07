import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Template from './pages/Template';
import Visiting from './pages/Visiting';
import Explore from './pages/Explore';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';
// import Tickets from './pages/Tickets';
import Parallax from './components/Parallax';
import Spinner from './components/UI/Spinner';

const Tour = lazy(() => import('./pages/Tour'));

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
            {/* <Tickets /> */}
            <Parallax />
            <Contacts />
          </>
        ),
      },
    ],
  },
  {
    path: '/tours/:name',
    element: (
      <Suspense fallback={<Spinner />}>
        <Tour />
      </Suspense>
    ),
  },
]);

const App = (): JSX.Element => <RouterProvider router={router} />;

export default App;
