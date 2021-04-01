import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

// These are the allowed openPos values
export const CM_CENTER_CENTER = Symbol('CM_CENTER_CENTER');
export const CM_TOP_LEFT = Symbol('CM_TOP_LEFT');
export const CM_TOP_CENTER = Symbol('CM_TOP_CENTER');
export const CM_TOP_RIGHT = Symbol('CM_TOP_RIGHT');

// These are private components

// Modal background layer - visible or invisible, but always floating above client's elements
const Model = styled.div`
    z-index: auto;
    display: ${({ show }) => (show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
`;

// Rendered popup - a positional demo confirmation box
const Container = styled.div` 
    position:fixed;
    background: antiquewhite;
    width: 33%;
    height: auto;
    
    top: ${({ openPos }) => (
    {
      [CM_CENTER_CENTER]: '50%',
      [CM_TOP_LEFT]: '10%',
      [CM_TOP_CENTER]: '10%',
      [CM_TOP_RIGHT]: '10%',
    }[openPos])};
    
    left: ${({ openPos }) => (
    {
      [CM_CENTER_CENTER]: '50%',
      [CM_TOP_LEFT]: '5%',
      [CM_TOP_CENTER]: '50%',
      [CM_TOP_RIGHT]: '95%',
    }[openPos])};
  
    transform: ${({ openPos }) => (
    {
      [CM_CENTER_CENTER]: 'translate(-50%,-50%)',
      [CM_TOP_LEFT]: 'translate(0,0)',
      [CM_TOP_CENTER]: 'translate(-50%,0)',
      [CM_TOP_RIGHT]: 'translate(-100%,0)',
    }[openPos])};

    border-radius: 10px;
    padding: 0.75rem;
    color: rgba(0,0,139, 0.9);
`;

const Button = styled.button`
    background-color: ${({ primary }) => (primary ? 'green' : 'red')};
    color: ${({ primary }) => (primary ? 'white' : 'white')};
    border: solid 2px #9f7500;
    border-radius: 8px;
    width: 5.0rem;
    padding: 0.2rem;
    margin: 0.2rem;
`;

const Header = styled.div`
    font-size: calc(9px + 2 * vmin);
    color: rgba(0,0,139, 0.7);;
`;

const HBar = styled.div`
    width: 100%;
    height: 1px;
    border: solid 1px rgba(80,80,150, 0.4);
    background-color: rgba(80,80,150, 0.4);
`;

const ButtonBar = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
    justify-content: flex-end;
`;

const Slot = styled.div`
    font-size: medium;
    color: inherit;
`;

function ConfirmationModalImpl({
  handleClose, // renderProp fn returns true or false
  show, // boolean - visible/invisible
  headerText, // text
  bodyText, // html / inner text
  openPos, // symbol for placement
}) {
  const respondYes = () => handleClose(true);
  const respondNo = () => handleClose(false);

  return (
    <Model show={show}>
      <Container openPos={openPos}>
        <Header>{headerText}</Header>
        <HBar />
        <Slot>{bodyText}</Slot>
        <ButtonBar>
          <Button onClick={respondYes} primary>Yes</Button>
          <Button onClick={respondNo} primary={false}>No</Button>
        </ButtonBar>
      </Container>
    </Model>
  );
}

ConfirmationModalImpl.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  headerText: PropTypes.string,
  bodyText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  openPos: PropTypes.symbol,
};

ConfirmationModalImpl.defaultProps = {
  headerText: 'Confirmation',
  bodyText: 'Okay?',
  openPos: CM_TOP_CENTER,
};

export default ConfirmationModalImpl;
