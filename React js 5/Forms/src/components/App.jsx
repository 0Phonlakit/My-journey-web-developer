import React, { useState } from "react";

function App() {

    const [name, setName] = useState("");
    const [handleText, setHandleText] = useState("");

    function handleChange(event){
        console.log(event.target.value);
        setName(event.target.value);
    }

    function handleClick(event){
        setHandleText(name);

        // event.preventDefault();
    }

  return (
    <div className="container">
      <h1>Hello {handleText}</h1>
      <input 
      onChange={handleChange} 
      type="text" 
      placeholder="What's your name?"
      value={name} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
