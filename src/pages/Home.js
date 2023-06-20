import React, { Fragment } from "react"
import Header from '../components/Header/Header'
import HeroSection from "../components/Hero-Section/HeroSection"
import Company from "../components/Company-section/Company"

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Company />
    </Fragment>
  )
}

export default Home