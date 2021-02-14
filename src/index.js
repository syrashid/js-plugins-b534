import { fetchMovies } from "./requests/movies";
import { initSearchBar } from "./components/init_searchbar";
import { initSortable } from "./plugins/init_sortable";
import { initMarkdown } from "./plugins/init_markdown";

fetchMovies("captain america"); // on 1st page load

initSearchBar();
initSortable();
initMarkdown();
