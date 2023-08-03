import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import ErrorPage from './Pages/ErrorPage';
import FilmPage from './Pages/FilmPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import NewsPage from './Pages/NewsPage';
import SignupPage from './Pages/SignupPage';
import SingleMoviePage from './Pages/SingleMovie';
import MovieCommentBox from './Pages/SingleMovie/components/MovieCommentBox';
import TvShowPage from './Pages/TvShowPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'film', element: <FilmPage /> },
      { path: 'tv-show', element: <TvShowPage /> },
      { path: 'news', element: <NewsPage /> },
      {
        path: 'single-movie/:id',
        element: <SingleMoviePage />,
        children: [{ path: 'comment', element: <MovieCommentBox /> }],
      },
    ],
  },
]);

export default router;
