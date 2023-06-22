import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Table from "./compnents/Table";
import axios from "axios";

const Dashboard = () => {
    let [data, setData] = useState([]);
    let [headings, setHeadings] = useState([]);
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
    const handleDelete=()=>{}
    const handleUpdate=()=>{}
  return (
    <div className="content m-4">
      <div className="d-flex justify-content-between">
       { [1,2,3].map(element=>{
            return (
      <div className="">
      <div className="container-fluid">
        <div className="row">
          <div className="">
            <div className="card card-chart">
              <div className="card-header card-header-success">
                <div className="ct-chart" id="dailySalesChart"></div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Daily Sales</h4>
                <p className="card-category">
                  <span className="text-success">
                    <i className="fa fa-long-arrow-up"></i> 55%{" "}
                  </span>{" "}
                  increase in today sales.
                </p>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">access_time</i> updated 4
                  minutes ago
                </div>
              </div>
            </div>
          </div>
          {/* ... */}
          {/* Rest of the HTML structure */}
          {/* ... */}
        </div>
      </div>
      </div>)})}
      </div>
      <div className="container mt-4">
      <Table data={data} headings={headings} handleDelete={handleDelete} 
                handleUpdate={handleUpdate}
       />
      </div>
    </div>
  );
};

export default Dashboard;
