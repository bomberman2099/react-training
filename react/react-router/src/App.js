import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'

import './App.css';
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Articles from './pages/articles';
import { useState } from 'react';
function App() {
  const [LoggedIn] = useState(true)
  return (
    <div className='App'>
      
      <BrowserRouter>
        <nav>
        <h1>my Articles</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/articles/:id' element={<Articles/>} />
          <Route path='/bomberman' element={LoggedIn ? <p>hello handsome</p> : <Navigate to="/" />} />
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
