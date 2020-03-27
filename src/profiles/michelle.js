import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
  } from 'reactstrap';
import michelle from '../images/michelle.jpg';

const Michelle = props => {
    return (
        <div>
            <img src={michelle}/>
        </div>
    )
}

export default Michelle;
