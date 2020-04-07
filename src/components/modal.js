import React from 'react';
import styled from 'styled-components'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const ModalCard = ({student: {name, title, img, bio, github, linkedIn}, modal, toggle}) => {
    return (
        <Wrapper>
            <StyledModal isOpen={modal} size='lg' style={{maxWidth: '800px', width: '80%'}}>
                <ImageTextWrapper>
                <ModalImg src={img} />
                <StyledModalBody>
                    <h1>{name}</h1>
                    <h2>{title}</h2>
                    <p>{bio}</p>
                </StyledModalBody>
                </ImageTextWrapper>
                <ModalFooter>
                    <Button color="primary" href={github} target='_blank'>Github</Button>{' '}
                    <Button color="secondary" href={linkedIn} target='_blank'>LinkedIn</Button>
                    <Button color="danger" onClick={toggle}>Close</Button>
                </ModalFooter>
            </StyledModal>
        </Wrapper>
)}

export default ModalCard;

const Wrapper = styled.div`
    width: 100%;
`

const StyledModal = styled(Modal)`
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`



const StyledModalBody = styled(ModalBody)`
    color: black;
    text-align:center;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid blue;
`

const ImageTextWrapper = styled.div`
    display: flex; 

`

const ModalImg = styled.img`
    margin: 0 auto;
    height: auto;
    max-width: 50%;
    border: none;
    display: block;
    padding: 5px 5px;
    border-radius: 10px;
`