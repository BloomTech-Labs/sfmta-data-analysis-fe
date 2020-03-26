import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import agustin from '../images/agustin.jfif';

const Agustin = props => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={agustin} alt="Profile picture" />
                <CardBody>
                    <CardTitle>Agustin Cody Vargas</CardTitle>
                    <CardSubtitle>Data Scientist</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>View Github</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Agustin;