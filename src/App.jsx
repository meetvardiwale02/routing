import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";


const App = () => {
  return (
  
  <BrowserRouter>
    <Routes>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
    </Routes>
    </BrowserRouter>
  
  );
};

export default App;