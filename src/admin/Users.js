import { useEffect, useState } from "react";
import Table from "./compnents/Table";
import { Container, Col, Row } from "react-bootstrap";
import './users.css';
import axios from "axios";

const Users = () => {
    let [data, setData] = useState([]);
    let [headings, setHeadings] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [showUpdatePopup, setShowUpdatePopup] = useState(false);
    // post variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin');
    const [id,setId]=useState('');
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
        .get("http://127.0.0.1:8000/api/users")
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
        .delete(`http://127.0.0.1:8000/api/users/${id}`)
        .then(response => {
            console.log("Deleted successfully!");
            // Refresh the data after deletion
            fetchData();
        })
        .catch(error => {
            console.error(error);
        });
    };

    const handleAddClick = () => {
        setShowPopup(true);


      };
    const addNewUser=()=>{
        const newUser = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            password: password,
            role: role
          };        
          axios.post('http://127.0.0.1:8000/api/users', newUser)
            .then(response => {
              console.log('User added:', response.data);
              const jsonData = response.data.users;
              setData(jsonData);
            })
            .catch(error => {
                // Handle error
                console.error('Error adding user:', error);
            });
            setShowPopup(false);
    }
    const closePopup=()=>{
        setShowPopup(false);
        setShowUpdatePopup(false);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setPhone('');
            setRole('');
    }
    const handleUpdate=(event)=>{
      setShowUpdatePopup(true);
      setId(event.target.parentNode.parentNode.firstElementChild.innerText);
      let user=data.filter(element=>{
          return element.id==id;
      });
      console.log(user);
      setFirstName(user[0].first_name);
      setLastName(user[0].last_name);
      setEmail(user[0].email);
      setPassword(user[0].password);
      setPhone(user[0].phone);
  }
    const updateUser=()=>{
        const UpdatedUser = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            password: password,
            role: role
          };   
        axios.put('http://127.0.0.1:8000/api/users/'+id, UpdatedUser)
            .then(response => {
              console.log('User added:', response.data);
              const jsonData = response.data.users;
              setData(jsonData);
            })
            .catch(error => {
                // Handle error
                console.error('Error adding user:', error);
            });
            setShowUpdatePopup(false);
    }
    return (
        <div className="m-4">
            <h2 className="mt-3 mb-3">List of Users</h2>
            <div className="w-100 d-flex justify-content-end">
                <button className="btn btn-success rounded-2" onClick={handleAddClick}>Add</button>
            </div>
            <div className="mt-5">
                <Table data={data} headings={headings} onDelete={handleDelete} 
                handleUpdate={handleUpdate}
                />
            </div>
            {showPopup && (
        <div className="popup">
          <div className="popup-content mb-5 h-75">
            <h3 className="text-center mb-4">Add User</h3>
            <div  className="d-flex flex-column justify-content-between h-75">
              <Row>
              <Col>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} required/>
              </div>
              </Col>
              <Col>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}  required/>
              </div>
              </Col>
              </Row>
             <Row>
            <Col>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/>
              </div>
              </Col>
              <Col>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)}  required/>
              </div>
              </Col>
             </Row>
             <Row>
             <Col>
             <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}  required/>
              </div>
             </Col>
             <Col>
             <div>
                <label htmlFor="role">Role:</label>
                <select id="role" name="role" value={role} onChange={e => setRole(e.target.value)} required>
                  <option value="admin">Admin</option>
                  <option value="student">Student</option>
                  <option value="formateur">Formateur</option>
                </select>
              </div>
             </Col>
             </Row>
             <Row>
           <Col>
           <button className="btn bg-danger rounded-2 w-100 h-100" onClick={closePopup}>
              Close
            </button>
           </Col>
             <Col>
             <button className="btn w-100 bg-success rounded-2" onClick={
                addNewUser
             } >Submit</button>
             </Col>
             </Row>
            </div>
          </div>
        </div>
      )}
      {showUpdatePopup && (
        <div className="popup">
          <div className="popup-content mb-5 h-75">
            <h3 className="text-center mb-4">Add User</h3>
            <div  className="d-flex flex-column justify-content-between h-75">
              <Row>
              <Col>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} required/>
              </div>
              </Col>
              <Col>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}  required/>
              </div>
              </Col>
              </Row>
             <Row>
            <Col>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/>
              </div>
              </Col>
              <Col>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)}  required/>
              </div>
              </Col>
             </Row>
             <Row>
             <Col>
             <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}  required/>
              </div>
             </Col>
             <Col>
             <div>
                <label htmlFor="role">Role:</label>
                <select id="role" name="role" value={role} onChange={e => setRole(e.target.value)} required>
                  <option value="admin">Admin</option>
                  <option value="student">Student</option>
                  <option value="formateur">Formateur</option>
                </select>
              </div>
             </Col>
             </Row>
             <Row>
           <Col>
           <button className="btn bg-danger rounded-2 w-100 h-100" onClick={closePopup}>
              Close
            </button>
           </Col>
             <Col>
             <button className="btn w-100 bg-success rounded-2" onClick={
                updateUser
             } >Update</button>
             </Col>
             </Row>
            </div>
          </div>
        </div>
      )}
        </div>
    )
}
export default Users;