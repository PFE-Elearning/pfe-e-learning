import { useEffect, useState } from "react";
import Table from "./compnents/Table";
import { Container, Col, Row } from "react-bootstrap";
import './users.css';
import axios from "axios";
const Users = () => {
    let [data, setData] = useState([]);
    let [headings, setHeadings] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/users')
            .then(response => {
                const jsonData = response.data.data;
                setData(jsonData);
                if (jsonData.length > 0) {
                    const keys = Object.keys(jsonData[0]);
                    setHeadings(keys);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const handleAddClick = () => {
        setShowPopup(true);
    };
    return (
        <div className="m-4">
            <h2 className="mt-3 mb-3">List of Users</h2>
            <div className="w-100 d-flex justify-content-end">
                <button className="btn btn-success rounded-2" onClick={handleAddClick}>Add</button>
            </div>
            <div className="mt-5">
                <Table data={data} headings={headings} />
                <Table data={data} headings={headings} />
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content mb-5 h-75">
                        <h3 className="text-center mb-4">Add User</h3>
                        <form className="d-flex flex-column justify-content-between h-75">
                            <Row>
                                <Col>
                                    <div>
                                        <label htmlFor="firstName">First Name:</label>
                                        <input type="text" id="firstName" name="firstName" />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <label htmlFor="lastName">Last Name:</label>
                                        <input type="text" id="lastName" name="lastName" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <label htmlFor="phone">Phone:</label>
                                        <input type="text" id="phone" name="phone" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label htmlFor="password">Password:</label>
                                        <input type="password" id="password" name="password" />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <label htmlFor="role">Role:</label>
                                        <select id="role" name="role">
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <button className="btn bg-danger rounded-2 w-100 h-100" onClick={() => setShowPopup(false)}>
                                        Close
                                    </button>
                                </Col>
                                <Col>
                                    <button className="btn w-100 bg-success rounded-2" type="submit">Submit</button>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Users;