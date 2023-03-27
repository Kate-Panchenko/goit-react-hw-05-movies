import axios from 'axios';

const API_KEY = '483f9783c17e3d87f722dee16e956262';
const BASE_URL = 'https://api.themoviedb.org/3/';

export function fetchTrending() {
  return axios
    .get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=1&language=en-US`
    )
    .then(response => response.data.results);
}

export function fetchMoviesByKeyWord(query) {
  return axios
    .get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&page=1&query=${query}&language=en-US`
    )
    .then(response => response.data.results);
}

export function fetchMoviesById(id) {
  return axios
    .get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
}

export function fetchCast(id) {
  return axios
    .get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data.cast);
}

export function fetchReviews(id) {
  return axios
    .get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data.results);
}
