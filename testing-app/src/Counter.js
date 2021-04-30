import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(0);

  return (
    <div className="App">
      <h1>React Testting</h1>
      <div className="" id="counter-value">
        {counter}
      </div>
      <button id="increment-btn" onClick={() => setcounter(1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
