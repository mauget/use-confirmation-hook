import React from 'react';
import { shallow } from 'enzyme';
import {
  describe, expect, it, jest,
} from '@jest/globals';
import useConfirmation from './useConfirmation';

const handleCloseMock = jest.fn();

const TestFake = () => {
  const { Dialog, onOpen } = useConfirmation({
    handleClose: handleCloseMock,
    headerText: 'Confirmation Demo',
    bodyText: 'Delete a phantom item?',
  });

  return (
    <>
      <button type="button" onClick={() => onOpen()}>Launch Confirmation Popup</button>
      <Dialog />
    </>
  );
};

describe('useConfirmation', () => {
  it('should execute', () => {
    handleCloseMock.mockReset();

    const wrapper = shallow(<TestFake>Stuff</TestFake>);
    expect(wrapper).toMatchSnapshot();
  });
});
