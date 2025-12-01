import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Bcrypt_Register";
import Login from "./Bcrypt_Login";
import Bcrypt_Home from "./Bcrypt_Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/Bcrypt_Home",
    element: <Bcrypt_Home />
  },
]);

function Bcrypt_Routing() {
  return (
    <RouterProvider router={routes} />
  );
}

export default Bcrypt_Routing;