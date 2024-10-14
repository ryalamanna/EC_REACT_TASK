import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  Link,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import { useProducts } from "./context/products.context.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Nav = () => {
  const { cart } = useProducts();
  return (
    <>
      <nav className="flex sticky top-0 bg-white z-10 border-b">
        <NavLink
          className={({ isActive, isPending, isTransitioning }) =>
            [isActive ? "font-bold m-5 text-[#fe7d53]" : "font-medium m-5"].join(" ")
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive, isPending, isTransitioning }) =>
            [isActive ? "font-bold m-5  text-[#fe7d53]" : "font-medium m-5"].join(" ")
          }
          to="/cart"
        >
          Cart ({cart.length})
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default App;
