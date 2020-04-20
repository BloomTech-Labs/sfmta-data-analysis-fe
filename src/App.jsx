import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavBar from './components/navBar';
import Footer from './components/footer';
import LandingPage from './components/landingPage';
import DataPage from './components/dataPage';
import AboutUs from './components/aboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <div className="content">
            <Route exact path="/" component={LandingPage} />
            <Route path="/data" component={DataPage} />
            <Route path='/aboutus' component={AboutUs} />
          </div>
          <Footer/>
        
      </Router>
    </div>
  );
}

export default App;
