import { useEffect, useState } from "react";
import Table from "./compnents/Table";
import axios from "axios";
const Users = () => {
    let [data, setData] = useState([]);
    let [headings, setHeadings] = useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/users')
        .then(json=>{
            setData(json.data.data);
            // setHeadings(Object.keys(data[0]));
        })
    },[]);
    return(
        <div className="m-4">
            <h2 className="mt-3 mb-3">List of Users</h2>
            <div className="w-100 d-flex justify-content-end">
                <button className="btn btn-success rounded-2">Add</button>
            </div>
            <div className="mt-5">
                <Table data={data} headings={headings} />
            </div>
        </div>
    )
}
export default Users;