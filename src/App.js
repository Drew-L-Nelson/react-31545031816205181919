import React from "react";
import "./style.css";
import Header from './components/Header'
import { Routes, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Header />
    </Switch>
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