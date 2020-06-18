import React from 'react';
import profileData from '../profileData';
import { CardList, ProfileCard } from "../../style";



export const AboutCard = () => {
  return(
    <CardList className="cardList">
      {profileData.map(Card => {
      return (
        <ProfileCard className="card">
          <div className="img">
            <img src={Card.img} alt={`${Card.name}`} />
          </div>
          <div className="text-info">
            <h5>{Card.name}</h5>
            <h5>{Card.title}</h5>
            <p>{Card.location}</p>
            <p>{Card.cohort}</p>
            <p>{Card.bio}</p>
          </div>
          <div className="social">
            <a href={Card.github} target="_blank">
              <img src={require("../../images/Icons/mary_Github.svg")} alt="Github"/>
            </a>
            <a href={Card.linkedIn} target="_blank">
            <img src={require("../../images/Icons/mary_LinkedIn.svg")} alt="Linkedin"/>
            </a>
            {Card.portfolio && <a href={Card.portfolio} target="_blank">
            <img src={require("../../images/Icons/mary_Portfolio.svg")} alt="Portfolio" className="linkedIn"/>
            </a>}  
                        
          </div>
        </ProfileCard>
      );
    })}    
    </CardList>
  );
}

export default AboutCard
  
