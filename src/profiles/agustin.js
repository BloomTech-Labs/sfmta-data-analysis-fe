import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
  } from 'reactstrap';
import agustin from '../images/agustin.jpg';

const Agustin = props => {
    return (
        <div>
            <img src={agustin}/>
        </div>
    )
}

export default Agustin;