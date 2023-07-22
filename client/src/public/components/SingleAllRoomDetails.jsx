import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { adminGetRooms } from '../../redux/admin/adminAction'

const SingleAllRoomDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { rooms } = useSelector(state => state.admin)
    const filroom = rooms && rooms.find(item => item._id === id)
    useEffect(() => {
        dispatch(adminGetRooms())
    }, [])

    return (
        <>
            <div className='container-fluid my-2'>
                <div className='row'>
                    <div className="col-sm-6">
                        <img src={filroom.img} className='img-fluid' alt={filroom.img} />
                    </div>
                    <div className='col-sm-6'>
                        <div className='d-flex flex-column '>
                            <h1>{filroom.title}</h1>
                            <h3>{filroom.fet}</h3>
                            <p className='text-secondary w-75'>{filroom.desc}</p>
                            <h1 className='mt-2'><Link className='text-decoration-none btn btn-primary btn-lg' to="/" >Back To Home</Link></h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleAllRoomDetails