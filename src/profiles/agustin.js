import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
  } from 'reactstrap';
import agustin from '../images/agustin.jpg';

const Agustin = props => {
    return (
        <div className='profileDiv'>
            <Card>
                <CardImg top width="100%" src={agustin} alt="Profile picture" />
                <CardBody>
                    <CardTitle>Agustin Cody Vargas</CardTitle>
                    <CardSubtitle>Data Scientist</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardBody className='buttonsDiv'>
                    <CardLink href='https://github.com/avdata' target='_blank'>Github</CardLink>
                    <CardLink href='' target='_blank'>LinkedIn</CardLink>
                </CardBody>
            </Card>
        </div>
    )
}

export default Agustin;