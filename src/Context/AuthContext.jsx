import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("access_token");

    if (storedUser != null && storedToken != null) {
      setUser(JSON.parse(storedUser));
      setAccessToken(JSON.parse(storedToken));
      setLoggedIn(true);
    } else {
      setUser(null);
      setAccessToken(null);
      setLoggedIn(false);
    }
  }, []);

  const toggleLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loggedIn,
        toggleLoggedIn,
        loading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
