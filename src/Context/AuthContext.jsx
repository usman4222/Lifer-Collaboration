import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("access_token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setAccessToken(storedToken);
      setLoggedIn(true);
    } else {
      setUser(null); // Reset user state if no stored user found
      setLoggedIn(false); // Reset loggedIn state if no stored user found
    }
  }, []);

  const handleAccessToken = (data) => {
    setAccessToken(data);
    localStorage.setItem("access_token", JSON.stringify(data));
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
