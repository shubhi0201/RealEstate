import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Buy from "./Buy/page";  
import Home from "./component/Home/Home";
import Sell from "./Sell/Sell";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Buy" element={<Buy />} />
        <Route path = "Sell" element={<Sell/>}/>
      </Routes>
    </Router>
  );
}

export default App;
