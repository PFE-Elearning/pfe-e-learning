import { useEffect, useState } from "react";
import Table from "./compnents/Table";
import { Container, Col, Row } from "react-bootstrap";

import axios from "axios";
const Blogs = () => {
    let [data, setData] = useState([]);
    let [headings, setHeadings] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/blogs')
            .then(response => {
                console.log(response.data)
                const jsonData = response.data.data;
                setData(jsonData);
                if (jsonData.length > 0) {
                    const keys = Object.keys(jsonData[0]);
                    setHeadings(keys);
                    // Perform actions with the keys and data
                }
            })
            .catch(error => {
                // Handle any errors that occur during the API request
                console.error(error);
            });
    }, []);
    const handleAddClick = () => {
        setShowPopup(true);
        };
    return (
        <div className="m-4">
            <h2 className="mt-3 mb-3">List of Blogs</h2>
            <div className="w-100 d-flex justify-content-end">
                <button className="btn btn-success rounded-2" onClick={handleAddClick}>Add</button>
            </div>
            <div className="mt-5">
                <Table data={data} headings={headings} />
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content mb-5 h-75">
                        <h3 className="text-center mb-4">Add blog</h3>
                        <form className="d-flex flex-column justify-content-between h-75">
                            <Row>
                                <Col>
                                    <div>
                                        <label htmlFor="firstName">title :</label>
                                        <input type="text" id="firstName" name="firstName" />
                                    </div>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        {/* <label htmlFor="firstName">title :</label> */}
                                        <textarea className="w-100" id="firstName" name="firstName" placeholder=" creer un Post">

                                        </textarea>
                                        {/* <input type="text" id="firstName" name="firstName" /> */}
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
export default Blogs;
