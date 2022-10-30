import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Dashboard from '../Dashboard';

describe('Test for rendering dashboard page', () => {
  it('It should render dashboard page', () => {
    const dashboard = renderer
      .create(<Router><Dashboard /></Router>)
      .toJSON();
    expect(dashboard).toMatchSnapshot();
  });
});
