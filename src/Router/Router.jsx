import { createBrowserRouter } from "react-router";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import RootLayout from "../Layout/RootLayout";
import SignIn from "../pages/SignIn/SignIn";
const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children:[
        {index:true, element:<Home></Home>},
        {path:'/register',element:<Register></Register>},
        {path:'/signin',element:<SignIn></SignIn>}
      ]
    },
  ]);

export default router;