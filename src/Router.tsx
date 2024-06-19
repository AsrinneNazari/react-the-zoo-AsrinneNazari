import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Animal } from "./pages/Animal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "/animal/:animalid",
        element: <Animal />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
