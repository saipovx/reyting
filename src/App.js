import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header'
import Home from './components/home/Home'


function App() {
  return (

  
    <BrowserRouter>

    <div className="app">

        <Header />
  
        <Routes>

          <Route path='/'  element={<Home />} />

        </Routes>  

    </div>
    
    </BrowserRouter>
  );
}

export default App;
