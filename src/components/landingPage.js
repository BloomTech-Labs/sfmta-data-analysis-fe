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
// border: 15px solid #FD5A1E;
`
const Div2 = styled.div`
display: flex;
 min-width: 398px;
height: 398px;
// left: 821px;
// top: 519px;
margin: 5%;
margin-bottom: 300px;

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
  border: 15px solid white;
  margin-left: -60%;
  margin-top: 10%;
  width: 446px;
  height: 398px;
`
const Border2 = styled.div`
  border: 15px solid white;
  margin-left: -30%;
  margin-top: 10%;
  width: 446px;
  height: 398px;
`
const Spacer = styled.div`
  width: 50%;
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
const Head1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
`


const LandingPage = () => {
  return (
    <section>
    <Header>
      <Bracket/>
      <Head1><h1>Problem</h1>
       <p style={{color:"#EFD19F"}}>There is no publically available source of historical SFMTA bus and rail locations so that citizens, oversight committee members, and SFMTA staff can figure out what causes service distruptions.</p>
      </Head1>
       <Bracket2/>
     </Header>
    <Div2>
     <span id="some-element">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  </span>
    
      <Spacer> </Spacer>
      <img src={trolley}/> 
       
      <Border></Border>
   
  
    </Div2>
    <Div3> 
    <span id="some-element2">Consequat aute sit Lorem officia cillum et ullamco. Pariatur qui occaecat pariatur dolor eiusmod consectetur nisi nisi adipisicing duis sunt. Deserunt ea incididunt duis quis occaecat quis elit laboris consectetur ex proident nisi in. Do excepteur enim elit pariatur nostrud qui enim et laboris voluptate.</span>
      <img src={city} />
      <Border2/>
      <Spacer></Spacer> 
    </Div3>
    <Div4>
   
    </Div4>
</section>
    
)}

export default LandingPage