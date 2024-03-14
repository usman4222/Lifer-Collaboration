import React, { lazy, useState } from 'react'
import { GoBell } from 'react-icons/go'
import { BiSolidMessageSquareDots } from 'react-icons/bi'
import { HiMiniBars3BottomLeft } from 'react-icons/hi2'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import { createPortal } from 'react-dom'
import toast from 'react-hot-toast'
const Overlay = lazy(() => import('./Overlay'))
import Chat from '../Screens/Chat'
import Notification from '../Screens/Notification'

const Navbar = () => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const [overlay, setOverlay] = useState(false)
    const [showChat, setShowChat] = useState(false)
    const [showNotification, setShowNotification] = useState(false)
    const navigate = useNavigate()

    const { logoutUser, loggedIn, user } = useAuth()

    const handleLogout = () => {
        toast('You have been logged out')
        logoutUser()
        navigate('/account/login')
    }
    const toggleChat = () => {
        setShowChat(!showChat)
        setOverlay(!overlay)
    }
    const toggleNotification = () => {
        setShowNotification(!showNotification)
        setOverlay(!overlay)
    }

    const handleSidebarToggle = () => {
        const sidebar = document.getElementById('sidebar')
        const overlay = document.getElementById('overlay')
        sidebar.classList.remove('translate-x-[-100%]')
        sidebar.classList.add('translate-x-0')
        overlay.classList.remove('hidden')
    }

    const closeSideBar = () => {
        const sidebar = document.getElementById('sidebar')
        const overlay = document.getElementById('overlay')
        sidebar.classList.add('translate-x-[-100%]')
        overlay.classList.add('hidden')
    }

    return (
        <>
            <div className='w-full flex flex-row px-10 lg:justify-end justify-between items-center md:gap-x-3 p-4'>
                <div className='lg:hidden bg-linkBg p-2 rounded-lg text-textActive cursor-pointer'>
                    <HiMiniBars3BottomLeft
                        size={20}
                        onClick={handleSidebarToggle}
                    />
                </div>
                <div className='flex flex-row gap-x-3 md:border-r md:border-gray-400 px-5 md:pl-[40%]'>
                    <div
                        className='bg-linkBg p-2 rounded-lg text-textActive font-extrabold cursor-pointer relative'
                        onClick={toggleNotification}
                    >
                        <GoBell />
                        <div className='w-[15px] h-[15px] bg-primary rounded-full absolute top-[-5px] right-[-5px]'></div>
                    </div>
                    <div
                        className='bg-linkBg p-2 rounded-lg text-textActive font-extrabold cursor-pointer relative'
                        onClick={toggleChat}
                    >
                        <BiSolidMessageSquareDots />
                        <div className='w-[15px] h-[15px] bg-primary rounded-full absolute top-[-5px] right-[-5px]'></div>
                    </div>
                </div>
                <div className='text-primary hidden md:block'>
                    <span className='text-[15px]'>Welcome,{'   '}</span>
                    <span className='font-semibold'>{user?.first_name}</span>
                </div>
                <div className='relative'>
                    <img
                        src='/src/assets/profile.png'
                        className='w-[50px] h-[50px] rounded-full cursor-pointer'
                        alt='Profile Image'
                        onClick={() =>
                            setShowProfileDropdown(!showProfileDropdown)
                        }
                    />

                    <div
                        className={`px-5 py-3 bg-white rounded-md absolute top-[50px] right-2 transition-all duration-500 ease-in-out ${
                            showProfileDropdown ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <ul className='flex flex-col gap-y-3'>
                            <li className='cursor-pointer'>Profile</li>
                            {!loggedIn && (
                                <NavLink to='/account/login'>
                                    <li className='cursor-pointer'>Log In</li>
                                </NavLink>
                            )}
                            {loggedIn && (
                                <li
                                    className='cursor-pointer font-semibold text-red-500'
                                    onClick={handleLogout}
                                >
                                    Logout
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div
                    id='overlay'
                    className='w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] hidden z-10'
                    onClick={closeSideBar}
                ></div>
            </div>
            {showChat && (
                <>
                    {createPortal(<Chat />, document.getElementById('modal'))}
                    <Overlay toggleOverlay={toggleChat} />
                </>
            )}
            {showNotification && (
                <>
                    {createPortal(
                        <Notification />,
                        document.getElementById('modal'),
                    )}
                    <Overlay toggleOverlay={toggleNotification} />
                </>
            )}
        </>
    )
}

export default Navbar
