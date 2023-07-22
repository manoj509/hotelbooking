import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    return (<div className='bg-hero position-relative'>
        <div className="backdrop">
            <div className=' d-flex justify-content-center'>
                <div className='position-absolute mt-5'>
                    <p className='text-dark opacity-75 ' style={{ fontFamily: "Lobster ", fontSize: "11vh" }}>Touching </p>
                    <p className='text-dark opacity-50 ' style={{ fontFamily: "Lobster ", fontSize: "9vh" }}>your</p>
                    <p className='text-dark opacity-25 ' style={{ fontFamily: "Lobster ", fontSize: "7vh" }}>Heart</p>
                    <p className='text-dark opacity-25 fs-3 ' style={{ fontFamily: "Lobster " }}>A luxary like no other</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero