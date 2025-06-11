import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageNotFound from "./app/components/page-not-found/PageNotFound";
import Home from "./app/pages/home"; // Make sure the component is exported properly from this file

function App() {
  return (
    <Router>
      <div className="App font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
