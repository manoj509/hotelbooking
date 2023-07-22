import React from 'react'
import AdminNavbar from './components/AdminNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../public/components/Footer'

const AdminLayout = () => {
    return (
        <>
            <AdminNavbar></AdminNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default AdminLayout