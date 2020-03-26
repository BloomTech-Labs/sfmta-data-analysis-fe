import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import jordan from '../images/jordan.jfif';

const Jordan = props => {
    return (
        <div className='profileDiv'>
            <Card>
                <CardImg top width="100%" src={jordan} alt="Profile picture" />
                <CardBody>
                    <CardTitle>Jordan Ireland</CardTitle>
                    <CardSubtitle>Data Scientist</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>View Github</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Jordan;