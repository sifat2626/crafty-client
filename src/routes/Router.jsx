import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../routes/PrivateRoute";
import CraftDetails from "../pages/CraftDetails/CraftDetails";
import AllCrafts from "../pages/AllCrafts/AllCrafts";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import MyArtList from "../pages/MyArtList/MyArtList";
import UpdateCraftItem from "../pages/UpdateCraftItem/UpdateCraftItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <CraftDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://crafty-red.vercel.app/api/v1/crafts/${params.id}`),
      },
      {
        path: "/all-crafts",
        element: (
          <PrivateRoute>
            <AllCrafts />
          </PrivateRoute>
        ),
        loader: () => fetch(`https://crafty-red.vercel.app/api/v1/crafts`),
      },
      {
        path: "/crafts/create",
        element: (
          <PrivateRoute>
            <AddCraftItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/crafts/update/:id",
        element: (
          <PrivateRoute>
            <UpdateCraftItem />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://crafty-red.vercel.app/api/v1/crafts/${params.id}`),
      },
      {
        path: "/crafts/user",
        element: (
          <PrivateRoute>
            <MyArtList />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
