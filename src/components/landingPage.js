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
min-width: 500px;
height: 272px;
right:176px;
top: 157px;
margin:auto;
// border: 15px solid #FD5A1E;
`
const Div2 = styled.div`
display: flex;
min-width: 500px;
// height: 398px;
// left: 821px;
// top: 519px;
margin: 5%;

// background-image:url(${trolley});
`
const Div4 = styled.div`
display: flex;
flex-direction: reverse;
min-width: 500px;
height: 398px;
left: 821px;
top: 1632px;
bottom:300px;
margin: 5%;

//background-image:url(${city});
`
const Div3 = styled.div`
display: flex;
flex-direction: reverse;
min-width: 500px;
height: 398px;
left: 160px;
top: 1083px;
//opacity: 0.5;
margin: 5%;
`

const Border = styled.div`
  border: 8px solid white;
  min-width: 398px;
  height: 398px;
  margin-left: -50%;
  margin-bottom: -25%;
`


const LandingPage = () => {
  return (
    <section>
    <Div>
      <h1>Problem</h1>
       <p>There is no publically available source of historical SFMTA bus and rail locations so that citizens, oversight committee members, and SFMTA staff can figure out what causes service distruptions.</p>
      
     </Div> 
    <Div2><p>Consequat aute sit Lorem officia cillum et ullamco. Pariatur qui occaecat pariatur dolor eiusmod consectetur nisi nisi adipisicing duis sunt. Deserunt ea incididunt duis quis occaecat quis elit laboris consectetur ex proident nisi in. Do excepteur enim elit pariatur nostrud qui enim et laboris voluptate.</p> <img src={trolley}/><Border /></Div2>
    <Div3><img src={city} /><p >Consequat aute sit Lorem officia cillum et ullamco. Pariatur qui occaecat pariatur dolor eiusmod consectetur nisi nisi adipisicing duis sunt. Deserunt ea incididunt duis quis occaecat quis elit laboris consectetur ex proident nisi in. Do excepteur enim elit pariatur nostrud qui enim et laboris voluptate.</p> </Div3>
    <Div4><p>Consequat aute sit Lorem officia cillum et ullamco. Pariatur qui occaecat pariatur dolor eiusmod consectetur nisi nisi adipisicing duis sunt. Deserunt ea incididunt duis quis occaecat quis elit laboris consectetur ex proident nisi in. Do excepteur enim elit pariatur nostrud qui enim et laboris voluptate.</p></Div4>
      
</section>
    
)}

export default LandingPage