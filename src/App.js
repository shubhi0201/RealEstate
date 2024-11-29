import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/Home/Home";
import Buy from "./component/Buy/page";
import Sell from "./component/Sell/Page"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Buy" element={<Buy/>} />
        <Route path="Sell" element={<Sell/>}/>
      </Routes>
    </Router>
  );
}

export default App;
