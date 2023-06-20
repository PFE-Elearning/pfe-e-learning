import React from 'react'
import './company-section.css'
import { Container, Row, Col } from 'reactstrap'

const Company = () => {
  return (
    <section>
      <Row>
        <Col lg='2' md='3'></Col>
          <h2>
            <i className='ri-vimeo-line'></i>
            Vimeo
          </h2>
        <Col lg='2' md='3'>
           <h2>
            <i className='ri-pinterest-line'></i>
            Pinterest
          </h2>
        </Col>

        <Col lg='2' md='3'>
           <h2>
            <i className='ri-dribbble-line'></i>
            Dribble
          </h2>
        </Col>

        <Col lg='2' md='3'>
          <i className='ri-apple-fill'></i>
          Apple
        </Col>

        <Col lg='2' md='3'>
          <i className='ri-finder-fill'></i>
          Finder
        </Col>

        <Col lg='2' md='3'>
          <i className='ri-google-fill'></i>
          Google
        </Col>

      </Row>
    </section>
  )
}

export default Company