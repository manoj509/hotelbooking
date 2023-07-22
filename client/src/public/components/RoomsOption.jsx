import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { adminGetRooms } from '../../redux/admin/adminAction'
import { bookRoom, cheakDate } from '../../redux/public/publicActions'
import { invalidatechekdates, } from '../../redux/public/publicSlice'
import { invalidaterooms } from '../../redux/admin/adminSlice'
import { format } from 'date-fns'


const RoomsOption = () => {
    const navigate = useNavigate()

    const [date, setDate] = useState({
        avfromDate: "",
        avchekDate: ""
    })
    const { rooms, loadings } = useSelector(state => state.admin)
    const { info, cheakDates, loading } = useSelector(state => state.public)
    const dispatch = useDispatch()
    const [alerts, setalerts] = useState(false)
    const handlealertssms = async () => {
        setalerts(true)
        setTimeout(() => {
            setalerts(false)
        }, 3000);
    }
    const roomsContent = rooms && rooms.map((item, i) => <div key={i} className='col-sm-6 my-2 col-md-4 '>
        <div class="card  shadow-lg overflow-auto" >
            <div className=" mt-2 text-center">
                <img src={item.img} className='shadow-lg' style={{ height: "14rem", width: "300px" }} />
            </div>
            <div class="card-body shadow-lg" >
                <p className='fw-bold'>{item.title}</p>
                <p className='text-secondary'>{item.fet}</p>
                <p className=''>{item.desc}</p>
                <div className='d-flex justify-content-between fw-bold'>
                    <p>RS.{item.price}</p>
                    <Link to={`/singleAllRoom/${item._id}`} className='btn btn-outline-dark mx-1'>See Details</Link>

                </div>
            </div>
        </div>
    </div >

    )

    const chekroomsContent = cheakDates && cheakDates.map((item, i) => <div key={i} className='col-sm-6 my-2  col-md-4 '>
        <div class="card shadow-lg overflow-auto " >
            <div className="text-center ">
                <img src={item.img} className='shadow-lg' style={{ height: "14rem", width: "300px" }} />
            </div>
            <div class="card-body shadow-lg">
                <p className='fw-bold'>{item.title}</p>
                <p className='text-secondary'>{item.fet}</p>
                <p className=''>{item.desc}</p>
                <div className='d-flex justify-content-between fw-bold'>
                    <p>RS.{item.price}</p>
                    <div>

                        <Link to={`/seedetail/${item._id}`} className='btn btn-outline-dark mx-1'>See Details</Link>
                        {
                            info ?
                                <>
                                    <Link to={`/singleRoom/${item._id}`} type="button" class="btn btn-dark fw-bold">Book Now</Link>
                                </>
                                : <Link to={`/login`} type="button" class="btn btn-dark fw-bold">Book Now</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div >
    )


    useEffect(() => {

        dispatch(adminGetRooms())
    }, [])
    const handleChekdates = () => {
        if (date.avfromDate && date.avchekDate) {
            dispatch(invalidaterooms())
            setTimeout(() => {
                dispatch(cheakDate({ date }))
            }, 2000);
        } else {
            handlealertssms()
        }
    }
    const handlerooms = () => {
        dispatch(invalidatechekdates())
        setTimeout(() => {
            dispatch(adminGetRooms())
        }, 2000);
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className='col-sm-3 mt-3'>
                        {cheakDates && <div className='d-flex justify-content-between gap-5'>

                        </div>}
                        <br />
                        <label htmlFor="chekavailabilty">Check availability</label><br />
                        <div className='d-flex gap-5'>
                            <input className='form-control' onChange={e => setDate({ ...date, avfromDate: e.target.value })} value={`${date.avfromDate}`} type="date" min={`${format(new Date(), "yyyy-MM-dd")}`} id="chekavailabilty" />
                            <input className='form-control' onChange={e => setDate({ ...date, avchekDate: e.target.value })} type="date" min={`${date.avfromDate}`} id="chekavailabilty" />
                        </div>
                        {date && <button className='btn btn-outline-primary mt-2' onClick={handleChekdates}>availability</button>}
                        {cheakDates && <button className='btn btn-outline-primary mx-3 mt-2' onClick={handlerooms}>allroms</button>}
                    </div>
                    <div className="col-sm-6">
                        <div className='text-center mt-3'>
                            <p className='text-warning'>ENJOY EVERY MOMENT</p>
                            <p className='fs-1 '>Room Options</p>
                            {alerts && <div className='fs-5 fw-bold a text-danger'>Please Chek Avalibility </div>}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <dir className="text-center">
                        {loadings && <div class="spinner-border text-primary"></div>}
                        {loading && <div class="spinner-border text-primary"></div>}
                    </dir>
                    {rooms && roomsContent}
                    {cheakDates && chekroomsContent}
                </div>
            </div>
        </>
    )
}

export default RoomsOption