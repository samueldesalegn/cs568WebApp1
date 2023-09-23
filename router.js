import { Outlet, createBrowserRouter } from "react-router-dom";
import ProductList from './components/ProductList';
import Home from "./components/Home";
import Layout from "./components/layout";
import ProductDetails from "./components/ProductDetails";
import EditProduct from './components/EditProduct';
import AddProduct from './components/AddNewProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "product",
        element: <Outlet />,
        children: [
          { path: "", element: <ProductList /> },
          { path: ":id", element: <ProductDetails /> },
          { path: ":id/edit", element: <EditProduct /> },
          { path: "add", element: <AddProduct /> },
        ],
      },
    ],
  },
]);

export default router;