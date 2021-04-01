import React, { useState } from 'react';
import styled from 'styled-components';
import useConfirmation from './hooks/useConfirmation';

const AppContainer = styled.div`
  text-align: center;
  background-color: dimgray;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Button = styled.button`
    background-color: darkGray;
    color: white';
    border: solid 2px #9f7500;
    border-radius: 8px;
    width: 5.0rem;
    padding: 1.0rem;
    margin: 0.5rem;
`;

const Header = styled.h1` `;

const Message = styled.div` `;

function App() {
  const [outcome, setOutcome] = useState(null);
  const handleClose = (response) => setOutcome(`You chose "${response ? 'yes' : 'no'}"`);

  const { Dialog, onOpen } = useConfirmation({
    handleClose,
    headerText: 'Confirmation Demo',
    bodyText: 'Delete a phantom item?',
  });

  return (
    <AppContainer>
      <Header>Hi, Grasshopper</Header>
      <Message>{outcome}</Message>
      <Button onClick={() => onOpen()}>Launch Confirmation Popup</Button>
      <Dialog />
    </AppContainer>
  );
}

export default App;
