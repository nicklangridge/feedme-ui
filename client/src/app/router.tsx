import { useMemo } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { paths } from '@/config/paths';

import {
  default as Root,
  ErrorBoundary as RootErrorBoundary,
} from './routes/root';

import ReleasesRoute from './routes/releases';
import ReleaseRoute from './routes/release';
import NotFoundRoute from './routes/not-found';

const createAppRouter = () =>
  createBrowserRouter([
    { 
      path: '/', 
      element: <Root />,
      ErrorBoundary: RootErrorBoundary,
      children: [
        {
          path: paths.home.path,
          element: <ReleasesRoute />,
        },
        {
          path: paths.genre.path,
          element: <ReleasesRoute />,
        },
        {
          path: paths.feed.path,
          element: <ReleasesRoute />,
        },
        {
          path: paths.release.path,
          element: <ReleaseRoute />,
        },        
        {
          path: '*',
          element: <NotFoundRoute />,
        },
      ]
    },
  ]);

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);
  return <RouterProvider router={router} />;
};
