import React from 'react';
import { render } from '@testing-library/react';
import createPlotlyComponent from "react-plotly.js/factory";
import Plotly from 'plotly.js/lib/core';
import scattermap from 'plotly.js/lib/scattermapbox';

import App from './App';
import LandingPage from './components/landingPage';
import RouteList from './components/dataPage';
import AboutUs from './components/aboutUs';
import NavBar from './components/navBar';
import Footer from './components/footer';

// app tests
test('renders app without crashing', () => {
  render(<App />);
});

// landing page tests
test('Landing Page renders without crashing', () => {
  render(<LandingPage/>)
})

test('trolley image is rendering', () => {
  const {getByAltText} = render(<LandingPage />)

  getByAltText(/trolley/i);
})

test('city image renders on landing page', () => {
  const {getByAltText} = render(<LandingPage />)

  getByAltText(/city/i);
})

// nav tests
test('Nav renders without crashing', () => {
  render(<NavBar />)
})

// footer tests
test('Footer renders without crashing', () => {
  render(<Footer />)
})

