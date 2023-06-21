import React, {Fragment} from "react";
import Header from '../components/Header/Header'
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import HeroSection from '../components/Hero-Section/HeroSection'
import Company from "../components/Company-section/Company"
import AboutUs from "../components/About-us/AboutUs"
import Feature from "../components/Feature-section/Feature"
import FreeCourse from "../components/Free-course-section/FreeCourse"

const Home=()=>{
  return(
    <Fragment>
      <Header />
      <HeroSection />
      <Company />
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Feature />
      <FreeCourse />
    </Fragment>
  );
}
export default Home;
