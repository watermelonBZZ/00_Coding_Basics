import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

//这个写法和之前worldwise不同
// createBrowserRouter([{path1,element1},{path2,element2}])
const router = createBrowserRouter([
  {
    //默认路径
    element: <AppLayout />,

    //Error components,如果有错误会渲染这个component
    errorElement: <Error />,
    children: [
      // 默认路径下需要的path和对应component
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,

        //Error components,如果有错误会渲染<Error />这个component，而不是<Menu />
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
