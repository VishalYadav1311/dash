import React, { useState } from "react";
import Dashboard1 from "./Dashboard1";
import Dashboard2 from "./Dashboard2";
import Dashboard3 from "./Dashboard3";
import "../styles/Home.scss";
export default function Home() {
  let [value, setValue] = useState("one");
  function handleclick(e) {
    if (value != "one") {
      setValue("one");
    }
    const ele = document.getElementsByClassName("active");
    console.log(ele);
    for (let i of ele) {
      i.className = i.className.replace("active", "");
    }
    e.target.className += " active";
  }
  function handleclick2(e) {
    if (value != "two") {
      setValue("two");
    }
    const ele = document.getElementsByClassName("active");
    console.log(ele);
    for (let i of ele) {
      i.className = i.className.replace("active", "");
    }
    e.target.className += " active";
  }
  function handleclick3(e) {
    if (value != "third") {
      setValue("third");
    }
    const ele = document.getElementsByClassName("active");
    console.log(ele);
    for (let i of ele) {
      i.className = i.className.replace("active", "");
    }
    e.target.className += " active";
  }
 const [expanded,setExpanded]=useState("false");
 
 const handleMouseOver = () => {
    setExpanded(true);
  };

  const handleMouseOut = () => {
    setExpanded(false);
  };

  return (
    <div className="home">
      <div
      className={`left-sidebar ${expanded ? 'expanded' : ''}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
        <button className="dashboard-btn sidebar-btns active" onClick={handleclick}><div></div> <span> Dashboard</span></button>
        <button className="myleaves-btn sidebar-btns" onClick={handleclick2}><div>22</div><span> My Leaves</span></button>
        <button className="applyleave-btn sidebar-btns" onClick={handleclick3}><div>33</div><span> Apply Leaves</span></button>
      </div>

      <div className="right-sidebar">
        {value == "one" ? (
          <Dashboard1></Dashboard1>
        ) : value == "two" ? (
          <Dashboard2></Dashboard2>
        ) : (
          <Dashboard3></Dashboard3>
        )}
      </div>
    </div>
  );
}
