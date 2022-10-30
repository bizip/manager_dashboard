import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import NavBar from '../navbars/NavBar';

describe('Test for rendering dashboard page', () => {
  it('It should render dashboard page', () => {
    const navbar = renderer
      .create(<Router><NavBar /></Router>)
      .toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
