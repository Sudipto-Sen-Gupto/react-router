import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './assets/component/About.jsx'
import Home from './assets/component/home/home.jsx'
import Laptops from './assets/component/Laptops/Laptops.jsx'
import Data from './assets/component/user/Data.jsx'
import { createBrowserRouter,RouterProvider } from "react-router";
import Root from './assets/component/root/Root.jsx'
import { Suspense } from 'react'
import User2 from './assets/component/user2/User2.jsx'
import Feature from './assets/component/feature/Feature.jsx'
const data2=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
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
      },{
        path:'user', loader:()=>fetch("https://jsonplaceholder.typicode.com/users"), Component:Data
      },
      {
        path:'user2',element:<Suspense fallback={<h1>data load</h1>}>
          <User2 data2={data2}></User2>
           </Suspense>
      },
      {
        path:'user2/:userid',
        loader:({params})=>fetch("https://jsonplaceholder.typicode.com/users") ,
        Component:Feature
      },

    ]
  }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
