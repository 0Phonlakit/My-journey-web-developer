import React, { useState } from "react";

function InputArea(props) {

    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const Value = event.target.value;
        setInputText(Value);
    }

  return (
    <div className="form" >
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={() => {
        props.add(inputText);
        setInputText("");
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
