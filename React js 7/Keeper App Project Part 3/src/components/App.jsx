import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [note, setNote] = useState([]);

  function addNote(newNote) {
    setNote(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNote(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea add={addNote}/>
      {note.map((noteItem, index) => {
        return (<Note
              key={index}
              id={index}
              title = {noteItem.title}
              content = {noteItem.content}
              deleteNote = {deleteNote}
            />
            )
          }
        )}
      <Footer />
    </div>
  );
}

export default App;
