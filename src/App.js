import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

import NavBar from './components/navBar';
import LandingPage from './components/landingPage';
import DataPage from './components/dataPage';
import AboutUs from './components/aboutUs';

//profile imports
import Connor from './profiles/connor';
import Agustin from './profiles/agustin';
import Cody from './profiles/cody';
import Daniel from './profiles/daniel';
import Erik from './profiles/erik';
import Jonathan from './profiles/jonathan';
import Jordan from './profiles/jordan';
import Justin from './profiles/justin';
import Mathias from './profiles/mathias';
import Michelle from './profiles/michelle';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route path = "/data" component={DataPage} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/agustin' component={Agustin}/>
        <Route path='/cody' component={Cody} />
        <Route path='/connor' component={Connor} />
        <Route path='/daniel' component={Daniel} />
        <Route path='/erik' component={Erik} />
        <Route path='/jonathan' component={Jonathan} />
        <Route path='/jordan' component={Jordan} />
        <Route path='/justin' component={Justin} />
        <Route path='/mathias' component={Mathias} />
        <Route path='/michelle' component={Michelle} />
      </Router>
    </div>
  );
}

export default App;
