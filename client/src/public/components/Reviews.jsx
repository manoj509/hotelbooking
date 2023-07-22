import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const Reviews = () => {
    const slideArray = [
        { title: "Excellent Hotel", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nihil obcaecati veniam nobis maiores autem laudantium qui unde perspiciatis facere eius commodi totam", rating: "4/5", name: "Emma stone", date: " jun,23,2022", },
        { title: "Excellent Hotel", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nihil obcaecati veniam nobis maiores autem laudantium qui unde perspiciatis facere eius commodi totam", rating: "4/5", name: " stone", date: " jun,23,2022", },
        { title: "Excellent Hotel", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nihil obcaecati veniam nobis maiores autem laudantium qui unde perspiciatis facere eius commodi totam", rating: "4/5", name: "Emma ", date: " jun,23,2022", },
        { title: "Excellent Hotel", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nihil obcaecati veniam nobis maiores autem laudantium qui unde perspiciatis facere eius commodi totam", rating: "4/5", name: "Emma stone", date: " jun,23,2022", },
    ]
    const slideConten = slideArray.map((item, i) => <SwiperSlide>
        <div class="row">

            <div class="col-sm-6 offset-sm-3 text-center ">
                <p className='fw-bold'>{item.title}</p>
                <p className=''>{item.desc} </p>
                <p>{item.rzating} </p>
                <p>{item.name} </p>
                <p>{item.date} </p>
            </div>
        </div>
    </SwiperSlide>
    )
    return (
        <>
            <div className="container">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                    {slideConten}
                </Swiper>
            </div>
        </>
    )
}

export default Reviews