import React from 'react';
import styled from 'styled-components'
import { NavLink, Modal, ModalBody, ModalFooter } from 'reactstrap';

const ModalCard = ({student: {name, title, img, bio, github, linkedIn}, modal, toggle}) => {
    return (
        <Wrapper>
            <StyledModal isOpen={modal} toggle={toggle} size='lg' style={{maxWidth: '632px', width: '100%'}}>
                <ImageTextWrapper>
                <ModalImg src={img} />
                <StyledModalBody>
                    <StyledH1>{name}</StyledH1>
                    <StyledHr/>
                    <StyledH2>{title}</StyledH2>
                    <p>{bio}</p>
                </StyledModalBody>
                </ImageTextWrapper>
                <StyledModalFooter>
                    <StyledLink href={github} target='_blank'>Github</StyledLink>{' '}
                    <StyledLink href={linkedIn} target='_blank'>LinkedIn</StyledLink>
                    <StyledLink onClick={toggle}><i className="fas fa-times"></i></StyledLink>
                </StyledModalFooter>
            </StyledModal>
        </Wrapper>
)}

export default ModalCard;

const Wrapper = styled.div`
    width: 100%;
`

const StyledModal = styled(Modal)`
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
`

const ImageTextWrapper = styled.div`
    display: flex; 
    background: #636667;
    border-radius: 15px;
`

const ModalImg = styled.img`
    margin: 0 auto;
    width: 48%;
    border: none;
    display: block;
    padding: 15px 15px;
    border-radius: 15px;
`

const StyledModalFooter = styled(ModalFooter)`
    background: #636667;
    border-radius: 15px;
    border: none;
`

const StyledH1 = styled.h1`
    font-size: 40px;
    color: #EFD19F;
    margin-top: 10%;
`

const StyledHr = styled.hr`
    border-top: 5px solid rgba(253, 90, 30, 0.95);
    width: 200px;
    margin-top: 0;
`

const StyledH2 = styled.h2`
    font-size: 32px;
    color: #EFD19F;
`
const StyledLink = styled.a`
    color: rgba(253, 90, 30, 0.95);

    &:hover {
        color: #EFD19F;
        text-decoration: none;
    }
`