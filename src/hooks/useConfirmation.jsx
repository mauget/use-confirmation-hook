import React, { useCallback, useState } from 'react';
import ConfirmationModal from '../components/ConfirmationModal';

export default function useConfirmation({
  handleClose,
  headerText,
  bodyText,
}) {
  const [show, setShow] = useState(false);

  const onOpen = () => {
    setShow(true);
  };

  const handleCloseResponse = (response) => {
    handleClose(response);
    setShow(false);
  };

  const Dialog = useCallback(
    () => (
      <ConfirmationModal
        handleClose={handleCloseResponse}
        headerText={headerText}
        show={show}
      >
        {bodyText}
      </ConfirmationModal>
    ),
    [show],
  );

  return { Dialog, onOpen };
}
