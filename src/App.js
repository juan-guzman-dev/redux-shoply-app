import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Routes from "./Routes";

function App() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <Routes />
      </div>
    </main>
  );
}

export default App;
