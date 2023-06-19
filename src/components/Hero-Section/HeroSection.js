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
              <h2>Anytime Anywhere Learn on your Suitable
                Schedule
              </h2>
              <p>
                Lorem dsfjdklfjlsdjflsdjflk
                dsfljsdlfjsdkljfldsjfls
                sdfljsfljsklfjsjflsjflsj
                jsdfljsdfljkjkjksdfkljjjjjj
              </p>

              <div className='search'>
                <input type='text' placeholder='Search' />
                <button className='btn' >Search</button>
              </div>
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