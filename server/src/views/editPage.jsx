import axios from "axios";
import ReusableForm from "../components/reausableForm";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Toastify from "toastify-js";

export default function Editpage({ url }) {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchProductById() {
    try {
      const { data } = await axios.get(`${url}/product/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setProduct(data.findProduct);
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
    fetchProductById();
  }, []);

  async function submitData(e, name, description, imageUrl, categoryId) {
    e.preventDefault();
    try {
      const dataProduct = {
        name,
        description,
        imageUrl,
        categoryId: +categoryId,
      };
      await axios.put(`${url}/product/${id}`, dataProduct, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Toastify({
        text: "Success edit article",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#00B29F",
          color: "#17202A",
          boxShadow: "0 5px 10px black",
          fontWeight: "bold",
        },
      }).showToast();

      navigate("/");
    } catch (error) {
      console.log();
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

  return (
    <>
      <ReusableForm
        url={url}
        submitData={submitData}
        product={product}
        nameProp={"Edit Product"}
      />
    </>
  );
}
