import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Quote from './components/pages/Quote'
import Footer from './components/Footer/Footer';
import Slider from './components/Cards/Slider';
import ComingSoon from './components/pages/ComingSoon';

function App() {
  return (
    <>
    <div className="content-container">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
          <Route path='/quote' component={Quote} />
          <Route path='/comingsoon' component={ComingSoon} />
        </Switch>
        <footer className='footer--pin'>
          <Footer />
        </footer>
      </Router>
    </div>

    </>
    
  );
}

export default App;
