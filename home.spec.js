import React from 'react';
import { mount } from '@cypress/react';
import Home from '../components/Home';

describe('Home component', () => {
  it('renders correctly', () => {
    mount(<Home />);
    cy.get('h1').should('have.text', 'Welcome Home!');
  });
});
