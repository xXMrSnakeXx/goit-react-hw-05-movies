import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBar from './components/AppBar/AppBar';
import Loader from './components/Loader/Loader';
import s from './App.module.css';

const HomePage = lazy(() => import('./page/HomePage'));
const MoviePage = lazy(() => import('./page/MoviePage'));
const MovieDetailsPage = lazy(() => import('./page/MovieDetailsPage'));

export const App = () => {
  return (
    <div className={s.App}>
      <ToastContainer autoClose={3000} />
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
