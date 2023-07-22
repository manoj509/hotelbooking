import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const SeeDetails = () => {
    const { id } = useParams()
    const { cheakDates } = useSelector(state => state.public)
    const filroom = cheakDates.find(item => item._id === id)
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
                            <h1 className='mt-2'><Link to="/" className='text-decoration-none btn-lg btn btn-primary'>Home</Link></h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SeeDetails