import { createBrowserRouter } from "react-router-dom";
import { RootLayout, AuthLayout } from "./components";
import { ProfilePage } from "./pages/client/Profile";
import {
  ClientsPage,
  DashboardPage,
  FilesPage,
  LoginPage,
  MerchantPage,
  ProductsPage,
  RegisterPage,
  SalesPage,
} from "./pages";
import ErrorPage from "./pages/error-page";
import { CashPage } from "./pages/client/Cash";
import { CashBalancePage } from "./pages/client/CashBalance";
import { DiscountsPage } from "./pages/client/Discounts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/clients",
        element: <ClientsPage />,
      },
      {
        path: "/files",
        element: <FilesPage />,
      },
      {
        path: "/merchant",
        element: <MerchantPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/sales",
        element: <SalesPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/cash",
        element: <CashPage />,
      },
      {
        path: "/cash-balance",
        element: <CashBalancePage />,
      },
      {
        path: "/discounts",
        element: <DiscountsPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/register",
        element: <RegisterPage />,
      },
      {},
    ],
  },
]);
