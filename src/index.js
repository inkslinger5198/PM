import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Confirm from "./Confirm";
import "./index.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/confirm" element={<Confirm />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
