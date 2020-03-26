import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import connor from '../images/connor.jpg';

const Connor = props => {
    return (
        <div className='profileDiv'>
            <Card>
                <CardImg top width="100%" src={connor} alt="Profile picture" />
                <CardBody>
                    <CardTitle>Connor Angelis</CardTitle>
                    <CardSubtitle>Web Developer</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>View Github</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Connor;