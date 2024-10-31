import { Navigate } from "react-router-dom";
import Layout from "../components/layout";
import HomePage from "../pages/HomePage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "products/:id",
        lazy: () => import("../pages/ProductDetailsPage"),
      },
      {
        path: "cart",
        lazy: () => import("../pages/CartSummaryPage"),
      },
      {
        path: "404",
        lazy: () => import("../pages/NotFoundPage"),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/404" replace={true} />,
  },
];

export default routes;
