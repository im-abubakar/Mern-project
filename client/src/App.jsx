
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard, HomeLayout, Landing, Login, Logout, Register } from "./pages";
import { ToastContainer, toast } from 'react-toastify';
import About from "./pages/about";
import Destinations from "./pages/destinations";
import Packages from "./pages/packages";
import Home from "./pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "destinations",
        element: <Destinations />,
      },
      {
        path: "packages",
        element: <Packages />,
      }
    ],
  },
]);

function App() {


  return (
    <>
        <RouterProvider router={router} />
        <ToastContainer position='top-center' />
    </>
  )
}

export default App
