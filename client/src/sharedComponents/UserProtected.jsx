import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const UserProtected = ({ compo }) => {
    const { info } = useSelector(state => state.public)
    return info === null ? <Navigate to="/login" /> : info.role === "user" ? compo : <Navigate to="/" />
}

export default UserProtected