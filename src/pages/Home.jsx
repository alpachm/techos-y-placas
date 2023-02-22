import React, { useRef } from 'react'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Gallery from '../components/Gallery'
import Main from '../components/Main'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Footer from '../shared/Footer'
import Header from '../shared/Header'
import IconsFloat from '../shared/IconsFloat'

const Home = ({ setShowFloatForm }) => {

    const servicesHomeSection = useRef()
    const aboutUsSection = useRef()
    const contactSection = useRef()

    const scrollToServicesHome = () => servicesHomeSection.current.scrollIntoView()

    return (
        <div className='home'>
            <IconsFloat setShowFloatForm={setShowFloatForm} />
            <Header />
            <Main />
            <AboutUs />
            <Services />
            <Gallery />
            <Experience />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home