import React, { useState } from "react";

function App() {

    const [headingText, setHeadingText] = useState("Hello");
    const [isMousedOver, setMouseOver] = useState(false);

    function handleClick(){
        setHeadingText("Submitted");
    }

    function mouseDetectOver(){
        setMouseOver(true);
    }

    function mouseDetectOut(){
        setMouseOver(false);
    }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style={{ backgroundColor: isMousedOver ? "black" : "white"}}
      onClick={handleClick} 
      onMouseOver={mouseDetectOver} 
      onMouseOut={mouseDetectOut}> Submit </button>
    </div>
  );
}

export default App;


