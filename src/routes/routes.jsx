import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import AuthPage from "../pages/AuthPage";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
    index: true,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*", // Matches all undefined routes
    element: <NotFound />, // Render a 404 Not Found component
  },
]);

export default router;
