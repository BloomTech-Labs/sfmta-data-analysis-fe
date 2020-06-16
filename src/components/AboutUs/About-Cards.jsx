import React from 'react';
import profileData from '../profileData';
import styled from "styled-components";

const CardList = styled.div `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const ProfileCard = styled.div `
  display: flex;
  align-items: center;
  margin: 2%;
  flex-direction: column;
  img {
    height: 20vh;
    width: 10vw;
    border-radius: 5%;
  }
  width: 25%;
  padding: 2%;
`

const AboutCard = () => {
  return(
    <CardList>
      {profileData.map(Card => {
      
      return (
      <ProfileCard>
        <img src={Card.img} alt='{Card.name} picture' />
        <h5>{Card.name}</h5>
        <h5>{Card.title}</h5>
        <h5>{Card.github}</h5>
        <h5>{Card.linkedIn}</h5>
      </ProfileCard>
      )
    })}    
    </CardList>
  );
}

export default AboutCard
  
