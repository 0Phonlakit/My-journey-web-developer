import React from "react";

function Note(prop) {
    function handleClick() {
        prop.deleteNote(prop.id)
    }

    return (
    <div className="note">
        <h1> {prop.title} </h1>
        <p> {prop.content} </p>
        <button onClick={handleClick}> DELETE </button>
    </div>
);
}

export default Note;