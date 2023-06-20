import React, { Fragment } from "react";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Testimonial from "../components/Testimonial/Testimontials";
import Newsletter from "../components/Newsletter/Newsletter";
const Home = () => {
  return (
    <Fragment>
    <FreeCourse />
    <Testimonial />
    <Newsletter />

      
    </Fragment>
  );
};

export default Home;
