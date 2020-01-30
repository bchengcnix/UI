import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [currentAmount, setCurrentAmount] = useState(0);
  const [startAmount, setStartAmount] = useState(0);

  return (
    <div className="App">
      <h1>TRADER</h1>
      <p>Current $: {currentAmount}</p>
      <p>Start $: {startAmount}</p>
      <button>START</button>
    </div>
  );
};

export default App;
