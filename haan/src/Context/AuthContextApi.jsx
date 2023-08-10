import React, { createContext, useState } from 'react'

const initialAuth = {
    isAuth: false,
    name: "",
    phone: "",
    password: "",
    email: ""
    
}

export const AuthContext = createContext();

export const AuthContextApi = ({ children }) => {

const [authState, setAuthState] = useState(initialAuth);

  const login = (userData) => {
    setAuthState({
      ...userData,
      isAuth: true,
    });
  };

  const logout = () => {
    setAuthState(initialAuth);
    };
    
  return (
      <AuthContext.Provider value={{authState, login, logout}}>
          {children}
      </AuthContext.Provider>
  )
}

