import { updateResultsList } from "./movies";

const initSearchBar = () => {
  const form = document.querySelector("#search-form");
  form.addEventListener("submit", updateResultsList);
};

export { initSearchBar };
