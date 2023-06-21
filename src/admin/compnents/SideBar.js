import React from 'react';
import { Nav } from 'react-bootstrap';

import './SideBar.css'
const Sidebar = () => {
  return (
        <header className="sidebar">
            <div className="h-25 d-flex align-items-center">
                <h3 className='d-flex align-items-center justify-content-center'>
                <i className="ri-pantone-line"></i> Learners.
                </h3>
            </div>
            <Nav className="flex-column ">
                <Nav.Link className=" fs-5 text-dark" href="#home">Home</Nav.Link>
                <Nav.Link className="mt-3 fs-5 text-dark" href="#about">About</Nav.Link>
                <Nav.Link className="mt-3 fs-5 text-dark" href="#services">Services</Nav.Link>
                <Nav.Link className="mt-3 fs-5 text-dark" href="#contact">Contact</Nav.Link>
            </Nav>
        </header>
  );
};

export default Sidebar;