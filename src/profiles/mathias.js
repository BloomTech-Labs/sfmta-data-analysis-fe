import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
  } from 'reactstrap';
import mathias from '../images/mathias.jpg';

const Mathias = props => {
    return (
        <div className='profileDiv'>
            <Card>
                <CardImg top width="100%" src={mathias} alt="Profile picture" />
                <CardBody>
                    <CardTitle>Mathias Skerden</CardTitle>
                    <CardSubtitle>Data Scientist</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                <CardBody className='buttonsDiv'>
                    <CardLink href='https://github.com/skredenmathias/' target='_blank'>Github</CardLink>
                    <CardLink href='https://www.linkedin.com/in/skredenmathias/' target='_blank'>LinkedIn</CardLink>
                </CardBody> 
            </Card>
        </div>
    )
}

export default Mathias;