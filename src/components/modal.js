import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalCard = ({student: {name, title, img, bio, github, linkedIn}, modal, toggle}) => {
    return (
            <Modal isOpen={modal} >
                <ModalHeader >{name}</ModalHeader>
                <ModalBody>
                    <h2>{title}</h2>
                    <img src={img} />
                    <p>{bio}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" href={github} target='_blank'>Github</Button>{' '}
                    <Button color="secondary" href={linkedIn} target='_blank'>LinkedIn</Button>
                    <Button color="danger" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
)}

export default ModalCard;