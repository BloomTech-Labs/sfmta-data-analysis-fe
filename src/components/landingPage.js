import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
position: absolute;
width: 147px;
height: 372px;
left: 376px;
top: 257px;
right:376px


border: 15px solid #F5F5F5;
`

const H1 = styled.h1`

width: 308px;


top: 316px;

font-family: Khula;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 77px;
/* identical to box height */


color: #FFFFFF;

/* off white */

`
const Section = styled.section`
position: absolute;
width: 147px;
height: 372px;
left: 376px;
top: 257px;

/* off white */

border: 15px solid #F5F5F5;
`

const LandingPage = () => {
  return (
    <Section>
    <Div>
      <H1>Problem</H1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
      
     </Div> 
    
    
      
</Section>
    
)}

export default LandingPage