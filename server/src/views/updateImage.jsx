import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ButtonHomepage from "../components/button";
import Toastify from "toastify-js";

export default function UpdateProductImage({ url }) {
  const { id } = useParams();
  const [findProductId, setFindProductId] = useState({});
  const [updateImg, setUpdateImg] = useState(null);

  async function fetchProductById() {
    try {
      const { data } = await axios.get(`${url}/product/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(data.findProduct);
      setFindProductId(data.findProduct);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateImage(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("imgUrl", updateImg);

      const { data } = await axios.patch(`${url}/product/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(data);
      Toastify({
        text: "Image updated successfully!",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#8BC34A",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();
      fetchProductById();
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

  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col mt-10">
          <div className="text-center lg:text-center">
            <h3 className="text-5xl font-bold">Edit Image</h3>
            <p className="py-6">Update the product image</p>
          </div>
          <div className="card bg-base-100 shadow-2xl">
            <form
              onSubmit={updateImage}
              encType="multipart/form-data"
              className="card-body grid grid-cols-2"
            >
              <div className="form-control">
                <label className="label flex justify-center">
                  <span className="label-text font-semibold">Image URL</span>
                </label>
                <input
                  type="file"
                  onChange={(e) => setUpdateImg(e.target.files[0])}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label flex justify-center">
                  <span className="label-text font-semibold">
                    Current Product Image
                  </span>
                </label>
                <img
                  src={findProductId?.imgUrl}
                  alt="Current Image"
                  className="max-w-sm rounded-lg shadow-md"
                />
              </div>
              <div className="form-control mt-6 grid grid-cols-2 gap-3">
                <button type="submit" className="btn btn-success">
                  Update Image
                </button>
                <ButtonHomepage />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
