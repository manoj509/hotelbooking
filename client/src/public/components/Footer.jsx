import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const footerArray = [
        { title: "LOCATION", desc: "736 Blue Spring Ave.Smithtown, NY 11787", },
        { title: "PHONE", desc: "(+844) 1800 3377", },
        { title: "RESERVATIONS", desc: "(+844) 1800 3355 support@example.com", },
        { title: "FOLLOW US", logo: "bi bi-" }
    ]
    const footerContent = footerArray.map((item, i) => <div className='col-sm-6 col-md-3  border-end text-center' key={i}>
        <p className='text-warning'>{item.title}</p>
        <p className='text-secondary'>{item.desc}</p>
        {<Link className='text-danger  mx-3' to=""><i className={`${item.logo + 'facebook'}`}></i></Link>}
        {<Link className='text-danger  mx-3' to="https://www.instagram.com/"><i className={`${item.logo + 'instagram'}`}></i></Link>}
        {<Link className='text-danger  mx-3' to=""><i className={`${item.logo + 'twitter'}`}></i></Link>}
    </div >)
    return (
        <>
            <div className='bg-dark' >
                <div className='container'>
                    <div class="row">
                        <div class="col-sm-6 offset-sm-3 text-center my-2">
                            <img height={100} src="https://demo2.themelexus.com/erios/wp-content/uploads/2019/07/logo_dark.svg" alt="" />
                        </div>
                    </div>
                    <div className='text-light'>
                        <hr />
                    </div>
                    <div class="row">
                        {footerContent}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer