import React from 'react';
import AboutUsMap from './aboutUsMap';
import styled from 'styled-components';
import { UncontrolledAlert } from 'reactstrap';

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

const StyledH2 = styled.h2`
    text-align: center;
`

export default AboutUs;