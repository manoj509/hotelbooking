import React from 'react'
import { Link } from 'react-router-dom'

const Page_not_found = () => {
    return (
        <div className=' vh-100'>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-6 offset-sm-3 text-center mt-5">
                        <h1 className='text-danger'>404</h1>
                        <h1 className='text-danger'>Page Not Found...</h1>
                        <h1 className='text-danger'>😓😒</h1>
                        <Link to="/" className='btn btn-warning my-5'>home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page_not_found