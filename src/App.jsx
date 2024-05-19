import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VendingMachine from './VendingMachine';
import CheeseIt from './CheeseIt';
import Goldfish from './Goldfish';
import Poptarts from './Poptarts';

function App() {
  // Render
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Routes go here */}
          <Route path="/" element={<VendingMachine />} />
          <Route path="/cheeseit" element={<CheeseIt />} />
          <Route path="/goldfish" element={<Goldfish />} />
          <Route path="/poptarts" element={<Poptarts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
