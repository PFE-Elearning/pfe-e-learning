import react,{Fragment} from "react";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
const Home=()=>{
    return(
        <Fragment>
        <Courses />
        <ChooseUs />
        </Fragment>
    );
}
export default Home;