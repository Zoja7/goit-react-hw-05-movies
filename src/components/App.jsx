import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
// import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
// import Cast from './Cast';
// import Reviews from './Reviews';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/movies" element={<Movies />} /> */}
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </div>
  );
};
