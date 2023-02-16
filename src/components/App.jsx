import React, { useState } from "react";
import Todoitem from "./Todoitem";
import Inputarea from "./Inputarea";

function App() {
  const [items, setitems] = useState([]);

  function additems(inputtext) {
    setitems( (prevItems) => {
      return [...prevItems, inputtext];
    });
  }

  function  deleteitems(id) {
    setitems( (prevItems) => {
      return prevItems.filter( (element,index) => {
        return index !== id;
      })
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Inputarea onadd = {additems} />
      <div>
        <ul>
          {items.map((item,index) => {
            return <Todoitem key = {index} id = {index} onChecked = {deleteitems} text = {item} />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
