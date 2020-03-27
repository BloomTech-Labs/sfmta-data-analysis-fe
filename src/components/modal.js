import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalCard = props => {
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>Click</Button>
            <Modal isOpen={modal} toggle={toggle} className='modal'>
                <ModalHeader toggle={toggle}>{props.name}</ModalHeader>
                <ModalBody>
                    <h2>{props.title}</h2>
                    <img src={props.img} />
                    <p>{props.bio}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" href={} >Github</Button>{' '}
                    <Button color="secondary" >LinkedIn</Button>
                </ModalFooter>
            </Modal>
    </div>
    )
}

export default ModalCard;