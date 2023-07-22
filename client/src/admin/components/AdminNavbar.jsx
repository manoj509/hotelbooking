import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/public/publicSlice'

const AdminNavbar = () => {
    const dispatch = useDispatch()
    const { info } = useSelector(state => state.public)
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">Admin</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/" class="nav-link active " >Home</Link>
                            <Link to="/admin" class="nav-link active " >Dashbord</Link>
                            <Link to="/admin/allrooms" class="nav-link active " >Allrooms</Link>
                            <Link to="/admin/adminViewUsers" class="nav-link active " > AllUsers</Link>
                            <Link to="/admin/adminViewBooking" class="nav-link active " > AllBookings</Link>
                            <Link to="/admin/adminAddRooms" class="nav-link active " >CreateRoom</Link>
                            {
                                info && <div class=" dropdown d-flex align-items-center mx-2">
                                    <Link class="text-decoration-none text-danger" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                        LogOut
                                    </Link>
                                    <ul class="dropdown-menu text-center">
                                        <li onClick={e => dispatch(logout(null))}>logout</li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminNavbar