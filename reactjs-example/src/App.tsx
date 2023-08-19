import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Template from './pages/Template';
import MainBody from './pages/MainBody';

import Spinner from './components/UI/Spinner';

const Tour = lazy(() => {
  return import('./pages/Tour');
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        index: true,
        element: <MainBody />,
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

const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
