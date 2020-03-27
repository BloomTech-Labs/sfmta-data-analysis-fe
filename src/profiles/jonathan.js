import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
  } from 'reactstrap';
import jonathan from '../images/jonathan.jpg';

const Jonathan = props => {
    return (
        <div className='profileDiv'>
            <Card>
                <CardImg top width="100%" src={jonathan} alt="Profile picture" />
                <CardBody>
                    <CardTitle>Jonathan Allison</CardTitle>
                    <CardSubtitle>Web Developer</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardBody className='linksDiv'>
                    <CardLink href='https://github.com/qb1968' target='_blank'>Github</CardLink>
                    <CardLink href='https://www.linkedin.com/in/jonathan-allison-1a4136196/' target='_blank'>LinkedIn</CardLink>
                </CardBody>
                
            </Card>
        </div>
    )
}

export default Jonathan;