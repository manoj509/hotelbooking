import React from 'react'
import { Link } from 'react-router-dom'

const HotelInfo = () => {
    const featuresArray = [
        {
            logo: "bi bi-calendar", title: "Best rate guarantee", desc: "Cras nulla lectus, fermentum et sagittis nec, fringilla sit amet        "
        },
        { logo: "bi bi-calendar", title: "No booking fee", desc: "Integer cursus accumsan laoreet. Nunc quis porta " },
        { logo: "bi bi-calendar", title: "High-speed Wi-Fi ", desc: "Sed aliquam ex id turpis mattis, sit amet porta" },
        { logo: "bi bi-calendar", title: "Reservations 24/7", desc: "Proin consequat, nibh ut semper rhoncus" },
    ]
    const featuresContent = featuresArray.map((item, i) => <div key={i} className='col-sm-6 col-md-3'>
        <div class="card shadow-lg">
            <div class="card-body">
                <span><i className={`${item.logo}`}></i></span>
                <p className=' fw-bold'>{item.title}</p>
                <p className=''>{item.desc}</p>
            </div>
        </div>

    </div>)
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">

                    </div>
                    <div className='m-auto w-75  mt-5 text-secondary '>
                        Book your place in a hidden paradise located right in the heart of Midwest with the energy of the Sea and an unusual lifestyle, which offers a unique architectural pleasure with its award-winning interior design.
                    </div>
                    <div className='text-center mt-3 '>
                        <Link to="/services" type="button" class="btn btn-outline-primary w-25 border border-2 rounded-pill">Explore Our Hotel <span className='fs-5'><i class="bi bi-arrow-right-short"></i></span></Link>
                    </div>
                </div>
                <div class="row mt-3">
                    {featuresContent}
                </div>
                <div className='text-center text-secondary fs-5 mt-3'>Should you need more information, please call: (+844) 1800 3377</div>
            </div>
        </>
    )
}

export default HotelInfo