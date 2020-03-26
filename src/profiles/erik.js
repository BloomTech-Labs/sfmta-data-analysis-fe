import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import erik from '../images/erik.jfif';

const Erik = props => {
    return (
        <div className='profileDiv'>
            <Card>
                <CardImg top width="100%" src={erik} alt="Profile picture" />
                <CardBody>
                    <CardTitle>Erik Sandoval</CardTitle>
                    <CardSubtitle>Team Lead/Web Developer</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>View Github</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Erik;