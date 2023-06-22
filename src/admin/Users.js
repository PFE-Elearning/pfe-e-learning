import { useEffect, useState } from "react";
import Table from "./compnents/Table";
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
        setShowPopup(true); // Show the popup when Add button is clicked
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
          <div className="popup-content">
            <h3>Add User</h3>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              {/* Add more form fields as needed */}
              <button type="submit">Submit</button>
            </form>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
        </div>
    )
}
export default Users;