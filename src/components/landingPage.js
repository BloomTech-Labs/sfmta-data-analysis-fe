import React from 'react';
import styled from 'styled-components';
import trolley from '../images/trolley.jpg';

// const Div = styled.div`
// position: absolute;
// width: 147px;
// height: 372px;
// left: 376px;
// top: 257px;
// right:376px;
// margin:0;


// border: 15px solid #F5F5F5;
// `

// const H1 = styled.h1`
// margin:0;
// width: 308px;


// top: 316px;

// font-family: Khula;
// font-style: normal;
// font-weight: normal;
// font-size: 48px;
// line-height: 77px;
// /* identical to box height */


// color: #FFFFFF;

// /* off white */

// `
const Div = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
position: absolute;
width: 1047px;
height: 272px;
right:176px;
top: 157px;
margin:auto;
border: 15px solid #FD5A1E;
`
const Div2 = styled.div`
position: absolute;
width: 446px;
height: 398px;
left: 821px;
top: 519px;

background-image:url(${trolley});
`

const LandingPage = () => {
  return (
    <section>
    <Div>
      <h1>Problem</h1>
       <p>There is no publically available source of historical SFMTA bus and rail locations so that citizens, oversight committee members, and SFMTA staff can figure out what causes service distruptions.</p>
      
     </Div> 
    <Div2></Div2>
    
      
</section>
    
)}

export default LandingPage