import Courses from "./Courses-section/Courses";
import ChooseUs from "./Choose-us/ChooseUs";
import Header from './Header/Header'
import Company from "./Company-section/Company"
import HeroSection from "./Hero-Section/HeroSection";
import Features from "./Feature-section/Feature";
import FreeCourse from "./Free-course-section/FreeCourse";
import Testimonial from "./Testimonial/Testimontials";
import Newsletter from "./Newsletter/Newsletter";
import Footer from "./Footer/Footer";
const WebsiteHome=()=>{
    return(
        <>
        <Header />
        <HeroSection />
        <Company />
        <Courses />
        <ChooseUs />
        <Features />
        <FreeCourse />
        <Testimonial />
        <Newsletter />
        <Footer /> 
        </>
    );
}
export default WebsiteHome;