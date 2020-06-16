import React from 'react';
import { render, getByAltText } from '@testing-library/react';

import App from './App.jsx';

import DashboardNav from './components/Dashboard/DashboardNav';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/footer';
import Bunches from './components/Left-panel/bunches';
import Gaps from './components/Left-panel/gaps';
import Coverage from './components/right-panel/coverage';
import Ontime from './components/right-panel/onTime';


jest.mock('./App');
jest.mock('./components/aboutUs');
jest.mock('./components/Dashboard/Dashboard')
jest.mock('./components/Dashboard/DashboardNav')
jest.mock('./components/Left-panel/bunches')
jest.mock('./components/Left-panel/gaps')
jest.mock('./components/right-panel/coverage')
jest.mock('./components/right-panel/onTime')




// need to figure out how to test calendar

//test for app
test('renders app without crashing', () => {
  render(<App />)
});
//header tests
test('header is rendering', () => {
 render(<navBar/>)

})

test('Dashboard tests renders without crashing', () => {
  render(<Dashboard />)
})

test('Dashboard nav component renders without crashing', () => {
  render(<DashboardNav/>)
})

//footer tests

test('Footer component renders without crashing', () => {
  render(<Footer />)
})
test('copyright text appears in footer', () => {
  const { getByText } = render(<Footer />)

  getByText(/ All Rights Reserved/i);
})

// left side components rendering

test('Bunches component renders without crashing', () => {
  render(<Bunches />)
})
// test('Bunches title appears in card', () => {
//   const { getByText } = render(<Bunches />)

//   getByText(/BUNCHES/i);
// })
test('Gaps component renders without crashing', () => {
  render(<Gaps />)
})

// test('calendar component renders without crashing', () => {
//   render(<SfmtaCalendar/>)
// })


// right side components rendering
test('Coverage component renders without crashing', () => {
  render(<Coverage />)
})

test('Ontime component renders without crashing', () => {
  render(<Ontime />)
})




// test('Line chart component renders without crashing', () => {
//   render(<Linechart/>)
// })

// test('Map component renders without crashing', () => {
//   render(<Map/>)
// })














// test('trolley image is rendering', () => {
//   const { getByAltText } = render(<LandingPage />)

//   getByAltText(/trolley/i);
// })

// test('city image renders on landing page', () => {
//   const { getByAltText } = render(<LandingPage />)

//   getByAltText(/city/i);
// })

// nav tests



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



