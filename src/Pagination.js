import React from "react";

import "./App.css";

const Pagination = ({ totalPosts, productsPerPage, setCurrentPage }) => {
  let page = [];
  for (let i = 1; i <= Math.ceil(totalPosts / productsPerPage); i++) {
    page.push(i);
  }
  return (
    <div className="buttons-container-pagination" >
      {page.map((pag, index) => {
        return (
          <button className="buttons-paginations" key={index} onClick={() => setCurrentPage(pag)}>
            {pag}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
