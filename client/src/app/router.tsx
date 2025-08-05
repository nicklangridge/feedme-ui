import { useMemo } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { paths } from '@/config/paths';

import {
  default as Root,
  ErrorBoundary as RootErrorBoundary,
} from './routes/root';

import FeedsRoute from './routes/feeds';
import GenresRoute from './routes/genres';
import GenresExploreRoute from './routes/genres-explore';
import ReleasesRoute from './routes/releases';
import ReleaseRoute from './routes/release';
import AboutRoute from './routes/about';
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
          path: paths.feeds.path,
          element: <FeedsRoute />,
        },
        {
          path: paths.genres.path,
          element: <GenresRoute />,
        },
                {
          path: paths.genres_explore.path,
          element: <GenresExploreRoute />,
        },
        {
          path: paths.about.path,
          element: <AboutRoute />,
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
