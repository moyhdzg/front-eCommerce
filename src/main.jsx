import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './components/Profile.jsx'
import LoginForm from './components/LoginForm.jsx'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'
import UserProvider from './context/userContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import ProductProvider from './context/productContext.jsx'
import ProductView from './components/ProductView.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<ProductProvider><App /></ProductProvider>
  },
  {
    path:'/singleproductview',
    element:<ProductProvider><ProductView /></ProductProvider>
  },
  {
    path:'/register',
    element:<UserProvider>
              <PayPalScriptProvider options={{"client-id":"AYBDb8cn5efohr1kHJNqZpXn4DCoiQqXp8h_jmqNle-zdS_hsPeJYEojFkAJT3MLP_OxM_k4JsdEir2a",
              components:"buttons",
              currency:"USD"}}>
                <Register />
              </PayPalScriptProvider>
            </UserProvider>
  },
  {
    path:'/login',
    element:<UserProvider>
              <PayPalScriptProvider>
              <LoginForm />
              </PayPalScriptProvider>
            </UserProvider>
  },
  {
    path:'/profile',
    element:<UserProvider>
              <PayPalScriptProvider>
                <Profile />
              </PayPalScriptProvider>
            </UserProvider>
  },
  {
    path:'/home',
    element:<UserProvider>
              <PayPalScriptProvider>
                <Home />
              </PayPalScriptProvider>
            </UserProvider>
  }

])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
