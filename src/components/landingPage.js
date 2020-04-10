import React from 'react';
import styled from 'styled-components';
import trolley from '../images/trolley.jpg';
import city from '../images/city.jpg'

const Header = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
text-align:center;
max-width: 500px;
height: auto;
right:176px;
top: 157px;
margin:auto;
margin-top: 50px;

`
const Bracket = styled.div`
  width: 147px;
  height: 300px;
  border-left: 15px solid white;
  border-top: 15px solid white;
  border-bottom: 15px solid white;
`
const Bracket2 = styled.div`
  width: 147px;
  height: 300px;
  border-right: 15px solid white;
  border-top: 15px solid white;
  border-bottom: 15px solid white;
`
const Div2 = styled.div`
display: flex;
min-width: 398px;
height: 398px;
margin:  10% 5% 25%;
`
const Div3 = styled.div`
display: flex;
flex-direction: reverse;
min-width: 500px;
height: 398px;
left: 160px;
top: 1083px;
margin: 0 5% 15%;
`

const Border = styled.div`
  border: 15px solid white;
  margin-left: -65%;
  margin-top: 10%;
  width: 446px;
  height: 398px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
const Border2 = styled.div`
  border: 15px solid white;
  margin-top: 10%;
  margin-left: -45%;
  width: 446px;
  height: 398px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
const Spacer = styled.div`
  width: 50%;
`

const Head1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
`

const StyledH1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
`


const LandingPage = () => {
  return (
    <section>
    <Header>
      <Bracket/>
      <Head1><h1>PROBLEM</h1>
       <p style={{color:"#EFD19F"}}>There is no publically available source of historical SFMTA bus and rail locations so that citizens, oversight committee members, and SFMTA staff can figure out what causes service distruptions.</p>
      </Head1>
       <Bracket2/>
     </Header>

    <Div2 className="trolley">
     <span id="some-element">
    We have created a publically available database showing historical data on the bus and rail systems. By providing real time analysis of travel times from major corridors, informed decisions to improve service can be made.
  </span>
    
      <Spacer> </Spacer>
      <img  src={trolley}/> 
       
      <Border className="border2">
        <StyledH1>Our Solution</StyledH1>
      </Border>
   
  
    </Div2>
    
    <Div3 className="city" > 
    
      <img src={city} />
      <Border2 className="border2">
        <StyledH1>Analysis</StyledH1>
      </Border2>
      
      <span id="some-element2">We've analyzed the root cause of bunches and gaps on the bus and rail lines so that policies and procedures can be implemented to reduce or prevent them. Our statistics and analysis will allow desicion makers to make system wide improvements.</span>
    </Div3>
</section>
    
)}

export default LandingPage