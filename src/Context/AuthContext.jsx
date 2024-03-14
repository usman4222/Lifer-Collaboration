import { useContext, createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const [accessToken, setAccessToken] = useState(null)
    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        const storedToken = localStorage.getItem('access_token')

        if (storedUser != null && storedToken != null) {
            setUser(JSON.parse(storedUser))
            setAccessToken(JSON.parse(storedToken))
            setLoggedIn(true)
        }
    }, [])

    const toggleLoggedIn = (isLoggedIn) => {
        setLoggedIn(isLoggedIn)
        if (!isLoggedIn) {
            // Clear user and access token from localStorage on logout
            localStorage.removeItem('user')
            localStorage.removeItem('access_token')
        }
    }

    const signupUser = (userData) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    // Persist user and access token in localStorage on login
    const loginUser = (userData, token) => {
        setUser(userData)
        setAccessToken(token)
        localStorage.setItem('user', JSON.stringify(userData))
        localStorage.setItem('access_token', JSON.stringify(token))
        localStorage.setItem('loggedIn', true)
        setLoggedIn(true)
    }

    // Clear user and access token from localStorage and set loggedIn state to false on logout
    const logoutUser = () => {
        setUser(null)
        setAccessToken(null)
        localStorage.removeItem('user')
        localStorage.removeItem('access_token')
        localStorage.removeItem('restaurant')
        localStorage.removeItem('loggedIn')
        setLoggedIn(false)
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                loggedIn,
                toggleLoggedIn,
                loginUser,
                logoutUser,
                loading,
                setIsLoading,
                signupUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
