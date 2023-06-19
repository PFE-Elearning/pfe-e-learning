
import react,{Fragment} from "react";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Header from '../components/Header/Header'
const Home=()=>{
    return(
        <Fragment>
        <Header />
        <Courses />
        <ChooseUs />
        </Fragment>
    );
}
export default Home;

