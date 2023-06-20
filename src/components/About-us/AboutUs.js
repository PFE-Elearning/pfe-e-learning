import React from 'react'
import './about.css'
import { Container, Row, Col } from 'reactstrap'
import aboutImg from '../../assets/images/about-us.png'
import CountUp from 'react-countup'
// import CountUp from 'react-countup/build/CountUp'

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='about__img'>
              <img src={aboutImg} alt='' 
              className='w-100'/>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className='about__content'>
              <h2>About Us</h2>
              <p>Lorem Ipsum est simplement
                faux texte employé dans la la mise
                en page avant impression.
                Le Lorem Ipsum est le faux
                texte standard de l'imprimerie
              </p>

              <div className='about__counter'>
                <div className='single__counter'>
                  <span className='counter'>

                  </span>
                </div>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default AboutUs