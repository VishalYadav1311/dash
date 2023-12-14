import React, { useState } from "react";
import Dashboard1 from "./Dashboard1";
import Dashboard2 from "./Dashboard2";
import Dashboard3 from "./Dashboard3";
import "../styles/Home.scss";
export default function Home() {
  let [value, setValue] = useState("one");
  function handleclick() {
    if (value != "one") {
      setValue("one");
    }
  }
  function handleclick2() {
    if (value != "two") {
      setValue("two");
    }
  }
  function handleclick3() {
    if (value != "third") {
      setValue("third");
    }
  }
  return (
    <div className="home">
      <div className="left-sidebar">
        <button onClick={handleclick}>1</button>
        <button onClick={handleclick2}>2</button>
        <button onClick={handleclick3}>3</button>
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
