import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// STYLES 🎨
import 'bulma/css/bulma.css';
import './App.css';

// import components 🗄️
import Navigation from './components/Navigation';
import Home from './components/Home';
import Games from './components/Games';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <h1>React Bulma Navbar Toggle</h1>
      
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route 
        element={<Home />} 
        path="/" default  

        />
        <Route 
        element={<About />}
        path="/about" 
        />
        <Route 
        element={<Games />}
        path="/games"  />
        <Route 
        element={<Contact />}
        path="/contact"  />
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App;
