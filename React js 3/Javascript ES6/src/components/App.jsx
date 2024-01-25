import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function CreateDic(emojiItem){
  return <Entry 
  key ={emojiItem.id}
  emoji ={emojiItem.emoji}
  name ={emojiItem.name}
  meaning ={emojiItem.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(CreateDic)};
      </dl>
    </div>
  );
}

export default App;
