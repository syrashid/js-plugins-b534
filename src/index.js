import { fetchMovies, updateResultsList } from './movies';

fetchMovies("harry potter"); // on 1st page load

const form = document.querySelector("#search-form");
form.addEventListener("submit", updateResultsList);
