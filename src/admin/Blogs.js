import { useEffect, useState } from "react";
import Table from "./compnents/Table";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";

const Blogs = () => {
    let [data, setData] = useState([]);
    let [headings, setHeadings] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const addNewPost=()=>{
        const newPost = {
            title: title,
            post: post,
          };        
          axios.post('http://127.0.0.1:8000/api/blogs', newPost)
            .then(response => {
              console.log('User added:', response.data);
              const jsonData = response.data.blogs;
              setData(jsonData);
            })
            .catch(error => {
                // Handle error
                console.error('Error adding user:', error);
            });
            setShowPopup(false);
    }
    const handleAddClick = () => {
        setShowPopup(true);
        };
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
        .get("http://127.0.0.1:8000/api/blogs")
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
    };

    const handleDelete = id => {
        axios
        .delete(`http://127.0.0.1:8000/api/blogs/${id}`)
        .then(response => {
            console.log("Deleted successfully!");
            // Refresh the data after deletion
            fetchData();
        })
        .catch(error => {
            console.error(error);
        });
    };
    
    return (
        <div className="m-4">
            <h2 className="mt-3 mb-3">List of Blogs</h2>
            <div className="w-100 d-flex justify-content-end">
                <button className="btn btn-success rounded-2" onClick={handleAddClick}>Add</button>
            </div>
            <div className="mt-5">
                <Table data={data} headings={headings} onDelete={handleDelete}/>
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content mb-5 h-75">
                        <h3 className="text-center mb-4">Add blog</h3>
                        <div className="d-flex flex-column justify-content-between h-75">
                            <Row>
                                <Col>
                                    <div>
                                        <label htmlFor="title">Title :</label>
                                        <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <label htmlFor="post">Post :</label>
                                        <input type="text" id="post" name="post" value={post} onChange={e => setPost(e.target.value)}/>
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
                                    <button className="btn w-100 bg-success rounded-2" type="submit" onClick={addNewPost}>Submit</button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Blogs;
