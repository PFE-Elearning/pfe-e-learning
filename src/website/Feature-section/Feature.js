import react from "react";
import {Container,Row,Col} from 'reactstrap';
import './features.css';
const FeatureData=[
    {
        title:"Quick Learning",
        description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de ... Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de ...",
        icon:'ri-draft-line'
    },
    {
        title:"All Time Support",
        description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de ... Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de ...",
        icon:'ri-discuss-line'
    },
    {
        title:"Certification",
        description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de ... Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de ...",
        icon:'ri-contacts-book-line'
    },
]
const Feature=()=>{
    return(
        <section>
            <Container>
                <Row >
                    {FeatureData.map((item,index)=>{
                    return(
                    <Col lg='4' md='6' key={index}>
                        <div className="single__feature text-center px-4">
                            <h2 className="mb-3">
                                <i className={item.icon}></i>
                            </h2>
                            <h6>{item.title}</h6>
                            <p>
                           {item.description}
                            </p>
                        </div>
                    </Col>
                    )})}
                </Row>
            </Container>
        </section>
    );
}
export default  Feature;