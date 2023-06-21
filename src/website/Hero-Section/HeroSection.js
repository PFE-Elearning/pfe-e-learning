import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './hero-section.css'
import heroImg from '../../assets/images/hero-img1.png'

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <h2 className='mb-4'>
                Anytime Anywhere <br /> Learn on your <br />Suitable
                Schedule
              </h2>
              <p className='mb-4'>
                Le Lorem Ipsum est simplement <br/> faux texte employé dans la  la mise  <br/> en page avant impression.<br/> Le Lorem Ipsum est le faux<br/>texte standard de l'imprimerie
              </p>
            </div>
            <div className='search d-flex justify-content-between w-75 p-1'>
              <input type='text' placeholder='Search' />
              <button className='btn' >Search</button>
            </div>
          </Col>

          <Col>
            <img src={heroImg} alt='' className='w-100' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection 