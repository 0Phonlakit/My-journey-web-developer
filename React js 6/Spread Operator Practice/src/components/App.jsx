import React, { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItem] = useState([]);

  function headleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  function addList(event) {
    setItem ((prevItems) => {
      return [
        ...prevItems,
        inputText
      ]
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={headleChange} type="text" name="message" value={inputText}/>
        <button onClick={addList} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          { 
          items.map((addLists) => (
            <li> {addLists} </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
