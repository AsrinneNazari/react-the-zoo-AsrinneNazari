import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
    ],
    errorElement: <NotFound/>
  },
]);
