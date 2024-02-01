import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './assets/Components/Navbar';
import Hero from './assets/Components/Hero';
import About from './assets/Components/About';
import Internship from './assets/Components/Internship';
import Projects from './assets/Components/Projects';
import Contact from './assets/Components/Contact';
import Footer from './assets/Components/Footer'
import UnderMaintenance from './assets/Components/UnderMaintenance';

function App() {
  return (
    <Router>
      <div className='container min-w-full min-h-screen'>
        <NavBar />
        <div className='main'>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/projects" element={<UnderMaintenance />} />
            <Route path="/contact" element={<UnderMaintenance />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;