import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../views/baseLayout";
import Homepage from "../views/homePage";
import DetailPage from "../views/detailPage";
import Editpage from "../views/editPage";
import UpdateProductImage from "../views/updateImage";
import Categorypage from "../views/categoryPage";
import Adduser from "../views/addUser";
import Addproduct from "../views/addProduct";
import Login from "../views/login";
import Toastify from "toastify-js";

const url = "https://server.athiflanang.site";
// const url = "http://localhost:3000";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login url={url} />,
    loader: () => {
      if (localStorage.access_token) {
        Toastify({
          text: "You have already logged in",
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
        return redirect("/");
      }
      return null;
    },
  },
  {
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.access_token) {
        Toastify({
          text: "Please sign in first",
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
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Homepage url={url} />,
      },
      {
        path: "/add",
        element: <Addproduct url={url} />,
      },
      {
        path: "/edit/:id",
        element: <Editpage url={url} />,
      },
      {
        path: "/updateImg/:id",
        element: <UpdateProductImage url={url} />,
      },
      {
        path: "/detailPage/:id",
        element: <DetailPage url={url} />,
      },
      {
        path: "/category",
        element: <Categorypage url={url} />,
      },
      {
        path: "/addUser",
        element: <Adduser url={url} />,
      },
    ],
  },
]);

export default router;
