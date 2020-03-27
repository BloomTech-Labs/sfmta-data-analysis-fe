import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
  } from 'reactstrap';
import jordan from '../images/jordan.jpg';

const Jordan = props => {
    return (
        <div className='profileDiv'>
            <Card>
                <CardImg top width="100%" src={jordan} alt="Profile picture" />
                <CardBody>
                    <CardTitle>Jordan Ireland</CardTitle>
                    <CardSubtitle>Data Scientist</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardBody className='buttonsDiv'>
                    <CardLink href='https://github.com/Jordan-Ireland' target='_blank'>Github</CardLink>
                    <CardLink href='https://www.linkedin.com/in/jordan-b-ireland/' target='_blank'>LinkedIn</CardLink>
                </CardBody> 
                
            </Card>
        </div>
    )
}

export default Jordan;