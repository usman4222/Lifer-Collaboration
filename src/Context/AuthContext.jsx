import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
