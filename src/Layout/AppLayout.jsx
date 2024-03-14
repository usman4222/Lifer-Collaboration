import React from 'react'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'

const AppLayout = () => (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <Navbar />
                <SideBar />
                <WrappedComponent {...props} />
            </>
        )
    }
}

export default AppLayout
