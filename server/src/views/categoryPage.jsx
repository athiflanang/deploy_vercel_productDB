import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toastify from "toastify-js";

export default function Categorypage({ url }) {
  const [category, setCategory] = useState([]);

  async function fetchAllCategories() {
    try {
      const { data } = await axios.get(`${url}/category`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setCategory(data.fetchAll);
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.message,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
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
  });
  return (
    <>
      <div className="overflow-x-auto bg-black text-white h-screen">
        <table className="table table-lg">
          <thead className="text-white">
            <tr>
              <th>No</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {category.map((c) => (
              <tr key={c.id}>
                <th>{c.id}</th>
                <th>{c.name}</th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-items-center justify-center mt-10">
          <Link to="/">
            <button className="btn btn-outline text-white">
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
