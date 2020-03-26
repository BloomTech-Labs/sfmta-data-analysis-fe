import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
  } from 'reactstrap';
import daniel from '../images/daniel.jpg';

const Daniel = props => {
    return (
        <div className='profileDiv'>
            <Card>
                <CardImg top width="100%" src={daniel} alt="Profile picture" />
                <CardBody>
                    <CardTitle>Daniel Aguilar</CardTitle>
                    <CardSubtitle>Data Scientist</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardBody className='buttonsDiv'>
                    <CardLink href='https://github.com/aguilargallardo' target='_blank'>Github</CardLink>
                    <CardLink href='https://www.linkedin.com/in/daniel-aguilar-053377177/' target='_blank'>LinkedIn</CardLink>
                </CardBody>
            </Card>
        </div>
    )
}

export default Daniel;