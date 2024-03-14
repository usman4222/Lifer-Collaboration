import './App.css'
import { useState, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Home = lazy(() => import('./Screens/Home'))
const OrderHistory = lazy(() => import('./Screens/OrderHistory'))
const Orders = lazy(() => import('./Screens/Orders'))
const Help = lazy(() => import('./Screens/Help'))
import Revenue from './Screens/Revenue'
import { createPortal } from 'react-dom'
import Overlay from './Components/Overlay'
const Rider = lazy(() => import('./Screens/Rider'))
import RiderForm from './Components/RiderForm'
import HelpForm from './Components/HelpForm'
import Representator from './Components/Representator'
const Menu = lazy(() => import('./Screens/Menu'))
const AddMenu = lazy(() => import('./Screens/AddMenu'))
import AddRevenue from './Components/AddRevenue'
const Login = lazy(() => import('./Screens/Login'))
const Signup = lazy(() => import('./Screens/Signup'))
import { useAuth } from './Context/AuthContext.jsx'
import ProtectedRoute from './Components/ProtectedRoute'
import { Toaster } from 'react-hot-toast'
import Loader from './Components/Loader.jsx'
const OTP = lazy(() => import('./Screens/OTP'))

function App() {
    const [overlay, setOverlay] = useState(false)
    const [showRiderForm, setShowRiderForm] = useState(false)
    const [showRepresentator, setShowRepresentator] = useState(false)
    const [showRevenueForm, setShowRevenueForm] = useState(false)

    const { loading } = useAuth()

    const toggleRiderForm = () => {
        setShowRiderForm(!showRiderForm)
        setOverlay(!overlay)
    }
    const toggleRepresentator = () => {
        setShowRepresentator(!showRepresentator)
        setOverlay(!overlay)
    }

    const toggleRevenueForm = () => {
        setShowRevenueForm(!showRevenueForm)
        setOverlay(!overlay)
    }

    return (
        <>
            <Toaster />
            {loading && <Loader />}
            <BrowserRouter>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route element={<ProtectedRoute />}>
                            <Route key='home' element={<Home />} path='/' />
                            <Route
                                key='order-history'
                                element={<OrderHistory />}
                                path='/order-history'
                            />
                            <Route
                                key='orders'
                                element={<Orders />}
                                path='/orders'
                            />
                            <Route
                                key='help'
                                element={
                                    <Help
                                        toggleRepresentator={
                                            toggleRepresentator
                                        }
                                    />
                                }
                                path='/help'
                            />
                            <Route
                                key='revenue'
                                element={
                                    <Revenue
                                        toggleRevenueForm={toggleRevenueForm}
                                    />
                                }
                                path='/revenue'
                            />
                            <Route
                                key='riders'
                                element={
                                    <Rider toggleRiderForm={toggleRiderForm} />
                                }
                                path='/riders'
                            />
                            <Route
                                key='help-form'
                                element={<HelpForm />}
                                path='/help-form'
                            />
                            <Route
                                key='menu'
                                element={<Menu />}
                                path='/menu/*'
                            />
                            ,
                            <Route
                                key='add-menu'
                                element={<AddMenu />}
                                path='/add-menu'
                            />
                            ,
                        </Route>
                        <Route element={<Login />} path='/account/login' />
                        <Route element={<Signup />} path='/account/signup' />
                        <Route element={<OTP />} path='/account/verification' />
                    </Routes>
                </Suspense>
            </BrowserRouter>

            {showRiderForm && (
                <>
                    {createPortal(
                        <RiderForm />,
                        document.getElementById('modal'),
                    )}
                    <Overlay toggleOverlay={toggleRiderForm} />
                </>
            )}
            {showRepresentator && (
                <>
                    {createPortal(
                        <Representator />,
                        document.getElementById('modal'),
                    )}
                    <Overlay toggleOverlay={toggleRepresentator} />
                </>
            )}

            {showRevenueForm && (
                <>
                    {createPortal(
                        <AddRevenue />,
                        document.getElementById('modal'),
                    )}
                    <Overlay toggleOverlay={toggleRevenueForm} />
                </>
            )}
        </>
    )
}

export default App
