import React from 'react'
import HotelInfo from '../components/HotelInfo'
import Reviews from '../components/Reviews'

const Services = () => {
    return (
        <>
            <div className='services-hero '>
                <div className="container services-hader">
                    <div class="row ">
                        <div className='col-sm-6 offset-sm-2 opacity-75'>
                            <div className='text-center text-light'>
                                <p className='fs-1 text-light'>Stay in One of the Top Hotels..........</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='my-5'>
                <Reviews />
            </div>
            <div className='my-5'>
                <HotelInfo />
            </div>
        </>
    )
}

export default Services