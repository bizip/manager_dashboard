import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Board from '../boards/Board';

describe('Test for rendering board component', () => {
  it('It should render board component', () => {
    const board = renderer
      .create(<Router><Board /></Router>)
      .toJSON();
    expect(board).toMatchSnapshot();
  });
});
