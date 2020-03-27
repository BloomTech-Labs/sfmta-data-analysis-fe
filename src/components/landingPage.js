import React from 'react';
import styled from 'styled-components';
import trolley from '../images/trolley.jpg';
import city from '../images/city.jpg'
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
// border: 15px solid #FD5A1E;
`
const Div2 = styled.div`
position: absolute;
width: 446px;
height: 398px;
left: 821px;
top: 519px;

background-image:url(${trolley});
`
const Div4 = styled.div`
position: absolute;
width: 446px;
height: 398px;
left: 821px;
top: 1632px;
bottom:300px;

background-image:url(${city});
`
const Div3 = styled.div`
position: absolute;
width: 446px;
height: 398px;
left: 160px;
top: 1083px;

background: #080808;
opacity: 0.5;
`


const LandingPage = () => {
  return (
    <section>
    <Div>
      <h1>Problem</h1>
       <p>There is no publically available source of historical SFMTA bus and rail locations so that citizens, oversight committee members, and SFMTA staff can figure out what causes service distruptions.</p>
      
     </Div> 
    <Div2></Div2>
    <Div3></Div3>
    <Div4></Div4>
      
</section>
    
)}

export default LandingPage