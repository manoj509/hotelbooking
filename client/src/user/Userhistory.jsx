import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminGetBookedRooms } from '../redux/admin/adminAction'
import { format } from 'date-fns'

const Userhistory = () => {
    const dispacth = useDispatch()
    const { allBookedrooms } = useSelector(state => state.admin)
    const { info } = useSelector(state => state.public)

    useEffect(() => {
        dispacth(adminGetBookedRooms())
    }, [])
    const totaluserBookings = []
    allBookedrooms && allBookedrooms.map((item, i) => {
        if (item.userId === info.id) {
            totaluserBookings.push(item)
        }
    })
    console.log(totaluserBookings);
    const bookHistory = totaluserBookings.map((item, i) => <tr key={item._id}>
        <td>{i + 1}</td>
        <td>{item.userName}</td>
        <td>{item.title}</td>
        <td><img src={item.roomimg} height={100} width={100} alt="" /></td>
        <td>{item.price}</td>
        <td>{format(new Date(item.fromdate), "dd-MM-yyyy")}</td>
        <td>{format(new Date(item.chekoutdate), "dd-MM-yyyy")}</td>

    </tr>)
    return (
        <>
            <div className='table-responsive-sm mt-2 mb-5'>
                <table class="table  table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>

                            <th scope="col">UserName</th>
                            <th scope="col">RoomTitle</th>
                            <th scope="col">Roomimg</th>
                            <th scope="col">Price</th>
                            <th scope="col">FromDate</th>
                            <th scope="col">ToDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookHistory}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Userhistory