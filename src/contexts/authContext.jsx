/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import useAuth from "../firebase/config/auth.config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
