import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
  } from 'reactstrap';
import cody from '../images/cody.jpg';

const Cody = props => {
    return (
        <div className='profileDiv'>
            <Card>
                <CardImg top width="100%" src={cody} alt="Profile picture" />
                <CardBody>
                    <CardTitle>Cody Holman</CardTitle>
                    <CardSubtitle>Web Developer</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardBody className='buttonsDiv'>
                    <CardLink href='https://github.com/cholman' target='_blank'>Github</CardLink>
                    <CardLink href='' target='_blank'>LinkedIn</CardLink>
                </CardBody>
                
            </Card>
        </div>
    )
}

export default Cody;