import axios from "axios";
import ButtonHomepage from "./button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toastify from "toastify-js";

export default function ReusableForm({ url, submitData, nameProp, product }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  //used for populate data when editing
  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setStock(product.stock);
      setImageUrl(product.imageUrl);
      setCategoryId(product.categoryId);
    }
  }, [product]);

  async function fetchAllCategories() {
    try {
      const { data } = await axios.get(`${url}/category`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setCategories(data.fetchAll);
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.error,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#EF4C54",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();
    }
  }
  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <>
      <form className="w-96 mx-auto mt-2gi0">
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="floating_title"
            id="floating_title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer"
            placeholder=" "
            value={name}
          />
          <label
            htmlFor="floating_title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="floating_content"
            id="floating_content"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer"
            placeholder=" "
            value={description}
          />
          <label
            htmlFor="floating_content"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            name="floating_content"
            id="floating_content"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer"
            placeholder=" "
            value={price}
          />
          <label
            htmlFor="floating_content"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setStock(e.target.value)}
            type="number"
            name="floating_content"
            id="floating_content"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-500 peer"
            placeholder=" "
            value={stock}
          />
          <label
            htmlFor="floating_content"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Stock
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group-first:">
          <select
            className="select select-bordered"
            name="category"
            id="category-select"
            onChange={(e) => setCategoryId(e.target.value)}
            value={categoryId}
          >
            <option value="" disabled hidden>
              Select Category
            </option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <Link to="/">
            <button
              type="submit"
              className="btn btn-outline"
              onClick={(e) =>
                submitData(
                  e,
                  name,
                  description,
                  price,
                  stock,
                  imageUrl,
                  categoryId
                )
              }
            >
              {nameProp}
            </button>
          </Link>

          <ButtonHomepage />
        </div>
      </form>
    </>
  );
}
