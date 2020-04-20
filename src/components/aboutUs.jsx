import React from 'react';
import AboutUsMap from './aboutUsMap';
import { UncontrolledAlert } from 'reactstrap';
import {StyledH2} from '../style'

const AboutUs = props => {
    return (
        <div>
            <StyledH2>Our Team</StyledH2>
            <UncontrolledAlert color='warning'>
                Click an orange marker to learn more about the team!
            </UncontrolledAlert>
            <AboutUsMap/>
        </div>
    )
}



export default AboutUs;