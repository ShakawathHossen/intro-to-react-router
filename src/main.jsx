import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';

const router = createBrowserRouter([
  {
  path:'/',
  element:<Home/>,
  children:[
    {
      path:'about',
      element:<About/>
    },
    {
      path:'friends',
      element:<Friends/>,
      loader:()=>fetch(`https://jsonplaceholder.typicode.com/users`)
    },
    {
      path:'friend/:friendId',
      element:<FriendDetail/>,
    // loader:({params})=>console.log(params.friendId)
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
    },
    {
      path:'posts',
      element:<Posts></Posts>,
      loader:()=>fetch(`https://jsonplaceholder.typicode.com/posts`)
    },
    {
      path:'post/:postId',
      element:<PostDetails/>, 
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    },
    {
      path:'contact',
        element:<Contact/>
    }

  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
