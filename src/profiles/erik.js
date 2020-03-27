import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink
  } from 'reactstrap';
import erik from '../images/erik.jpg';

const Erik = props => {
    return (
        <div>
            <img src={erik}/>
        </div>
    )
}

export default Erik;