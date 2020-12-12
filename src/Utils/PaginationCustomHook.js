import { useEffect, useState } from "react";

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);
  const maxProdQuant = data.length;
  const shownProducts = currentPage * itemsPerPage;


function currentItems() {
  const begin = (currentPage - 1) * itemsPerPage;
  const end = begin + itemsPerPage;
  return data.slice(begin, end);
 }

 function nextPage() {
   setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
 }

 function prevPage() {
   setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
 }

 useEffect(()=> {setCurrentPage(1)},[data]); //esto hace que al cambiar de galeria me lleva a la priemra página

 return { nextPage, prevPage, currentItems, currentPage, maxPage, maxProdQuant, shownProducts };
}

export default usePagination;