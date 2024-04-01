import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ROUTES CREATION 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />  ,
  }
]);


function App() {

  return <RouterProvider router={router} />;

}

export default App;
