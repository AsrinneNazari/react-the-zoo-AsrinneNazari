import { RouterProvider } from "react-router-dom";
import { router } from "./../src/Router";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
