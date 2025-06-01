import React, { useEffect, useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import { useAuth } from '../utils/AuthProvider.jsx';

const Navbar = () => {
     const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <div className="bg-gradient-to-tr from-slate-900 via-gray-900 to-gray-800 text-white">
      <header className="w-full px-8 py-6 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-tight">SkillMap</h1>
        <nav className="flex gap-6 text-sm">
          {!isLoggedIn ? (
            <>
              <NavLink to = '/' className = {({isActive})=>{
                return `hover:text-orange-400 transition ${isActive? 'text-orange-500':'text-gray-300'}`
              }}>Home</NavLink>
              <NavLink to = '/login' className = {({isActive})=>{
                return `hover:text-orange-400 transition ${isActive? 'text-orange-500':'text-gray-300'}`
              }}>Login</NavLink>
              <NavLink to = '/signup' className = {({isActive})=>{
                return `hover:text-orange-400 transition ${isActive? 'text-orange-500':'text-gray-300'}`
              }}>SignUp</NavLink>
            </>
          ) : (
            <>
              <a href="/dashboard" className="hover:text-blue-400 transition">Dashboard</a>
              <a href="/profile" className="hover:text-blue-400 transition">Profile</a>
              <a
                href="/login"
                onClick={() => {localStorage.removeItem('authToken')
                  setIsLoggedIn(false);
                }}
                className="hover:text-red-400 transition"
              >
                Logout
              </a>
            </>
          )}
        </nav>
      </header>
    </div>
  )
}

export default Navbar
