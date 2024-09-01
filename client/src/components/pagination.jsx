import { useState } from "react";

export default function Pagination({ totalPagination, setCurrentPage }) {
  const [currentPage, setCurrentPageNow] = useState(1);
  let dataPagination = [];

  for (let i = 1; i <= totalPagination; i++) {
    dataPagination.push(i);
  }
  return (
    <>
      <div className="join">
        {dataPagination.map((el) => {
          return (
            <button
              className={`join-item btn btn-outline ${
                el === currentPage ? "btn-active" : ""
              }`}
              type="radio"
              key={el}
              onClick={() => {
                setCurrentPageNow(el);
                setCurrentPage(el);
              }}
            >
              {el}
            </button>
          );
        })}
      </div>
    </>
  );
}
