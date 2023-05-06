import './App.css';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';


function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      {/* <Route path='register' element={<Register/>}/> */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/details" element={<ProductDetail />} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;