import React from 'react';
import { render } from '@testing-library/react';

import App from './App.jsx';

import DashboardNav from './components/Dashboard/DashboardNav';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/footer';
import Bunches from './components/Left-panel/bunches';
import Gaps from './components/Left-panel/gaps';
import Coverage from './components/right-panel/coverage';
import Ontime from './components/right-panel/onTime';
import OverallHealth from './components/right-panel/overallHealth';
import Calendar from './components/Left-panel/calendar';
import { restyle } from 'plotly.js';

jest.mock('./App');
jest.mock('./components/aboutUs');
jest.mock('./components/Dashboard/Dashboard')
jest.mock('./components/Dashboard/DashboardNav')
jest.mock('./components/Left-panel/bunches')
jest.mock('./components/Left-panel/gaps')
jest.mock('./components/right-panel/coverage')
jest.mock('./components/right-panel/onTime')
jest.mock('./components/right-panel/overallHealth')
jest.mock('./components/Left-panel/calendar')

// need to figure out how to test calendar

//test for app
test('renders app without crashing', () => {
  render(<App />)
});

// dashboard and dashboard components rendering

test('Dashboard tests renders without crashing', () => {
  render(<Dashboard />)
})

test('Dashboard nav component renders without crashing', () => {
  render(<DashboardNav/>)
})

test('Footer component renders without crashing', () => {
  render(<Footer />)
})

// left side components rendering

test('Bunches component renders without crashing', () => {
  render(<Bunches />)
})
test('Gaps component renders without crashing', () => {
  render(<Gaps />)
})
test('calendar component renders without crashing', () => {
  render(<Calendar />)
})


// right side components rendering
test('Coverage component renders without crashing', () => {
  render(<Coverage />)
})

test('Ontime component renders without crashing', () => {
  render(<Ontime />)
})

test('OverallHealth component renders without crashing', () => {
  render(<OverallHealth />)
})














// test('trolley image is rendering', () => {
//   const { getByAltText } = render(<LandingPage />)

//   getByAltText(/trolley/i);
// })

// test('city image renders on landing page', () => {
//   const { getByAltText } = render(<LandingPage />)

//   getByAltText(/city/i);
// })

// nav tests

// test('logo renders in nav bar', () => {
//   const { getByAltText } = render(<NavBar />)

//   getByAltText(/logo/i);
// })

// test('Home link renders in nav bar', () => {
//   const { getByText } = render(<NavBar />)

//   getByText('Home');
// })

// test('Data link renders in nav bar', () => {
//   const { getByText } = render(<NavBar />)

//   getByText('Data');
// })

// test('About us link renders in nav bar', () => {
//   const { getByText } = render(<NavBar />)

//   getByText('About Us');
// })

// // footer tests

// test('logo renders in footer', () => {
//   const { getByAltText } = render(<Footer />)

//   getByAltText(/logo/i);
// })

// test('Home link renders in footer', () => {
//   const { getByText } = render(<Footer />)

//   getByText(/home/i);
// })

// test('Data link renders in footer', () => {
//   const { getByText } = render(<Footer />)

//   getByText('Data');
// })

// test('About us link renders in footer', () => {
//   const { getByText } = render(<Footer />)

//   getByText(/about/i);
// })

// // data page tests
// test('data page is rendering', () => {
//   render(<RouteList />)
// })

// test('show route button is rendering', () => {
//   const { queryByText } = render(<RouteList />)

//   queryByText('Show Route')
// })

// test('select type is rendering', () => {
//   const { queryByText } = render(<RouteList />)

//   queryByText('Select a type')
// })

// test('select route is rendering', () => {
//   const { queryByText } = render(<RouteList />)

//   queryByText('Select type to see routes')
// })



