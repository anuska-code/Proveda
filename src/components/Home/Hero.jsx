import React from 'react'
import styles from './Hero.module.css'
import SliderMain from '../Slider/SliderMain'
import Content from '../Content/Content'
import TestimonialsMain from '../Proveda/TestimonialsMain'
import ProductCategories from '../ProductCategories/ProductCategories'
import Contact from '../Contact/Contact'

const Hero = () => {
  return (
    <>
    <SliderMain/>
    <Content/>
    <ProductCategories/>
    <Contact/>
    <TestimonialsMain/>
    </>
  )
}

export default Hero