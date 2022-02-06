import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Details from './components/Details';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <> 
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/details/:id" element={ <Details />} />
      <Route path="/login" element={ <Login />} />
      <Route exact path="/" element={ <Home />} />
      </Routes>
    </BrowserRouter>
     
    
    </>
  );
}

export default App;
