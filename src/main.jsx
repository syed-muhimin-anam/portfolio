import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Details from './Home/Details';
import HomePage from './HomePage';
import Details2 from './Home/Details2';
import Details3 from './Home/Details3';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/details',
        element: <Details></Details>
      },
      {
        path:'/details2',
        element: <Details2></Details2>
      },
      {
        path:'/details3',
        element: <Details3></Details3>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
