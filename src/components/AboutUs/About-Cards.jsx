import React from 'react';
import profileData from '../profileData';
import { CardList, ProfileCard } from "../../style";



const AboutCard = () => {
  return(
    <CardList>
      {profileData.map(Card => {
      return (
        <ProfileCard>
          <img src={Card.img} alt="{Card.name} picture" />
          <h5>{Card.name}</h5>
          <h5>{Card.title}</h5>
          <p>{Card.cohort}</p>
          <div>
            <ul>
              <li>
                <a
                  href={Card.github}
                  target="_blank"
                >
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href={Card.linkedIn} target="_blank">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </ProfileCard>
      );
    })}    
    </CardList>
  );
}

export default AboutCard
  
