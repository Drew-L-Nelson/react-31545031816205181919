import React from "react";
import "./style.css";
import Header from './components/Header';
import Home from './pages/Home';
import Book from './pages/Book';
import Characters from './pages/Characters';
import Newsletter from './pages/Newsletter';
import OurMission from './pages/OurMission';
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
        <Route path="/Our%20Mission" element={<OurMission/>} />
        <Route path="/Shop" element={<Shop/>} />
      </Routes>
    </div>
  );
};

export default App;