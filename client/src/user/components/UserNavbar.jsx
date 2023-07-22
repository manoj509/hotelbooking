import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/public/publicSlice'
import { useDispatch, useSelector } from 'react-redux'

const UserNavbar = () => {
    const dispatch = useDispatch()
    const { info } = useSelector(state => state.public)
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">LoGo</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link" to="/user">MyBookings</Link>
                            <Link class="nav-link" to="/user/settings">Settings</Link>
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

export default UserNavbar