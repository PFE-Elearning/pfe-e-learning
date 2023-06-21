import react,{useState} from "react";
import {Container,Row,Col} from 'reactstrap'
import './choose-us.css';
import ReactPlayer from "react-player";
import ChooseImg from '../../assets/images/why-choose-us.png'
const ChooseUs=()=>{
    const [showVideo,setShowVideo]=useState(false);
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='choose__content'>
                            <h2>Why Choose Us</h2>
                            <p>
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de ...
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de ...
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de ...
                            </p>

                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="choose__img">
                            {
                            showVideo?
                            <ReactPlayer 
                            url="https://www.youtube.com/watch?v=_g45BJCAXu4" 
                            controls
                            width="100%" height="300px"
                            />:
                            <img src={ChooseImg} 
                            alt="" 
                            className="w-100"
                            
                            />
                            }
                            {
                                !showVideo && (
                                    <span className="play__icon">
                                <i className="ri-play-circle-line"
                                onClick={()=>{
                                    setShowVideo(false)
                                }}
                                ></i>
                            </span>
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default ChooseUs;