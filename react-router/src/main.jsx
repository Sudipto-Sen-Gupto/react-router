import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './assets/component/About.jsx'
import Home from './assets/component/home/home.jsx'
import Laptops from './assets/component/Laptops/Laptops.jsx'
import { createBrowserRouter,RouterProvider } from "react-router";
import Root from './assets/component/root/Root.jsx'
const router=createBrowserRouter([
  // {
  //   path:'/',
  //   element:<h1>World access</h1>
  // },
  {
    path:'/',
    Component:Root,
    
    children:[{index:true ,Component:Home},
     
      {path:'about', Component:About},{
        path:'laptops' ,Component:Laptops
      }
    ]
  }
  
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
