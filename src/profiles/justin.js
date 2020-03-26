import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
  } from 'reactstrap';
import justin from '../images/justin.jpg';

const Justin = props => {
    return (
        <div className='profileDiv'>
            <Card>
                <CardImg top width="100%" src={justin} alt="Profile picture" />
                <CardBody>
                    <CardTitle>Justin Menendez</CardTitle>
                    <CardSubtitle>UX Designer</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardBody className='buttonsDiv'>
                    <CardLink href='' target='_blank'>Portfolio</CardLink>
                    <CardLink href='' target='_blank'>LinkedIn</CardLink>
                </CardBody> 
            </Card>
        </div>
    )
}

export default Justin;