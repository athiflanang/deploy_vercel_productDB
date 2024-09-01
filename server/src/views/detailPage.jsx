import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DetailPage({ url }) {
  const { id } = useParams();
  const [findProductId, setFindProductId] = useState({});

  async function populateDetail() {
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

  useEffect(() => {
    populateDetail();
  }, []);

  return (
    <>
      <div className="bg-slate-300 h-screen w-full flex justify-center items-center">
        <div className="flex bg-white shadow-xl rounded-2xl max-w-7xl w-full h-3/4">
          <div className="flex-1 flex justify-center items-center p-10">
            <img
              src={findProductId?.imgUrl}
              alt="business person"
              className="flex-1 flex justify-center items-center p-10 rounded-xl"
            />
          </div>

          <div className="flex-1 p-10 flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-1">Name</h1>
            <p className="text-lg mb-8">{findProductId?.name}</p>
            <h3 className="text-3xl font-bold mb-1">Description</h3>
            <p className="text-lg mb-8">{findProductId?.description}</p>
            <h3 className="text-3xl font-bold mb-1">Category</h3>
            <p className="text-lg mb-8">{findProductId?.Category?.name}</p>
            <div className="flex gap-4">
              <button className="btn btn-primary">Update Image</button>
              <button className="btn btn-outline">Edit Data</button>
            </div>
            <div className="flex mt-10 gap-8">
              <div>
                <h3 className="text-4xl font-semibold">
                  {findProductId?.price}
                </h3>
                <p className="text-sm">Price</p>
              </div>
              <div>
                <h3 className="text-4xl font-semibold">
                  {findProductId?.stock}
                </h3>
                <p className="text-sm">Stock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
