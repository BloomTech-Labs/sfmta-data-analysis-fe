import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

import NavBar from './components/navBar';
import LandingPage from './components/landingPage';
import DataPage from './components/dataPage';
import AboutUs from './components/aboutUs';
import Connor from './profiles/connor';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Route exact path="/" component={LandingPage} />
      <Route path = "/data" component={DataPage} />
      <Route path='/aboutus' component={AboutUs} />
      <Route path='/profile' component={Connor} />
      </Router>
    </div>
  );
}

export default App;
