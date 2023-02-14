import React from 'react'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Gallery from '../components/Gallery'
import Main from '../components/Main'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

const Home = ({ setRegistroForm }) => {
    return (
        <div className='home'>
            <Main />
            <AboutUs />
            <Services />
            <Gallery />
            <Experience />
            <Testimonials />
            <Contact setRegistroForm={setRegistroForm} />
        </div>
    )
}

export default Home