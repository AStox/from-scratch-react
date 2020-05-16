import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Main from "./main";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Main />
        </Route>
      </div>
    </Router>
  );
};

export default App;
