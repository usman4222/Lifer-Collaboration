import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const stored_user = localStorage.getItem("user");
    const stored_token = localStorage.getItem("access_token");
    if (stored_user) {
      setUser(stored_user);
      setLoggedIn(true);
      setAccessToken(stored_token);
    }
  }, []);

  const handleAccessToken = (data) => {
    setAccessToken(data);
  };

  const handleUser = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    setLoggedIn(true);
  };

  const toggleLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          handleUser,
          loggedIn,
          handleAccessToken,
          toggleLoggedIn,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
