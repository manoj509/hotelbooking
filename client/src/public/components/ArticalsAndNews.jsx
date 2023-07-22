import React from 'react'

const ArticalsAndNews = () => {
    const articalArray = [
        { img: "https://demo2.themelexus.com/erios/wp-content/uploads/2019/07/post-2.jpg", date: "SEPTEMBER 12, 2022", desc: "Our New Miami Beach Hotel Is Open!" },
        { img: "https://demo2.themelexus.com/erios/wp-content/uploads/2019/07/6.jpg", date: "SEPTEMBER 12, 2022", desc: "Our New Miami Beach Hotel Is Open!" },
        { img: "https://demo2.themelexus.com/erios/wp-content/uploads/2019/07/10.jpg", date: "SEPTEMBER 12, 2022", desc: "Our New Miami Beach Hotel Is Open!" },
    ]
    const articalContent = articalArray.map((item, i) => < div key={i} className='col-sm-6 col-md-4'>
        <div class="shadow-lg">

            <div class="card-body">
                <img src={item.img} className='img-fluid' />
                <p>{item.date}</p>
                <p>{item.desc}</p>
            </div>
        </div>
    </ div >)
    return (
        <>
            <div className="container">
                <div class="row">
                    <div className='col-sm-6 offset-sm-3 mt-5'>
                        <div className='text-center'>
                            <p className='text-warning'>OUR BLOG</p>
                            <p className='fs-1'>Articles & News</p>
                        </div>
                    </div>
                </div>
                <div class="row my-5">
                    {articalContent}
                </div>
            </div>
        </>
    )
}

export default ArticalsAndNews