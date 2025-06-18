import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register/Register";
import Signin from "../Pages/Register/Signin";
import Google from "../Pages/Shared/Google";
import Hotjobs from "../Pages/Home/Hotjobs";
import Jobdetails from "../Pages/Job-details/Jobdetails";
import Privateroute from "./Privateroute";
import JobaPPly from "../Pages/jobaPPly/JobaPPly";
import MyaPPlication from "../Pages/MyaPPlication/MyaPPlication";
import Addjobs from "../Pages/Addjobs/Addjobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <h2>Route not found</h2>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path: '/login',
            element:<Signin></Signin>
        },
        {
          path:'/jobs/:id',
          element:<Privateroute><Jobdetails></Jobdetails></Privateroute>,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path:'/jobaPPly/:id',
          element:<Privateroute><JobaPPly></JobaPPly></Privateroute>
        },
        {
          path:'/myaPPlication',
          element:<Privateroute><MyaPPlication></MyaPPlication></Privateroute>,
        },
        {
          path:'/google',
          element:<Google></Google>
        },
        {
          path:'/jobs',
          element:<Hotjobs></Hotjobs>
        },
        {
          path:'/addnewjob',
          element:<Privateroute><Addjobs></Addjobs></Privateroute>
        }
    ]
  },
]);
export default router;