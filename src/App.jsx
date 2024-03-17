import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Header from './Pages/Header'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Intuition from './Pages/Intuition'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/intuition" element={<Intuition />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

