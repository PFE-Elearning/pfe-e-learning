import react from 'react'
import Sidebar from './compnents/SideBar'
import { Container, Row, Col } from 'reactstrap'
const AdminHome=()=>{
    return (
        <Container fluid>
        <Row>
          <Col sm={3} md={2} className="bg-light sidebar-wrapper h-100">
            <Sidebar />
          </Col>
          <Col sm={9} md={10} className="">
            <h1>Main Content</h1>
          </Col>
        </Row>
      </Container>
    );
}
export default AdminHome;