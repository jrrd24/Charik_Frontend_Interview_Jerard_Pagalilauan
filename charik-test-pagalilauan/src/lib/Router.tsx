import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home/Homepage";
import Layout from "./Layout";
import Software from "../pages/charick/software/Software";
import Pricing from "../pages/pricing/Pricing";
import About from "../pages/about/About";
import Insights from "../pages/resources/insights/Insights";
import EmailFinder from "../pages/charick/email_finder/EmailFinder";
import ErrorPage from "../components/error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "*", element: <ErrorPage /> },
      
      {
        path: "/",
        element: <Homepage />,
      },

      {
        path: "/software",
        element: <Software />,
      },
      { path: "/email-finder", element: <EmailFinder /> },

      {
        path: "/pricing",
        element: <Pricing />,
      },

      { path: "/about", element: <About /> },

      { path: "/insights", element: <Insights /> },
    ],
  },
]);
