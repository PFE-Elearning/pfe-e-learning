
import react,{Fragment} from "react";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Header from '../components/Header/Header'
import Features from "../components/Feature-section/Feature";
const Home=()=>{
    return(
        <Fragment>
        <Header />
        <Courses />
        <ChooseUs />
        <Features />
        </Fragment>
    );
}
export default Home;

