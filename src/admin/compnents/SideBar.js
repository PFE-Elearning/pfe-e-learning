import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                <Nav.Link className=" fs-5 text-dark" >
                    <Link to="/admin/dashboard">Dashboard</Link>
                </Nav.Link>
                <Nav.Link className="mt-3 fs-5 text-dark" >
                <Link to="/admin/formations">Formations</Link>
                </Nav.Link>
                <Nav.Link className="mt-3 fs-5 text-dark" >
                <Link to="/admin/blogs">Blogs</Link>
                </Nav.Link>
                <Nav.Link className="mt-3 fs-5 text-dark" >
                <Link to="/admin/settings">Settings</Link>
                </Nav.Link>
            </Nav>
        </header>
  );
};

export default Sidebar;