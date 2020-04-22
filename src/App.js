import React from "react";
import "./App.css";
import Header from "./homepage/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Addmessage from "./homepage/Addmessage";

function App() {
  return (
    <Router>
      <Header />
      <Addmessage />
    </Router>
  );
}

export default App;
