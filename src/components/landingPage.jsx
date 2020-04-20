import React from 'react';
import trolley from '../images/trolley.jpg';
import city from '../images/city.jpg'
import {Header,Bracket,Bracket2,Div2,Div3} from '../style';
import {Border,Border2,Spacer,Head1,StyledH1,StyledSection,StyledImg} from '../style';

const LandingPage = () => {
  return (
    <StyledSection>
      <Header>
        <Bracket/>
        <Head1><h1>PROBLEM</h1>
          <p style={{color:"#EFD19F"}}>There is no publically available source of historical SFMTA bus and rail locations so that citizens, oversight committee members, and SFMTA staff can figure out what causes service distruptions.</p>
        </Head1>
       <Bracket2/>
      </Header>

      <Div2 className="trolley">
        <span id="some-element">We have created a publically available database showing historical data on the bus and rail systems. By providing real time analysis of travel times from major corridors, informed decisions to improve service can be made.</span>
        <Spacer> </Spacer>
        <div className="pic"><img src={trolley} alt='trolley'/> </div>
        <Border className="border2"><StyledH1>Our Solution</StyledH1></Border>
      </Div2>
    
      <Div3 className="city" > 
        <div><StyledImg src={city} alt='city' /></div>
        <Border2 className="border2"><StyledH1>Analysis</StyledH1></Border2>
        <span id="some-element2">We've analyzed the root cause of bunches and gaps on the bus and rail lines so that policies and procedures can be implemented to reduce or prevent them. Our statistics and analysis will allow desicion makers to make system wide improvements.</span>
      </Div3>
    </StyledSection>  
)}

export default LandingPage