import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminGetRooms } from '../../redux/admin/adminAction'

const AllRooms = () => {
    const dispatch = useDispatch()
    const { rooms, roomsAdded, roomdeleted } = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(adminGetRooms())
    }, [])
    console.log(rooms);
    const allRooms = rooms && rooms.map((item, i) => <tr className={`${item.active ? "table-primary" : "table-warning"}`} key={item._id}>
        <td>{i + 1}</td>
        <td>{item.title}</td>
        <td><img src={item.img} width={100} alt={item.img} /></td>
        <td>{item.fet} </td>
        <td>{item.price} </td>
        <td>{`${item.active ? "Active ON Screen" : "Not Active"}`} </td>

    </tr>)
    return (
        <>
            <div className='text-center mb-5'>
                <h1>AllRooms</h1>
            </div>
            <div className='container my-5'>
                <div className='table-responsive-sm'>
                    <table class={`table table-striped   mt-5`}>
                        <thead>
                            <tr>
                                <th >#</th>
                                <th >Title</th>
                                <th >Image</th>
                                <th >Features</th>
                                <th >Price</th>
                                <th >Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allRooms}

                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}

export default AllRooms