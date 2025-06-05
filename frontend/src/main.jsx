import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import LoginForm from './components/LoginForm.jsx'
import Signup from './components/SignUpForm.jsx'
import { AuthProvider } from './utils/AuthProvider.jsx'
import PrivateRoute from './utils/PrivateRoute.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Profile from './components/Profile.jsx'
import RoleDetailPage from './components/RoleDetailsPage/RoleDetailPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path ='' element={<Home/>}/>
      <Route path = 'login' element={<LoginForm/>}/>
      <Route path = 'signup' element={<Signup/>}/>
      <Route path='dashboard' element={<PrivateRoute/>}>
        <Route path ='' element = {<Dashboard/>}/>
        <Route path='details/:id' element={<RoleDetailPage/>}/>
      </Route>
      <Route path='profile' element ={<PrivateRoute/>}>
        <Route path = '' element = {<Profile/>}/>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>
)
