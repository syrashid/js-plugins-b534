import { fetchMovies } from './requests/movies';
import { initSearchBar } from './components/init_searchbar';

fetchMovies("captain america"); // on 1st page load

initSearchBar();
