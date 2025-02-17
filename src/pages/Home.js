
import React from 'react'
import OfferSection from '../components/OfferSection'
import SocialSection from '../components/SocialSection'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import BestDealsSection from '../components/BestDealsSection'
import Footer from '../components/Footer'

export const Home = () => {
    return (
        <div>
            <OfferSection />
            <SocialSection />
            <Header />
            <Navbar />
            <BestDealsSection />
            <Footer />
        </div>
    )
}
