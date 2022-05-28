import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'f8a2c74c619ae47b0575baa7c8b50025';

export const getTrending = async () => {
  const response = await axios.get(`/trending/all/week?api_key=${API_KEY}`);
  return response.data.results;
};
export const searchMovies = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=true`
  );
  return response.data.results;
};
export const movieDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
export const movieCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};
export const movieReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
