import { createBrowserRouter } from "react-router";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import RootLayout from "../Layout/RootLayout";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import Myapplication from "../pages/MyApplication/Myapplication";
const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children:[
        {index:true, element:<Home></Home>},
        {path:'/register',element:<Register></Register>},
        {path:'/signin',element:<SignIn></SignIn>},
        {
          path:'/jobs/:id',
          element:<JobDetails></JobDetails>,
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path:'/jobApply/:id',
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
          
        },
        {
          path:'/myApplication',
          element:<PrivateRoute><Myapplication></Myapplication></PrivateRoute>
          
        }
      ]
    },
  ]);

export default router;