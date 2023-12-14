import React, { useState } from "react";
import "../styles/Dashboard1.scss";
export default function Dashboard1() {
  let [values, setValues] = useState("leaves");

  function handleleaves() {
    if (values != "leaves") {
      setValues("leaves");
    }
  }
  function handlepending() {
    if (values != "pending") {
      setValues("pending");
    }
  }
  return (
    <>
      <div className="home-dash"> Dashboard</div>
      <div className="dash-btns">
        <button onClick={handleleaves}>All Leaves</button>
        <button onClick={handlepending}>Pending</button>
      </div>
      {values == "leaves" ? (
        <div className="leaves"> 
        <div>
        
         </div>
        <div> 2</div>
        <div>3</div>
        </div>
      ) : (
        <div className="pending">
          <div className="pending-heading">
            <span>Leave type</span>
            <span>Date Range</span>
            <span>Reason</span>
            <span>Status</span>
          </div>
          <div className="pending-content">
            <div >
              <span>Privileged</span>
              <span>Applied : Dec 10</span>
            </div>
            <div>
              <span>21 Dec - 23 Dec</span>
              <span style={{backgroundColor:"wheat", padding:"5px 7px", borderRadius:"3px"}}> 3 Days</span>
            </div>
            <div>
              <span>Planned Leave</span>Reason
            </div>
            <div> <li style={{color:"darkorange"}}>Approval pending</li></div>
          </div>


          <div className="pending-content">
            <div>
              <span>Privileged</span>
              <span>Applied : Dec 9</span>
            </div>
            <div>
              <span>28 Dec - 28 Dec</span>
              <span style={{backgroundColor:"wheat", padding:"5px 7px", borderRadius:"3px"}}>1 Days</span>
            </div>
            <div>
              <span>Planned Leave</span>Reason
            </div>
            <div> <li style={{color:"darkorange"}}>Approval pending</li></div>
          </div>
        </div>
      )}
    </>
  );
}
