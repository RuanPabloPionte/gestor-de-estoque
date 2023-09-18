import { createBrowserRouter } from "react-router-dom";
import DefaultLayot from "./pages/DefaultLayout";
import Home from "./pages/Home";
import DefautItem from "./pages/DefaultItem";
import NewItem from "./pages/NewItem";
import Items from "./pages/Items";
import Item from "./pages/Item";
import UpdateItem from "./pages/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Itens",
        element: <DefautItem />,
        children: [
          {
            index: true,
            element: <Items />,
          },
          {
            path: "/Itens/:ProductId",
            element: <Item />,
          },
          {
            path: "/Itens/NewItem",
            element: <NewItem />,
          },
          {
            path: "/Itens/UpdateItem/:ProductId",
            element: <UpdateItem />,
          },
        ],
      },
    ],
  },
]);

export default router;
