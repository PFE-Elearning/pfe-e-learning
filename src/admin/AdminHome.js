import react from 'react'
import Sidebar from './compnents/SideBar'
import Dashboard from './Dashboard'
import Formations from './Formations'
import { Route,Routes, useLocation } from 'react-router'
import Blogs from './Blogs'
import Settings from './Settings'
import { Container, Row, Col } from 'reactstrap'
const AdminHome=()=>{
    return (
        <Container fluid>
        <Row>
          <Col sm={3} md={2} className="bg-light sidebar-wrapper h-100">
            <Sidebar />
          </Col>
          <Col sm={9} md={10} className="">
             {
              useLocation().pathname=='/admin/dashboard' && <Dashboard />
             }
             {
              useLocation().pathname=='/admin/formations' && <Formations />
             }
             {
              useLocation().pathname=='/admin/blogs' && <Blogs />
             }
             {
              useLocation().pathname=='/admin/settings' && <Settings />
             }
          </Col>
        </Row>
      </Container>
    );
}
export default AdminHome;