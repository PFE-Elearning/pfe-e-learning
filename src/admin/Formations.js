import { useEffect, useState } from "react";
import Table from "./compnents/Table";
import axios from "axios";

const Fomations=()=>{
    let [data,setData]=useState([]);
    let [headings,setHeadings]=useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/formation')
        .then(response => {
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
    return(
        <div className="m-4">
            <h2 className="mt-3 mb-3">List of Formations</h2>   
            <div className="w-100 d-flex justify-content-end">
                <button className="btn btn-success rounded-2">Add</button>
            </div>
            <div className="mt-5">
            <Table data={data} headings={headings}/>
            </div>
        </div>
    )
}
export default Fomations;