import { lazy } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"dashboard"} />,
  },
  {
    path: "dashboard",
    Component: lazy(() => import("@/features/dashboard/pages/dashboard-page")),
    children: [
      {
        index: true,
        element: <Navigate to={"default"} />,
      },
      {
        path: "default",
        Component: lazy(() => import("@/features/home/pages/home-page")),
      },
      {
        path: "orders",
        Component: lazy(() => import("@/features/orders/pages/orders-page")),
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
