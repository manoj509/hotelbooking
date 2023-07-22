import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './public/pages/Home'
import PublicLayout from './public/PublicLayout'
import Navbar from './public/components/Navbar'
import RoomsOption from './public/components/RoomsOption'
import Services from './public/pages/Services'
import Register from './public/pages/Register'
import Login from './public/pages/Login'
import AdminLayout from './admin/AdminLayout'
import Dashbord from './admin/pages/Dashbord'
import Protected from './sharedComponents/Protected'
import SingleRoomContent from './public/components/SingleRoomContent'
import AllRooms from './admin/components/AllRooms'
import AddRooms from './admin/components/AddRooms'
import ViewUSers from './admin/components/ViewUSers'
import ViewBookedRooms from './admin/components/ViewBookedRooms'
import SeeDetails from './public/components/SeeDetails'
import SingleAllRoomDetails from './public/components/SingleAllRoomDetails'
import UserProtected from './sharedComponents/UserProtected'
import UserLayout from './user/UserLayout'
import Userhistory from './user/Userhistory'
import Settings from './user/pages/Settings'
import Contact from './public/pages/Contact'
import Page_not_found from './public/pages/Page_not_found'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path='rooms' element={<RoomsOption />} />
            <Route path='services' element={<Services />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='contact' element={<Contact />} />
            <Route path='singleRoom/:id' element={<SingleRoomContent />} />
            <Route path='seedetail/:id' element={<SeeDetails />} />
            <Route path='singleAllRoom/:id' element={<SingleAllRoomDetails />} />
          </Route>
          {/* <Route path="appointment" element={<Protected compo={<Appointment />} />} /> */}
          {/* </Route> */}
          <Route path='/user' element={<UserProtected compo={<UserLayout />} />}>
            <Route index element={<Userhistory />} />
            <Route path='settings' element={<Settings />} />

          </Route>

          <Route path='/admin' element={<Protected compo={<AdminLayout />} />}>
            <Route index element={<Dashbord />} />
            <Route path='allrooms' element={< AllRooms />} />
            <Route path='adminViewUsers' element={<ViewUSers />} />
            <Route path='adminViewBooking' element={<ViewBookedRooms />} />
            <Route path='adminAddRooms' element={<AddRooms />} />
          </Route>
          <Route path='*' element={<Page_not_found />} />
        </Routes >
      </BrowserRouter >
    </>
  )
}

export default App