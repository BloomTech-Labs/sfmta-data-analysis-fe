import React from 'react';
import { render } from '@testing-library/react';



import Footer from './components/footer';
import {BunchesCard} from './components/Left-panel/bunches';
import {GapsCard} from './components/Left-panel/gaps';
import {Coverage} from './components/right-panel/coverage';
import {OnTimePercent} from './components/right-panel/onTime';
import {ScoreCardChart} from './components/right-panel/overallHealth';
import {LineChart} from './components/central-panel/line-chart';
import {Map} from './components/central-panel/Map';

// Central Panel components

test('map renders without crashing', () => {
  render(<Map/>)
})

test('line chat renders without crashing', () => {
  render(<LineChart/>)
})


// left side components rendering

test('Bunches component renders without crashing', () => {
  render(<BunchesCard />)
  
})

test('tests bunches title', () => {
  const { getByText } = render(<BunchesCard  />);
  const bunches = getByText('BUNCHES');
  expect(bunches).toBeInTheDocument();
})

test('tests bunches metric', () => {
  const { getByText } = render(<BunchesCard bunches={50} />);
  const bunches = getByText('BUNCHES');
  expect(bunches).toBeInTheDocument();
})

test('Gaps component renders without crashing', () => {
  render(<GapsCard />)
})

test('tests gaps title', () => {
  const { getByText } = render(<GapsCard   />);
  const gaps = getByText('GAPS');
  expect(gaps).toBeInTheDocument();
})

test('tests gaps metric', () => {
  const { getByText } = render(<GapsCard  gaps={50} />);
  const gaps = getByText('50');
  expect(gaps).toBeInTheDocument();
})



// right side components rendering
test('Coverage component renders without crashing', () => {
  render(<Coverage/>)
})

test('tests coverage title', () => {
  const { getByText } = render(<Coverage  />);
  const coverage = getByText('Coverage');
  expect(coverage).toBeInTheDocument();
})

test('tests coverage metric', () => {
  const { getByText } = render(<Coverage coverage={50} />);
  const coverage = getByText('50%');
  expect(coverage).toBeInTheDocument();
})


test('Ontime component renders without crashing', () => {
  render(<OnTimePercent/>)
})

test('tests on time title', () => {
  const { getByText } = render(<OnTimePercent  />);
  const ontime = getByText('On Time %');
  expect(ontime).toBeInTheDocument();
})

test('tests on time metric', () => {
  const { getByText } = render(<OnTimePercent on_time_percentage={50} />);
  const on_time_percentage = getByText('50%');
  expect(on_time_percentage).toBeInTheDocument();
})

test('overall health component renders without crashing', () => {
  render(<ScoreCardChart/>)
})

test('tests overall health title', () => {
  const { getByText } = render(<ScoreCardChart  />);
  const overall_health = getByText('Health');
  expect(overall_health).toBeInTheDocument();
})

test('tests overall health title', () => {
  const { getByText } = render(<ScoreCardChart overall_health={50}  />);
  const overall_health = getByText('50%');
  expect(overall_health).toBeInTheDocument();
})



//footer tests

test('Footer component renders without crashing', () => {
  render(<Footer />)
})
test('copyright text appears in footer', () => {
  const { getByText } = render(<Footer />)

  getByText(/ All Rights Reserved/i);
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



