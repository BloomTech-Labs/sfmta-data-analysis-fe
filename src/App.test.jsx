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
import {AboutCard} from './components/AboutUs/About-Cards';
import {AboutUsMap} from './components/AboutUs/aboutUsMap';
import Route from './components/central-panel/route';


// Central Panel components

test('map renders without crashing', () => {
  render(<Map/>)
})

test('line chat renders without crashing', () => {
  render(<LineChart/>)
})

test ('Route picker is rendering without crashing', () => {
  render(<Route/>)
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
  const gaps = getByText('50%');
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


// about us tests


test('about us card component renders without crashing', () => {
  render(<AboutCard/>)
})

test('this tests the about us user field', () => {
  const { getByText } = render(<AboutCard  />);
  const aboutcard = getByText('Nick Migel');
  expect(aboutcard).toBeInTheDocument();
})


test('about us map component renders without crashing', () => {
  render(<AboutUsMap/>)
})
















