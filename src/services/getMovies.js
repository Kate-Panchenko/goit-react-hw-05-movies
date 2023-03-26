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
