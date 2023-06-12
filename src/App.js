import React from "react";
import "./style.css";
import Header from './components/Header';
import Home from './pages/Home';
import Book from './pages/Book';
import Characters from './pages/Characters';
import Newsletter from './pages/Newsletter';
import About from './pages/About';
import Shop from './pages/Shop';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <React.Fragment>
          <Header/>
      </React.Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Book" element={<Book/>} />
        <Route path="/Characters" element={<Characters/>} />
        <Route path="/Newsletter" element={<Newsletter/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Shop" element={<Shop/>} />
      </Routes>
    </div>
  );
};

export default App;