import React from "react";
import "./style.css";
import Header from './components/Header';
import Header2 from './components/Header2';
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


{/* <Route exact path="/" component={AboutPage} />
<Route path="/characters" component={CharactersPage} />
<Route path="/book" component={BookPage} />
<Route path="/newsletter" component={NewsletterPage} />
<Route path="/contact" component={ContactPage} />
<Route path="/our-mission" component={OurMissionPage} />
<Route path="/shop" component={ShopPage} /> */}