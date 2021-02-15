import { fetchMovies } from "./requests/movies";
import { initSearchBar } from "./components/init_searchbar";
import { initSortable } from "./plugins/init_sortable";
import { initMarkdown } from "./plugins/init_markdown";
import { initSelect2 } from "./plugins/init_select2";

fetchMovies("captain america"); // on 1st page load

initSearchBar();
initSortable();
initMarkdown();
initSelect2();
