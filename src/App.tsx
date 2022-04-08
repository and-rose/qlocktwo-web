import React from "react";
import { QLOCKTWO } from "./components/QLOCKTWO";
import "./App.css";

function App() {
  document.title = "QLOCKTWO-Web";
  return (
    <div className="App">
      <header className="App-header">
        <h1>QLOCKTWO WEB</h1>
        <QLOCKTWO />
      </header>
    </div>
  );
}

export default App;
