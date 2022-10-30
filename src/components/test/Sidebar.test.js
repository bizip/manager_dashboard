import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Sidebar from '../sidebars/Sidebar';

describe('Test for rendering dashboard page', () => {
  it('It should render dashboard page', () => {
    const sidebar = renderer
      .create(<Router><Sidebar /></Router>)
      .toJSON();
    expect(sidebar).toMatchSnapshot();
  });
});
