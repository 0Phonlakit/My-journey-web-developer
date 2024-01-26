import React, { useState } from "react";

function App() {
    setInterval(resetTime, 1000);

    let times = new Date().toLocaleTimeString();
    const [time, setTime] = useState(times);

function resetTime(){
    const newTimes = new Date().toLocaleTimeString();
    setTime(newTimes);
}

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={resetTime}>Get Time</button>
    </div>
  );
}

export default App;
