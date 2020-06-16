import React from 'react';
import profileData from '../profileData'

const AboutCard = () => {
  return(
    <div>
      {profileData.map(Card => {
      return (
      <div className="Dev-Card">
        <img src={Card.img} alt = "developer profile"/>
        <h5>{Card.name}</h5>
        <h5>{Card.title}</h5>
        <h5>{Card.github}</h5>
        <h5>{Card.linkedIn}</h5>
      </div>
      )
    })}    
    </div>
  );
}

export default AboutCard
  
