import React, { Fragment } from "react"
import Header from '../components/Header/Header'
import HeroSection from "../components/Hero-Section/HeroSection"
import Company from "../components/Company-section/Company"
import AboutUs from "../components/About-us/AboutUs"

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Company />
      <AboutUs />
    </Fragment>
  )
}

export default Home