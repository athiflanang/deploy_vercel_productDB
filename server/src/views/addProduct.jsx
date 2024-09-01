import ReusableForm from "../components/reausableForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";

export default function Addproduct({ url }) {
  const navigate = useNavigate();

  async function submitData(
    e,
    name,
    description,
    price,
    stock,
    imageUrl,
    categoryId
  ) {
    e.preventDefault();
    try {
      const dataBody = {
        name,
        description,
        price,
        stock,
        imageUrl,
        categoryId: +categoryId,
      };
      const response = await axios.post(`${url}/product`, dataBody, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      Toastify({
        text: "Success add new product",
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
  return (
    <>
      <div className="flex mt-5">
        <ReusableForm
          url={url}
          submitData={submitData}
          nameProp="Add Product"
        />
      </div>
    </>
  );
}
