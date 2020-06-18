import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Map from './components/central-panel/Map.jsx';
import NavBar from './components/navBar';
import Footer from './components/footer';
import AboutUs from './components/AboutUs/aboutUs';
import Dashboard from './components/Dashboard/Dashboard'
import { connect } from 'react-redux'
import { getType, sendType, getCoordinates, getReport, } from './actions/index.jsx'

function App(props) {
  props.getReport()
  // props.getRouteList({ date: '2020-06-01', route_type: 'Bus' })
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

export default connect(null, { getType, sendType, getCoordinates, getReport, })(App)
