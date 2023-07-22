import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../public/components/Footer'
import UserNavbar from './components/UserNavbar'

const UserLayout = () => {
    return (
        <>
            <UserNavbar />
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default UserLayout