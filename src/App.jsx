import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Map from './components/central-panel/Map.jsx';
import NavBar from './components/navBar';
import Footer from './components/footer';
//import LandingPage from './components/landingPage';
import DataPage from './components/dataPage';
import AboutUs from './components/aboutUs';
import Dashboard from './components/Dashboard/Dashboard'
import { connect } from 'react-redux'
import { getType, sendType, getCoordinates, getReport } from './actions/index.jsx'

function App(props) {
  props.getType()
  props.sendType({ route_type: "Bus" })
  props.getCoordinates(1)
  props.getReport()
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="content">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/:id" component={Dashboard} />
          <Route path="/data" component={Map} />
          <Route path='/info/aboutus' component={AboutUs} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default connect(null, { getType, sendType, getCoordinates, getReport })(App)
