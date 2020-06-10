import React from 'react';
import AboutUsMap from './aboutUsMap';

import {StyledH2} from '../style'

const AboutUs = props => {
    return (
        <div className="about-us">
            <StyledH2>Our Team</StyledH2>
            <AboutUsMap/>
        </div>
    )
}



export default AboutUs;