import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const AppRouter = () => {
  return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default AppRouter;
