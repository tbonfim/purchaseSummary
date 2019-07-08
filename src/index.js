import React from "react";
import ReactDOM from "react-dom";
import PurchaseSummary from './components/PurchaseSummary';

import "./styles.css";

function App() {
  return (
    <div className="App">
      <PurchaseSummary />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
