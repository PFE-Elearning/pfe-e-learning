import react,{Fragment} from "react";

import AdminHome from "../admin/AdminHome";
import WebsiteHome from "../website/WebsiteHome";
import { Route,Routes, useLocation } from "react-router";
const Home=()=>{
    return(
        <Fragment>
        <Routes>
            <Route path="/home" element={<WebsiteHome />} />
            <Route path="/" element={<AdminHome />} />
            <Route path="/admin/dashboard" element={<AdminHome />}/>
            <Route path="/admin/formations" element={<AdminHome />}/>
            <Route path="/admin/settings" element={<AdminHome />}/>
            <Route path="/admin/users" element={<AdminHome />}/>
            <Route path="/admin/blogs" element={<AdminHome />}/>
        </Routes>
        </Fragment>
    );
}
export default Home;


