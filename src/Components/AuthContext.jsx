import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  const login = async (username, password) => {
    setLoading(true);
    try {
      const tokenResponse = await axios.post("http://192.168.4.72/api/token/", {
        username,
        password,
      });
      localStorage.setItem("token", tokenResponse.data.access);
      localStorage.setItem("refreshToken", tokenResponse.data.refresh);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error("Login error:", error);
      setIsAuthenticated(false);
      return false;
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
