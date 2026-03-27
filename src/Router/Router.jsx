import { createBrowserRouter } from "react-router";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import RootLayout from "../Layout/RootLayout";
const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children:[
        {index:true, element:<Home></Home>},
        {path:'/register',element:<Register></Register>}
      ]
    },
  ]);

export default router;