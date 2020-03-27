import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
  } from 'reactstrap';
import jordan from '../images/jordan.jpg';

const Jordan = props => {
    return (
        <div>
            <img src={jordan}/>
        </div>
    )
}

export default Jordan;