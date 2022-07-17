import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import About from '../../components/About'
import Product from '../../components/Product'
import Delivery from '../../components/Delivery'
import Testimonial from '../../components/Testimonial'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar /> 
      <Header />
      <About/>
      <Product/>
      <Delivery/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
