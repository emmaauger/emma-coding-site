import React, { useState } from "react";
import "./Menu.css";

export default function Menu(props) {
  console.log("help");
  const [test, setTest] = useState(null);

  return (
    <div>
      <button
        className="menuItem"
        value={0}
        onClick={(e) => setTest(e.target.value)}
      >
        EEG
      </button>
      <button
        className="menuItem"
        value={1}
        onClick={(e) => setTest(e.target.value)}
      >
        MRI
      </button>
      <button
        className="menuItem"
        value={2}
        onClick={(e) => setTest(e.target.value)}
      >
        Machine Learning
      </button>
      <button
        className="menuItem"
        value={3}
        onClick={(e) => setTest(e.target.value)}
      >
        Data Visualization
      </button>
      <h2>{test}</h2>
    </div>
  );
}
