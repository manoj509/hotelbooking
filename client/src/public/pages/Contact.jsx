import React from 'react'

const Contact = () => {
    return (
        <>

            <div className='contact-hero position-relative'>
                <div className="container position-absolute  text-center contact-head mx-2">
                    <div class="row ">
                        <div className=''>
                            <h1 className='text-white opacity-75'>Contact</h1>
                            <h1 className='text-white opacity-75'>Extend Your Summer</h1>
                            <h1 className='text-white opacity-75'>with Erios....</h1>

                        </div>
                    </div>

                </div>

            </div>
            {<ContactContent></ContactContent>}
        </>

    )
}

export default Contact



export const ContactContent = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-sm-6">
                    <h1 className='text-dark opacity'>Contact Us </h1>
                    <p className=' d-none d-md-block text-dark '>If you need any help, please contact us or send us an email or go to our forum We are sure that you can receive our reply as soon as possible.</p>
                    <p> <i class="bi bi-telephone"></i> Phone : (+844) 1800 3377</p>
                    <p> <i class="bi bi-geo-alt"></i> ADDRESS : 736 Blue Spring Ave.Smithtown, NY 11787  </p>
                    <p> <i class="bi bi-geo-alt"></i> EMAIL : (+844) 1800 3355 support@example.com
                    </p>
                </div>
                <div className="col-sm-6">
                    <div class="">
                        <h1 class="">FeedBack </h1>
                        <div class="card-body">
                            <div>
                                <label for="name" class="form-label"> Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    placeholder="Enter Your name"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a name.</div>
                            </div>
                            <div>
                                <label for="email" class="form-label"> Email</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a email.</div>
                            </div>
                            <div class="mt-2">
                                <label for="message" class="form-label">Message</label>
                                <textarea
                                    type="message"
                                    rows="4"
                                    class="form-control"
                                    id="message"
                                    placeholder="Enter Your message"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <button type="button" class="btn btn-primary  mt-3">
                                Send sms
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
