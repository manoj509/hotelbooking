import React from 'react'
import Hero from '../components/Hero'
import HotelInfo from '../components/HotelInfo'
import RoomsOption from '../components/RoomsOption'
import HotelDescription from '../components/HotelDescription'
import Reviews from '../components/Reviews'
import ArticalsAndNews from '../components/ArticalsAndNews'
import { ContactContent } from './Contact'

const Home = () => {
    return (
        <>
            <Hero />
            <RoomsOption />
            <HotelDescription />z
            <HotelInfo />
            <ArticalsAndNews />
            <Reviews />
            <ContactContent />

        </>
    )
}

export default Home