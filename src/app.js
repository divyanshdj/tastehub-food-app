import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Offers from "./components/Offers";
import Help from "./components/Help";
import RestaurentMenu from "./components/RestaurentMenu";
import "../app.css";
import { Provider } from "react-redux";
import tastehubStore from "./utils/tastehubStore";
import CartPage from "./components/CartPage";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <>
      <Provider store={tastehubStore}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            {" "}
            <About />{" "}
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurents/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
