import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminGetAllusers } from '../../redux/admin/adminAction'

const ViewUSers = () => {
    const dispatch = useDispatch()
    const { allusers } = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(adminGetAllusers())
    }, [])
    console.log(allusers);
    const alluserCotent = allusers && allusers.map((item, i) => item.role === "user" && <tr key={item._id}  >
        <td >{item.name}</td>
        <td >{item.email}</td>
        <td >{`${item.active ? "Active" : "Unactive"}`}</td>

    </tr>)
    return (
        <>
            <div className='text-center mb-5'>
                <h1>AllUsers</h1>
            </div >
            <div className='container my-5'>
                <div className='table-responsive-sm '>
                    <table class={`table table-info mt-5  table-striped `}>
                        <thead>
                            <tr>
                                <th >Name</th>
                                <th >Email</th>
                                <th >Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alluserCotent}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ViewUSers