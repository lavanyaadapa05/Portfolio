import Shoot from './shoot';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
      <Router>
      <div className="min-h-screen bg-neutral-900 relative">
        
        <Routes>
          <Route path="/" element={<Shoot/>} />
          
          
          
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
