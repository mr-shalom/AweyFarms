import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OrderPage from "./pages/OrderPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import DashboardLayout from "./layouts/DashboardLayout";
import AdminDashboard from "./pages/admindashboards/AdminDashboard";
import CustomerDashboard from "./pages/userDashboard/CustomerDashboard";
import ProtectedRoute from "./routes/ProtectedRoutes";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/order", element: <OrderPage /> },
        { path: "/blog", element: <BlogPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/cart", element: <CartPage /> },

        {
          element: <ProtectedRoute />,
          children: [
            {
              path: "/dashboard",
              element: <DashboardLayout />,
              children: [
                { path: "admin", element: <AdminDashboard /> },
                { path: "customer", element: <CustomerDashboard /> },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      errorElement: <ErrorPage />,
      children: [{ path: "login", element: <LoginPage /> }],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
