import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";

export const router = createBrowserRouter ([
    {
        path: "/",
        element:<Home/>
    },
    {
        path:"/animals",
        element:<Animals/>
    }
])