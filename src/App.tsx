import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainContent from "./mainContent";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <MainContent />
      </div>
    </Router>
  );
};

export default App;
