import { Sortable } from "sortablejs";

const initSortable = () => {
  console.log("FUNCTION CALLED");
  const list = document.querySelector("#results");
  Sortable.create(list);
};

export { initSortable };
