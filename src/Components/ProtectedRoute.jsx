import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const loggedIn = localStorage.getItem('loggedIn') === 'true'
    return loggedIn ? children || <Outlet /> : <Navigate to='/account/login' />
}

export default ProtectedRoute
