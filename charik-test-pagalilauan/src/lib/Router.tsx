import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home/Homepage";
import Layout from "./Layout";
import Software from "../pages/charick/software/Software";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },

      {
        path: "/software",
        element: <Software />,
      },
    ],
  },
]);
