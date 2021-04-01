import React from 'react';
import PropTypes from 'prop-types';
import ConfirmationModalImpl, {
  CM_CENTER_CENTER,
  CM_TOP_CENTER,
  CM_TOP_LEFT,
  CM_TOP_RIGHT,
} from './ConfirmationModalImpl';

export default function ConfirmationModal(props) {
  const {
    handleClose, // renderProp
    show, // boolean
    headerText, // text
    children, // html or text
    openPos, // defaults to top center
  } = { ...props };

  return (
    <ConfirmationModalImpl
      handleClose={handleClose}
      show={show}
      headerText={headerText}
      bodyText={children}
      openPos={openPos}
    />
  );
}

ConfirmationModal.propTyles = {
  handleClose: PropTypes.func.isRequired,
  headerText: PropTypes.string,
  show: PropTypes.bool.isRequired,
  bodyText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  openPos: PropTypes.oneOf([
    CM_CENTER_CENTER,
    CM_TOP_LEFT,
    CM_TOP_CENTER,
    CM_TOP_RIGHT,
  ]),
};

ConfirmationModal.defaultProps = {
  headerText: 'Confirmation',
  bodyText: 'COnfirm??',
  openPos: CM_TOP_CENTER,
};
