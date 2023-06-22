import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SideBar.css'
const Sidebar = () => {
  return (
        <header className="sidebar">
            <div className="h-25 d-flex align-items-center">
                <h3 className='d-flex align-items-center justify-content-center'>
                <i className="ri-pantone-line "></i> 
                <Link to='/home' className='text-decoration-none text-dark'>Learners.</Link>
                </h3>
            </div>
            <Nav className="flex-column ">
                <Nav.Link className=" fs-5 text-dark" >
                    <Link className='text-decoration-none' to="/admin/dashboard" style={{ color: '#17bf9e' }}>Dashboard</Link>
                </Nav.Link>
                <Nav.Link className="mt-3 fs-5 text-dark" >
                <Link className='text-decoration-none' to="/admin/formations" style={{ color: '#17bf9e' }}>Formations</Link>
                </Nav.Link>
                <Nav.Link className="mt-3 fs-5 text-dark" >
                <Link className='text-decoration-none' to="/admin/blogs" style={{ color: '#17bf9e' }}>Blogs</Link>
                </Nav.Link>
                <Nav.Link className="mt-3 fs-5 text-dark" >
                <Link className='text-decoration-none' to="/admin/users" style={{ color: '#17bf9e' }}>Users</Link>
                </Nav.Link>
                <Nav.Link className="mt-3 fs-5 text-dark" >
                <Link className='text-decoration-none' to="/admin/settings" style={{ color: '#17bf9e' }}>Settings</Link>
                </Nav.Link>
            </Nav>
        </header>
  );
};

export default Sidebar;