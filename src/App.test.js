import React from 'react';
import { render } from '@testing-library/react';

import App from './App';
import LandingPage from './components/landingPage';
import RouteList from './components/dataPage';
import NavBar from './components/navBar';
import Footer from './components/footer';

jest.mock('./components/dataPage');
jest.mock('./components/aboutUs');

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

test('logo renders in nav bar', () => {
  const {getByAltText} = render(<NavBar />)

  getByAltText(/logo/i);
})

test('Home link renders in nav bar', () => {
  const {getByText} = render(<NavBar />)

  getByText('Home');
})

test('Data link renders in nav bar', () => {
  const {getByText} = render(<NavBar />)

  getByText('Data');
})

test('About us link renders in nav bar', () => {
  const {getByText} = render(<NavBar />)

  getByText('About Us');
})

// footer tests
test('Footer renders without crashing', () => {
  render(<Footer />)
})

test('logo renders in footer', () => {
  const {getByAltText} = render(<Footer />)

  getByAltText(/logo/i);
})

test('Home link renders in footer', () => {
  const {getByText} = render(<Footer />)

  getByText(/home/i);
})

test('Data link renders in footer', () => {
  const {getByText} = render(<Footer />)

  getByText('Data');
})

test('About us link renders in footer', () => {
  const {getByText} = render(<Footer />)

  getByText(/about/i);
})

// data page tests
test('data page is rendering', () => {
  render(<RouteList />)
})

test('show route button is rendering', () => {
  const {queryByText} = render(<RouteList />)

  queryByText('Show Route')
})

test('select type is rendering', () => {
  const {queryByText} = render(<RouteList />)

  queryByText('Select a type')
})

test('select route is rendering', () => {
  const {queryByText} = render(<RouteList />)

  queryByText('Select type to see routes')
})



