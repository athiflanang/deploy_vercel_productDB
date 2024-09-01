import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toastify from "toastify-js";

export default function Homepage({ url }) {
  const [findProduct, setFindProduct] = useState([]);

  async function deleteProduct(id) {
    try {
      const response = await axios.delete(`${url}/product/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(response);

      setFindProduct(findProduct.filter((product) => product.id !== id));

      Toastify({
        text: `id ${id} success to delete`,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#00B29F",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();
    } catch (error) {
      console.log(error);
      Toastify({
        text: error.response.data.message,
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

  async function fetchAllProduct() {
    try {
      const { data } = await axios.get(`${url}/pub?sort=id`);
      console.log(data);

      setFindProduct(data.data);
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
    fetchAllProduct();
  }, []);

  return (
    <>
      <div className="overflow-x-auto bg-black text-white">
        <table className="table table-xs">
          <thead className="text-white">
            <tr>
              <th>No</th>
              <th>Product</th>
              <th>Description</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {findProduct.map((product) => (
              <tr key={product.id}>
                <th>{product.id}</th>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.Category.name}</td>
                <td>
                  <div>
                    <Link
                      to={`/updateImg/${product.id}`}
                      className="btn btn-ghost btn-xs"
                    >
                      <button className="btn btn-ghost btn-xs text-green-500">
                        update image
                      </button>
                    </Link>
                    <Link
                      to={`/edit/${product.id}`}
                      className="btn btn-ghost btn-xs"
                    >
                      <button className="btn btn-ghost btn-xs text-blue-500">
                        edit
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="btn btn-ghost btn-xs text-red-500"
                    >
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
