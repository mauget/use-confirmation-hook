import React from 'react';
import { shallow } from 'enzyme';
import {
  describe, expect, it, jest,
} from '@jest/globals';
import ConfirmationModalImpl from './ConfirmationModalImpl';

describe('index', () => {
  it('should render with show true', () => {
    const wrapper = shallow(
      <ConfirmationModalImpl
        handleClose={jest.fn}
        show
        headerText="Header"
      >
        body text
      </ConfirmationModalImpl>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with show false', () => {
    const wrapper = shallow(
      <ConfirmationModalImpl
        handleClose={jest.fn}
        show={false}
        headerText="Header"
      >
        body text
      </ConfirmationModalImpl>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
