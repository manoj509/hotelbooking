import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminAddRooms, adminDeleteRoom } from '../../redux/admin/adminAction'
import { adminGetRooms } from '../../redux/admin/adminAction'

const Dashbord = () => {

    return (
        <>


            <div className='text-center my-5 ' style={{ height: "45vh" }} >
                <h1 className=''>Welcome Admin</h1>
            </div>


        </>
    )
}

export default Dashbord