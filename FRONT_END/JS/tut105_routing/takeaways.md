Main react router dom use garnu ko karan chai to prevent page from reloading ho...
for that we need to install it ...
    npm i react-router-dom
ani tespaxi 
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
in app.jsx
const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/about",
      element:<About/>
    },
  ])


  ..ani return bhitra 
      <RouterProvider router={router}/>
      yo bhyena bhnye chai tyo link ma click gareni navigate hunna
    aba hamle path lai a hrf="/home" yesari anchor garim bhni page will reload...to prevent this we will use Link..
    <Link to="/login"><li>Login</li></Link> 
    yesari garda chai reload na bhai kana..tyo path ko content aauxa
