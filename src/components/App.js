
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count , setCount] = useState(0);
  const incrementCount = () => {
      setCount(count + 1);
  }
  return (
    <div>
        <p>Button clicked {count} times</p>
        <button onClick={incrementCount}></button>
    </div>
  )
}

export default App
