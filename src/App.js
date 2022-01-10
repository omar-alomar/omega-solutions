import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Quote from './components/pages/Quote'
import Footer from './components/Footer/Footer';
import ComingSoon from './components/pages/ComingSoon';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
      <div className="content-container">
        <Navbar />
        <div className="content-wrapper">
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
          <Route path='/quote' component={Quote} />
          <Route path='/comingsoon' component={ComingSoon} />
        </Switch>
        </div>
        <div className="footer-wrapper">
        <Footer /></div>
      </div>
      </Router>
    </>
    
  );
}

export default App;
