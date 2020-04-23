import React from 'react';
import { NavLink } from 'reactstrap';
import {Wrapper1,StyledModal,StyledModalBody,ImageTextWrapper,ModalImg,StyledModalFooter,StyledH10,StyledHr,StyledH20,StyledLink, StyledP} from '../style';
const ModalCard = ({student: {name, title, img, bio, github, linkedIn}, modal, toggle}) => {
    return (
        <Wrapper1>
            <StyledModal isOpen={modal} toggle={toggle} size='lg' style={{maxWidth: '632px', width: '100%'}}>
                <ImageTextWrapper>
                <ModalImg src={img} alt='profile pic'/>
                <StyledModalBody>
                    <StyledH10>{name}</StyledH10>
                    <StyledHr/>
                    <StyledH20>{title}</StyledH20>
                    <StyledP>{bio}</StyledP>
                </StyledModalBody>
                </ImageTextWrapper>
                <StyledModalFooter>
                    <StyledLink href={github} target='_blank'>Github</StyledLink>{' '}
                    <StyledLink href={linkedIn} target='_blank'>LinkedIn</StyledLink>
                    <NavLink onClick={toggle}><i className="fas fa-times"></i></NavLink>
                </StyledModalFooter>
            </StyledModal>
        </Wrapper1>
)}

export default ModalCard;

