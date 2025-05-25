import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import IT051 from "./pages/IT-05-1";
import IT052 from "./pages/IT-05-2";
import IT053 from "./pages/IT-05-3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/IT-05-1" element={<IT051 />} />
        <Route path="/IT-05-2" element={<IT052 />} />
        <Route path="/IT-05-3" element={<IT053 />} />
        <Route path="/" element={<Navigate to="/IT-05-1" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
