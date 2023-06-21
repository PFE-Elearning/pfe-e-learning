import { useState } from "react";
import Table from "./compnents/Table";

const Users=()=>{
    let [data,setData]=useState([
        {
            'id':1,
            'name':"hassan",
            'prenom':"hassani",
            'city':"agadir",
        },
        {
            'id':2,
            'name':"rachid",
            'prenom':"hassani",
            'city':"agadir",
        },
        {
            'id':3,
            'name':"amir",
            'prenom':"hassani",
            'city':"agadir",
        },
    ])
    return(
        <div className="m-4">
            <h2 className="mt-3 mb-3">List of Users</h2>
            <div className="w-100 d-flex justify-content-end">
                <button className="btn btn-success rounded-2 ">Add</button>
            </div>
            <Table data={data} />
        </div>
    )
}
export default Users;