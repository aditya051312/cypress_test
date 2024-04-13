import React from 'react';
import { mount } from '@cypress/react';
import Home from '../components/Home';

describe('Home Component', () => {
  it('renders a div with a header saying \'Welcome Home!\'', () => {
    mount(<Home />);
    cy.get('div').should('exist');
    cy.get('h1').should('contain', 'Welcome Home!');
  });
});
