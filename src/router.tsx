import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import ErrorPage from "./pages/errorPage/ErrorPage";
import HomePage from "./pages/homePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  //   {
  //     path: "*",
  //     element: <ErrorPage />,
  //   },
]);
