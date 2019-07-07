import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Purchase Summary</h1>
      <h2>
        Key UI elements:
        <br />
        The “Pickup savings” tooltip:
        <br />
        The “See Item details” expander:
        <br />
        The “Apply Promo code” expander:
        <br />
      </h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
