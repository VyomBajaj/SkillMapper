import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isProfileCompleted,setIsProfileCompleted] = useState(false);
  useEffect(() => {
  const token = localStorage.getItem('authToken');
  if (token) {
    setIsLoggedIn(true);

    axios.post('/api/auth/getuser',{}, {
      headers: {
        authToken: token,
      },
    })
    .then((res) => {
      console.log("getuser response:", res.data);
      const { isProfileCompleted } = res.data;
      setIsProfileCompleted(isProfileCompleted);
    })
    .catch((err) => {
      console.error("Error fetching user:", err.message);
    });
  }
  setLoading(false);
}, []);


  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loading,isProfileCompleted,setIsProfileCompleted }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
