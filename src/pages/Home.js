import react,{Fragment} from "react";
import Courses from "../website/Courses-section/Courses";
import ChooseUs from "../website/Choose-us/ChooseUs";
import Header from '../website/Header/Header'
import Company from "../website/Company-section/Company"
import HeroSection from "../website/Hero-Section/HeroSection";
import Features from "../website/Feature-section/Feature";
import FreeCourse from "../website/Free-course-section/FreeCourse";
import Testimonial from "../website/Testimonial/Testimontials";
import Newsletter from "../website/Newsletter/Newsletter";
import Footer from "../website/Footer/Footer";
const Home=()=>{
    return(
        <Fragment>
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
        </Fragment>
    );
}
export default Home;


