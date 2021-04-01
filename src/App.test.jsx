import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import { describe, it, expect } from '@jest/globals';
import App from './App';

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Grasshopper/i);
    expect(linkElement).toBeInTheDocument();
  });
});
