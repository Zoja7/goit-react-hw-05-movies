import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '769572b7424cdd494dc478209682dba1';

export const getTrending = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );

  return data.results;
};

export const getMovieInfo = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMoviesByQuery = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=true`
  );
  return data.results;
};

export const getCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
};

export const getReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data.results;
};
