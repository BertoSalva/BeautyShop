import React from 'react'
import Hero from './Sections/Hero'
import WhyChoose from './Sections/WhyChoose'
import Pricing from './Sections/Pricing'
import Services from './Sections/Services'
import Gallery from './Sections/Gallery'
import Testimonial from './Sections/Testimonial'
import Contact from './Sections/Contact'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      <Pricing />
      <Services />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App