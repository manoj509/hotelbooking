import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminAddRooms, adminGetRooms } from '../../redux/admin/adminAction'

const AddRooms = () => {
    const dispatch = useDispatch()
    const { rooms, roomsAdded, roomdeleted, } = useSelector(state => state.admin)
    const { } = useSelector(state => state.public)
    const [roomsData, setroomsData] = useState({
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        title: "Double Room",
        fet: "20 m2Balcony | Lake view",
        desc: "All our Deluxe rooms have big windows to help you take a broad view of the cityscape and nature. We offer bigger bed and every",
        price: +1211,
    })

    useEffect(() => {
        dispatch(adminGetRooms())
    }, [])
    return (
        <>

            <div className='text-center mb-5'>
                <h1>   ADD NEW ROOMS</h1>
            </div>
            <div className="container">
                <div className="row my-5 ">
                    <div className="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <div>
                                    <label for="title" class="form-label">Title</label>
                                    <input
                                        type="text"
                                        value={roomsData.title}
                                        onChange={e => setroomsData({ ...roomsData, title: e.target.value })}
                                        class="form-control"
                                        id="title"
                                        placeholder="Enter Your title"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="fet" class="form-label">Features</label>
                                    <input
                                        type="fet"
                                        value={roomsData.fet}
                                        onChange={e => setroomsData({ ...roomsData, fet: e.target.value })}
                                        class="form-control"
                                        id="fet"
                                        placeholder="Enter  features"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div>
                                    <label for="desc" class="form-label">Description</label>
                                    <input
                                        type="text"
                                        value={roomsData.desc}
                                        onChange={e => setroomsData({ ...roomsData, desc: e.target.value })}
                                        class="form-control"
                                        id="desc"
                                        placeholder="Enter Your description"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="price" class="form-label">Price</label>
                                    <input
                                        type="price"
                                        value={roomsData.price}
                                        onChange={e => setroomsData({ ...roomsData, price: +e.target.value })}
                                        class="form-control"
                                        id="price"
                                        placeholder="Enter Your price"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="img" class="form-label">image Url</label>
                                    <input
                                        type="img"
                                        value={roomsData.img}
                                        onChange={e => setroomsData({ ...roomsData, img: e.target.value })}
                                        class="form-control"
                                        id="img"
                                        placeholder="Enter img url"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <button onClick={e => dispatch(adminAddRooms(roomsData))} type="button" class="btn btn-primary form-control mt-3">Add Rooms</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <br />
            <button onClick={e => dispatch(adminDeleteRoom(rooms[0]._id))} type="button" class="btn btn-primary">delete </button ><br /> */}
        </>
    )
}

export default AddRooms