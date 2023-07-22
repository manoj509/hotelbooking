import React, { useState } from 'react'

const HotelDescription = () => {
    const [cusine, setCusine] = useState({
        Cuisine: true,
        Recreation: false,
        Spa: false,
        Events: false

    })
    console.log(cusine);
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className=" col-sm-6 offset-sm-3">
                        <div className='text-center'>
                            <p className='text-warning'>EXPERIENCES</p>
                            <p className=' fs-1'>Make Your Escape</p>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div onClick={e => setCusine({ Cuisine: true, })} class=" lg-rounded-circle lg-shadow-lg lg-p-2 col-sm-6   col-md-2 offset-sm-2  text-center fs-1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMd8eY11VAecHem48MCCw1iUhqdwUah838Q&usqp=CAU" height={50} width={50} className='rounded-circle' alt="" />
                        <p className='fs-4 ' style={{ fontFamily: "Lobster" }}>Cuisine</p>
                    </div>
                    <div onClick={e => setCusine({ Recreation: true })} class="lg-rounded-circle lg-shadow-lg lg-p-2col-sm-6 col-md-2  text-center fs-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Two_surfers.jpg" height={50} width={50} className='rounded-circle' alt="" />
                        <p className='fs-4 ' style={{ fontFamily: "Lobster" }}>Recreation</p>
                    </div>
                    <div onClick={e => setCusine({ Spa: true, })} class="lg-rounded-circle lg-shadow-lg lg-p-2 col-sm-6 col-md-2  text-center fs-1">
                        <img src="https://www.garnier.in/-/media/project/loreal/brand-sites/garnier/apac/in/all-article-pages/hair-care-tips/easy-4-step-hair-spa-at-home/thumbnails-6.jpg?rev=6d9cbec25e2944c8bd7f6004fff956bd" height={50} width={50} className='rounded-circle' alt="" />
                        <p className='fs-4 ' style={{ fontFamily: "Lobster" }}>Spa</p>
                    </div>
                    <div onClick={e => setCusine({ Events: true, })} class="lg-rounded-circle lg-shadow-lg lg-p-2  col-sm-6 col-md-2  text-center fs-1">
                        <img src="https://static.toiimg.com/photo/msid-64957021,width-96,height-65.cms" height={50} width={50} className='rounded-circle' alt="" />
                        <p className='fs-4 ' style={{ fontFamily: "Lobster" }}>Events</p>
                    </div>
                </div>
                <div class="row border-2 p-2 border my-4">
                    {cusine.Cuisine && <>
                        <div class="col-sm-12 col-lg-4">
                            <div class="">
                                <div class=" ">
                                    <img height={300} width={380} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMd8eY11VAecHem48MCCw1iUhqdwUah838Q&usqp=CAU" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-8">
                            <p className='fs-2 fw-bold'>Dine & Drink</p>
                            <p className='text-secondary'>You can enjoy the day with the sound of the waves and the relaxing smell of the sea while tasting our original menus prepared with skillful hands! While having a palate feast with the unique tastes, you can also have a memorable night with its atmosphere.</p>
                            <button disabled type="button" class="btn btn-outline-primary w-50">Learn More</button>

                        </div>
                    </>
                    }
                    {cusine.Recreation && <>
                        <div class="col-sm-12 col-lg-4">
                            <div class="">
                                <div class=" ">
                                    <img height={300} width={380} src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Two_surfers.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <p className='fs-2 fw-bold'>Pool Party</p>
                            <p className='text-secondary'>You can enjoy the day with the sound of the waves and the relaxing smell of the sea while tasting our original menus prepared with skillful hands! While having a palate feast with the unique tastes, you can also have a memorable night with its atmosphere.</p>
                            <button disabled type="button" class="btn btn-outline-primary w-50">Learn More</button>

                        </div>
                    </>
                    }
                    {cusine.Spa && <>
                        <div class="col-sm-12 col-lg-4">
                            <div class="">
                                <div class=" ">
                                    <img height={300} width={380} src="https://www.garnier.in/-/media/project/loreal/brand-sites/garnier/apac/in/all-article-pages/hair-care-tips/easy-4-step-hair-spa-at-home/thumbnails-6.jpg?rev=6d9cbec25e2944c8bd7f6004fff956bd" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-8">
                            <p className='fs-2 fw-bold'>Treatments that Transform</p>
                            <p className='text-secondary'>You can enjoy the day with the sound of the waves and the relaxing smell of the sea while tasting our original menus prepared with skillful hands! While having a palate feast with the unique tastes, you can also have a memorable night with its atmosphere.</p>
                            <button disabled type="button" class="btn btn-outline-primary w-50">Learn More</button>

                        </div>
                    </>
                    }
                    {cusine.Events && <> <div class="col-sm-12 col-lg-4">
                        <div class="">
                            <div class=" ">
                                <img height={300} width={380} src="https://static.toiimg.com/photo/msid-64957021,width-96,height-65.cms" alt="" />
                            </div>
                        </div>
                    </div>
                        <div class="col-sm-8">
                            <p className='fs-2 fw-bold'>Events to Remember</p>
                            <p className='text-secondary'>You can enjoy the day with the sound of the waves and the relaxing smell of the sea while tasting our original menus prepared with skillful hands! While having a palate feast with the unique tastes, you can also have a memorable night with its atmosphere.</p>
                            <button disabled type="button" class="btn btn-outline-primary w-50">Learn More</button>

                        </div>
                    </>}
                </div>
            </div >

        </>
    )
}

export default HotelDescription



