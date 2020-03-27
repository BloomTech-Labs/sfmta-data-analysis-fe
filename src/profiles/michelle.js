import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
  } from 'reactstrap';
import michelle from '../images/michelle.jpg';

const Michelle = props => {
    return (
        <div className='profileDiv'>
            <Card>
                <CardImg top width="50%" src={michelle} alt="Profile picture" />
                <CardBody>
                    <CardTitle>Michelle Sirimanivong</CardTitle>
                    <CardSubtitle>Web Developer</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardBody className='linksDiv'>
                    <CardLink href='https://github.com/MicheSi' target='_blank'>Github</CardLink>
                    <CardLink href='https://www.linkedin.com/in/michellesirimanivong/' target='_blank'>LinkedIn</CardLink>
                </CardBody>
            </Card>
        </div>
    )
}

export default Michelle;
