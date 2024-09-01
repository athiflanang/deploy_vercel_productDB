import axios from "axios";
import Card from "../components/card";
import Pagination from "../components/pagination";
import { useEffect, useState } from "react";
import Searchbar from "../components/search";

export default function Homepage({ url }) {
  const [publicData, setPublicData] = useState([]);
  const [inputSearchProduct, setInputSearchProduct] = useState("");
  const [filterCategory, setFilterCategory] = useState(null);
  const [sorting, setSorting] = useState("id");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  async function fetchPublicData() {
    try {
      let sortBy;

      if (sorting === "id") {
        sortBy = "id";
      } else if (sorting === "name") {
        sortBy = "name";
      } else if (sorting === "price") {
        sortBy = "price";
      }

      const { data } = await axios.get(
        `${url}/pub?filter=${
          filterCategory || ""
        }&sort=${sortBy}&name=${inputSearchProduct}&page[size]=${10}&page[number]=${currentPage}`
      );
      console.log(data.data);
      setPublicData(data.data);

      setCurrentPage(data.page);
      setTotalPage(data.totalPage);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSorting(event) {
    setSorting(event.target.value);
  }

  function confirmSorting(event) {
    event.preventDefault();
    fetchPublicData();
    document.getElementById("sorting_modal").close();
  }

  function handleFilter(event) {
    setFilterCategory(Number(event.target.value));
  }

  function confirmFilter(event) {
    event.preventDefault();
    fetchPublicData();
    document.getElementById("filter_modal").close();
  }

  useEffect(() => {
    fetchPublicData();
  }, [inputSearchProduct, currentPage, filterCategory, sorting]);

  return (
    <>
      <div className="bg-black min-h-screen w-full">
        <div className="w-full h-full">
          <div className="flex justify-center py-5 text-5xl font-extrabold">
            Welcome to The{" "}
            <span className="relative inline-block transition-colors duration-300 hover:text-red-500">
              Locker
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "0%",
                  height: "100%",
                  background: "red",
                  zIndex: -1,
                  transition: "width 0.3s ease",
                }}
                className="hover:w-full"
              />
            </span>
          </div>
          <div className="flex text-xl font-semibold justify-center py-5 text-boneWhite">
            A Storefront for a certified operator
          </div>
        </div>
        <div className="flex flex-col justify-center align-center py-5 mb-5">
          <div className="flex space-x-4 justify-center items-center">
            <button
              className="btn btn-ghost btn-circle"
              onClick={() =>
                document.getElementById("search_modal").showModal()
              }
            >
              <dialog id="search_modal" className="modal">
                <div className="modal-box">
                  <Searchbar
                    inputData={setInputSearchProduct}
                    outputData={setPublicData}
                  />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </button>
            <button
              className="btn btn-ghost btn-circle"
              onClick={() =>
                document.getElementById("sorting_modal").showModal()
              }
            >
              <dialog id="sorting_modal" className="modal">
                <div className="modal-box">
                  <form onSubmit={confirmSorting}>
                    <select
                      name=""
                      id=""
                      className="select select-bordered"
                      onChange={handleSorting}
                      value={sorting}
                    >
                      <option value="id">id</option>
                      <option value="name">Name</option>
                      <option value="price">Price</option>
                    </select>
                  </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
              </div>
            </button>
            <button
              className="btn btn-ghost btn-circle"
              onClick={() =>
                document.getElementById("filter_modal").showModal()
              }
            >
              <dialog id="filter_modal" className="modal">
                <div className="modal-box">
                  <form onSubmit={confirmFilter}>
                    <select
                      name=""
                      id=""
                      className="select select-bordered"
                      onChange={handleFilter}
                      value={filterCategory || ""}
                    >
                      <option value="">All Categories</option>
                      <option value="1">Smith & Wesson</option>
                      <option value="2">Heckler & Koch GmbH</option>
                      <option value="3">Kalashnikov Concern</option>
                    </select>
                  </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </button>
          </div>
          <main className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-full px-4 justify-items-center align-center">
            {publicData.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
          </main>
        </div>
        <div className="flex justify-center">
          <Pagination
            totalPagination={totalPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}
