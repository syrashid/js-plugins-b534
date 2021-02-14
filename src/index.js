import { fetchMovies } from "./requests/movies";
import { initSearchBar } from "./components/init_searchbar";
import { initSortable } from "./plugins/init_sortable";

fetchMovies("captain america"); // on 1st page load

initSearchBar();
initSortable();
