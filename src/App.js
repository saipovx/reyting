import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header'
import Home from './components/home/Home'
import Footer from './components/footer/Footer';
import Rezume from './components/rezume/Rezume'

function App() {
  return (

  
    <BrowserRouter>

    <div className="app">

        <Routes>

          <Route path='/'  element={<Home />} />

          <Route path='/rezume'  element={<Rezume />} />

        </Routes>  

         <Footer  />

    </div>
    
    </BrowserRouter>
  );
}

export default App;
