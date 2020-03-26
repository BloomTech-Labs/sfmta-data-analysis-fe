import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import michelle from '../images/michelle.jfif';

const Michelle = props => {
    return (
        <div className='profileDiv'>
            <Card>
                <CardImg top width="100%" src={michelle} alt="Profile picture" />
                <CardBody>
                    <CardTitle>Michelle Sirimanivong</CardTitle>
                    <CardSubtitle>Web Developer</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>View Github</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Michelle;
