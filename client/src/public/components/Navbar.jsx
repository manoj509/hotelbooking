import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { invalidate, logout } from '../../redux/public/publicSlice'

const Navbar = () => {
    const dispatch = useDispatch()
    const { info } = useSelector(state => state.public)
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <Link className="navbar-brand fs-3 publiclogo" to="/">ERIOS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className=" nav-link active " to="/">Home</Link>
                            <Link className=" nav-link" to="/rooms">Rooms</Link>
                            <Link className=" nav-link" to="/services">Services</Link>
                            <Link className=" nav-link" to="/contact">Contact</Link>
                            {!info && <>
                                <Link className="nav-link" to="/login">Login</Link>
                                <Link className="nav-link" to="/register">Register</Link>
                            </>}
                            {info && info.role === "admin" && <Link className="nav-link fw-bold text-primary " to="/admin">Dashbord</Link>}
                            {info && info.role === "user" && <Link className="nav-link fw-bold   text-primary" to="/user">{info.name}</Link>}

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar