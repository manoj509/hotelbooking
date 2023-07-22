import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { bookRoom, getKeyAction, initiatePaymentAction, verifyPaymentAction } from '../../redux/public/publicActions'
import { invalidatechekdates, paymentVery } from '../../redux/public/publicSlice'

const SingleRoomContent = () => {
    const dispacth = useDispatch()
    const navigate = useNavigate()
    const [fromdate, setFromdate] = useState()
    const [chekoutdate, setChekoutdate] = useState()
    const { id } = useParams()
    const { cheakDates, info, keyPay, orderId, date, paymentVerify } = useSelector(state => state.public)
    const filroom = cheakDates.find(item => item._id === id)

    function getDatesBetween(startDate, endDate) {
        const currentDate = new Date(startDate.getTime());
        const dates = [];
        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    }
    let allDates = getDatesBetween(new Date(date.avfromDate), new Date(date.avchekDate));
    const rs = filroom.price * allDates.length

    const handleChekOut = async () => {
        dispacth(initiatePaymentAction(rs))
    }


    useEffect(() => {
        dispacth(getKeyAction())
    }, [])

    useEffect(() => {
        if (orderId) {
            const Razor = new window.Razorpay({
                key: keyPay,
                amount: rs * 100,
                currency: "INR",
                order_id: orderId,
                prefill: {
                    contact: 9370039515
                },
                handler: response => {
                    const roomDetails = { ...filroom, price: rs, fromdate: date.avfromDate, chekoutdate: date.avchekDate, }
                    dispacth(verifyPaymentAction({ ...response, roomDetails }))
                }
            })
            Razor.open()
        }
    }, [orderId])
    useEffect(() => {
        if (paymentVerify) {
            setTimeout(() => {
                navigate("/user")
                dispacth(paymentVery(null))
            }, 4000)
        }
    }, [paymentVerify])


    return (
        <>
            <div className="container mt-5 card mb-5">
                <div className="row bs">
                    <div className="col-sm-6">
                        <h1>{filroom.title}</h1>
                        <img src={filroom.img} className="img-fluid" alt="" />
                    </div>
                    <div className="col-sm-6">
                        <div style={{ textAlign: 'right' }}>
                            <h1>Booking Details</h1>
                            <hr />
                            <b>
                                <p>Name : {info.name}</p>
                                <p>From Date : {date.avfromDate} </p>
                                <p>To Date : {date.avchekDate}</p>
                            </b>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <b>
                                <h1>Amount</h1>
                                <hr />
                                <p>Total Days : {allDates.length}</p>
                                <p>Rent Per Day : {filroom.price} </p>
                                <p>Total Amount : {rs}</p>
                            </b>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <button onClick={handleChekOut} type="button" class="btn btn-primary">Pay now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleRoomContent