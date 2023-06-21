import react, { useState } from 'react';
import {Container,Row,Col} from 'reactstrap';
import './courses.css';
import CourseCard from './CourseCard';
import CourseImg1 from '../../assets/images/web-design.png';
import CourseImg2 from '../../assets/images/graphics-design.png';
import CourseImg3 from '../../assets/images/ui-ux.png';
const Courses=()=>{
    const [courses,setCourses]=useState([
        {
            id:1,
            imgUrl:CourseImg1,
            title:'Php Course BootCamp',
            lesson:10,
            students:12.3,
            rating:4.5
        },
        {
            id:2,
            imgUrl:CourseImg2,
            title:'Javascript Course BootCamp',
            lesson:12,
            students:12.3,
            rating:4.5
        },
        {
            id:3,
            imgUrl:CourseImg3,
            title:'Python Course BootCamp',
            lesson:9,
            students:12.3,
            rating:4.5
        },
    ]);
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <div className='course__top d-flex justify-content-between align-items-center'>
                            <div className='course__top_left w-50'>
                                <h2>Our Popular Courses</h2>
                                <p>
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de ...
                                </p>
                            </div>
                               <div className='w-50 text-end'>
                               <button className='btn'>
                                    See All
                                </button>
                               </div>
                        </div>
                    </Col>
                    {
                        courses.map(item=>{
                            return(
                                <Col lg='4'>
                                <CourseCard key={item.id} item={item} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    );
}
export default Courses;