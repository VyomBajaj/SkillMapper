import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../utils/AuthProvider.jsx';
import { fetchUser } from '../utils/getUser.js';

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [userData, setUserData] = useState({});

useEffect(() => {
  const getUserData = async () => {
    if (isLoggedIn) {
      const res = await fetchUser();
      console.log('res:', res);
      if (res && res.data) {
        setUserData(res.data);
      }
    }
  };

  getUserData();
}, [isLoggedIn]);

  return (
    <div className="bg-gradient-to-tr from-slate-900 via-gray-900 to-gray-800 text-white">
      <header className="w-full px-8 py-6 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-tight">SkillMap</h1>
        <nav className="flex gap-6 text-sm">
          {!isLoggedIn ? (
            <>
              <NavLink to='/' className={({ isActive }) => {
                return `hover:text-orange-400 transition ${isActive ? 'text-orange-500' : 'text-gray-300'}`
              }}>Home</NavLink>
              <NavLink to='/login' className={({ isActive }) => {
                return `hover:text-orange-400 transition ${isActive ? 'text-orange-500' : 'text-gray-300'}`
              }}>Login</NavLink>
              <NavLink to='/signup' className={({ isActive }) => {
                return `hover:text-orange-400 transition ${isActive ? 'text-orange-500' : 'text-gray-300'}`
              }}>SignUp</NavLink>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
              <Link to="/profile" className="hover:text-blue-400 transition">Profile</Link>
              <p>Hi:{userData.username}</p>
              <Link
                href="/login"
                onClick={() => {
                  localStorage.removeItem('authToken')
                  setIsLoggedIn(false);
                }}
                className="hover:text-red-400 transition"
              >
                Logout
              </Link>
            </>
          )}
        </nav>
      </header>
    </div>
  )
}

export default Navbar
