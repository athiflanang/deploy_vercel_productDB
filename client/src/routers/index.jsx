import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../views/baseLayout";
import Homepage from "../views/homePage";
import Detailpage from "../views/detailPage";

const url = "https://server.athiflanang.site";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    loader: () => {
      return null;
    },
    children: [
      {
        path: "/",
        element: <Homepage url={url} />,
      },
      {
        path: "/detail/:id",
        element: <Detailpage url={url} />,
      },
    ],
  },
]);

export default router;
