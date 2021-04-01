import React from 'react';
import { shallow } from 'enzyme';
import { describe, expect, it } from '@jest/globals';
import ConfirmationModal from './index';

describe('index', () => {
  it('should render', () => {
    const wrapper = shallow(
      <ConfirmationModal
        handleClose={() => {}}
        show
        headerText="Header Text"
      >
        body text
      </ConfirmationModal>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
