import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBar from './AppBar/AppBar';
import Loader from './Loader/Loader';
import s from './App.module.css';

const HomePage = lazy(() => import('../Pages/HomePage'));
const MoviePage = lazy(() => import('../Pages/MoviePage'));
const MovieDetailsPage = lazy(() => import('../Pages/MovieDetailsPage'));
const CastPage = lazy(() => import('../Pages/CastPage'));
const ReviewsPage = lazy(() => import('../Pages/ReviewsPage'));

export const App = () => {
  return (
    <div className={s.App}>
      <ToastContainer autoClose={3000} />
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
