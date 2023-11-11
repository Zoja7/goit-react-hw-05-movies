import Layout from './Layout/Layout';
import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
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

export default App;
